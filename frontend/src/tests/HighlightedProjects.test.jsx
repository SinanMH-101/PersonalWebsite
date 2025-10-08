import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

// Mock axios
import axios from "axios";
vi.mock("axios");

// Mock ProjectCard so we assert by title easily
vi.mock("../componenets/ProjectCard", () => ({
  default: ({ title }) => <div data-testid="project-card">{title}</div>,
}));

// Import the component under test
import HighlightedProjects from "../componenets/HighlightedProjects";

const mockGet = axios.get;

beforeEach(() => {
  vi.clearAllMocks();
});

function renderWithRouter() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <HighlightedProjects />
    </MemoryRouter>
  );
}

describe("HighlightedProjects", () => {
  it("renders only highlighted projects", async () => {
    mockGet.mockResolvedValueOnce({
      data: [
        { id: "1", title: "CleanWalk", short_desc: "A", highlighted: true },
        { id: "2", title: "Portfolio", short_desc: "B", highlighted: false },
      ],
    });

    renderWithRouter();

    // waits for fetch + render
    const cards = await screen.findAllByTestId("project-card");
    expect(cards).toHaveLength(1);
    expect(cards[0]).toHaveTextContent("CleanWalk");

    // axios called with the correct endpoint
    expect(mockGet).toHaveBeenCalledWith("/api/projects");
  });

  it('has a "view all" link pointing to /projects', async () => {
    mockGet.mockResolvedValueOnce({ data: [] });

    renderWithRouter();

    const viewAll = screen.getByRole("link", { name: /view all/i });
    expect(viewAll).toHaveAttribute("href", "/projects");
  });

  it("renders nothing in the scroller when no highlighted projects exist", async () => {
    mockGet.mockResolvedValueOnce({
      data: [
        { id: "1", title: "X", short_desc: "x", highlighted: false },
        { id: "2", title: "Y", short_desc: "y", highlighted: false },
      ],
    });

    renderWithRouter();

    await waitFor(() =>
      expect(screen.queryAllByTestId("project-card")).toHaveLength(0)
    );
  });
});
