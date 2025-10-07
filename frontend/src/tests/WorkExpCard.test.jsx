import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkExpCard from "../componenets/WorkExpCard";
import "@testing-library/jest-dom";

test("renders role, company, duration, and responsibilities", () => {
    render(
        <WorkExpCard
            role="Sales Representative"
            company="JB Hi-Fi"
            duration="Sep 2023 - Present"
            responsibilities={["Hit 140% KPIs", "Improve CSAT"]}
        />
    );
    expect(screen.getByText(/Sales Representative/i)).toBeInTheDocument();
    expect(screen.getByText(/JB Hi-Fi/)).toBeInTheDocument();
    expect(screen.getByText(/Sep 2023 - Present/)).toBeInTheDocument();
    expect(screen.getByText(/Hit 140% KPIs/)).toBeInTheDocument();
});
