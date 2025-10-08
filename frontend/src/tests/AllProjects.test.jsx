import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

vi.mock("axios");
const mockGet = axios.get;

// Mock ProjectCard to show title plainly
vi.mock("../componenets/ProjectCard", () => ({
    default: ({ title }) => <div data-testid="project-card">{title}</div>,
}));

import AllProjects from "../componenets/AllProjects";

const renderWithRouter = (props = {}) =>
    render(
        <MemoryRouter initialEntries={["/"]}>
            <AllProjects {...props} />
        </MemoryRouter>
    );

beforeEach(() => {
    vi.clearAllMocks();
});

describe("AllProjects", () => {
    it("renders all fetched projects", async () => {
        mockGet.mockResolvedValueOnce({
            data: [
                { id: "1", title: "CleanWalk", short_desc: "A" },
                { id: "2", title: "Portfolio", short_desc: "B" },
                { id: "3", title: "TCP Chat", short_desc: "C" },
            ],
        });

        const onLoadingChange = vi.fn();
        renderWithRouter({ onLoadingChange });

        // cards render after fetch resolves
        const cards = await screen.findAllByTestId("project-card");
        expect(cards).toHaveLength(3);
        expect(cards.map(c => c.textContent)).toEqual([
            "CleanWalk",
            "Portfolio",
            "TCP Chat",
        ]);

        // axios called with correct endpoint
        expect(mockGet).toHaveBeenCalledWith("/api/projects");

        // loading turned off
        expect(onLoadingChange).toHaveBeenLastCalledWith(false);
    });

    it('has a "View All" link to /projects', async () => {
        mockGet.mockResolvedValueOnce({ data: [] });
        renderWithRouter();

        const link = screen.getByRole("link", { name: /view all/i });
        expect(link).toHaveAttribute("href", "/projects");
    });

    it("calls onLoadingChange(false) even when API fails", async () => {
        mockGet.mockRejectedValueOnce(new Error("network"));
        const onLoadingChange = vi.fn();

        renderWithRouter({ onLoadingChange });

        // wait for finally to run
        await waitFor(() => {
            expect(onLoadingChange).toHaveBeenCalledWith(false);
        });

        // no cards rendered
        expect(screen.queryAllByTestId("project-card")).toHaveLength(0);
    });
});
