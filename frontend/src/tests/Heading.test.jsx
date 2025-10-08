import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock Navbar so its internal links don't interfere with our assertions
vi.mock("../componenets/Navbar", () => ({ default: () => <nav data-testid="navbar" /> }));

import Heading from "../componenets/Heading";

describe("Heading", () => {
    it("renders name, social links, and navbar", () => {
        render(<Heading />);

        // Title
        expect(screen.getByRole("heading", { name: /sinan haque/i })).toBeInTheDocument();

        // Exactly two social links (GitHub + LinkedIn)
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(2);

        // Target _blank for both
        links.forEach((a) => expect(a).toHaveAttribute("target", "_blank"));

        // URLs
        const hrefs = links.map((a) => a.getAttribute("href") || "");
        expect(hrefs.some((h) => h.includes("github.com/SinanMH-101"))).toBe(true);
        expect(hrefs.some((h) => h.includes("linkedin.com/in/sinanhaque"))).toBe(true);

        // Navbar is present (mocked)
        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });
});
