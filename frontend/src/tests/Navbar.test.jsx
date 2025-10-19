import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

// NOTE: test file is in src/componenets/, so we import relatively:
import Navbar from "../componenets/Navbar";

function renderWithRoute(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
}

describe("Navbar", () => {
  it("renders Home, Projects, Contact, CV, and Transcript controls", () => {
    renderWithRoute("/");

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();

    // CV + Transcript links (wrapped <button/> inside <a/>)
    expect(screen.getByRole("link", { name: /cv/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /transcript/i })).toBeInTheDocument();
  });

  it("marks Home as active on '/' and Projects as inactive", () => {
    renderWithRoute("/");

    const home = screen.getByRole("link", { name: /home/i });
    const projects = screen.getByRole("link", { name: /projects/i });

    expect(home).toHaveAttribute("aria-current", "page");
    expect(projects).not.toHaveAttribute("aria-current");
  });

  it("marks Projects as active on '/projects' (and deeper paths)", () => {
    renderWithRoute("/projects/123");

    const home = screen.getByRole("link", { name: /home/i });
    const projects = screen.getByRole("link", { name: /projects/i });

    expect(projects).toHaveAttribute("aria-current", "page");
    expect(home).not.toHaveAttribute("aria-current");
  });

  it("CV and Transcript links download and open in a new tab with correct hrefs", () => {
    renderWithRoute("/");

    const cv = screen.getByRole("link", { name: /cv/i });
    const transcript = screen.getByRole("link", { name: /transcript/i });

    expect(cv).toHaveAttribute("download");
    expect(cv).toHaveAttribute("target", "_blank");
    expect(cv.getAttribute("href")).toBe("/files/Sinan Haque CV.pdf");

    expect(transcript).toHaveAttribute("download");
    expect(transcript).toHaveAttribute("target", "_blank");
    expect(transcript.getAttribute("href")).toBe("/files/Transcript-Sinan.pdf");
  });
});
