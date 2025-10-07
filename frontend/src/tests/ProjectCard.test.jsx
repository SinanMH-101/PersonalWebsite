import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../componenets/ProjectCard"
import "@testing-library/jest-dom";

test("renders project cards", () => {
    render(
        <ProjectCard
            title={"Project1"}
            short_desc={"This is the first Project"}
        ></ProjectCard>

    );

    render(
        <ProjectCard
            title={"Project2"}
            short_desc={"This is the second Project"}
        ></ProjectCard>
    );

    expect(screen.getByText(/Project1/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the first Project/i)).toBeInTheDocument();

    expect(screen.getByText(/Project2/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the second Project/i)).toBeInTheDocument();
});