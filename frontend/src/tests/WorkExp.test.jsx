import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import WorkExp from "../componenets/WorkExp";

// mock axios globally
vi.mock("axios");
const mockGet = axios.get; 

beforeEach(() => {
  vi.clearAllMocks();
});

describe("WorkExp", () => {
  it("renders experiences from API", async () => {
    // fake API data
    mockGet.mockResolvedValueOnce({
      data: [
        {
          id: "1",
          role: "Sales Representative",
          company: "JB Hi-Fi",
          duration: "Sep 2023 - Present",
          responsibilities: ["Hit 140% KPIs", "Improve CSAT"],
        },
        {
          id: "2",
          role: "Research Intern",
          company: "Macquarie University",
          duration: "Nov 2024 - Feb 2025",
          responsibilities: ["Built Python curriculum"],
        },
      ],
    });

    render(<WorkExp />);


    expect(screen.getByText(/Work Experience:/i)).toBeInTheDocument();

    expect(
      await screen.findByText(/Sales Representative/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Research Intern/i)).toBeInTheDocument();


    expect(mockGet).toHaveBeenCalledTimes(1);

  });

  it("shows an error message when API fails", async () => {
    mockGet.mockRejectedValueOnce(new Error("network"));

    render(<WorkExp />);

    expect(
      await screen.findByText(/Failed to load work experience/i)
    ).toBeInTheDocument();
  });
});
