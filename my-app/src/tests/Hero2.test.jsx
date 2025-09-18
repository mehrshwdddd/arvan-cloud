import { render, screen } from "@testing-library/react";
import Hero2 from "../components/Hero2";
import { vi,describe,it,expect } from "vitest";

vi.mock("../images/globe.svg", () => ({
  default: "/src/images/globe.svg",
}));

describe("Hero2 component", () => {
  it("image should render", () => {
    render(<Hero2 />);
    const img = screen.getByAltText("global");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("globe.svg"));
  });

  it("titles should render", () => {
    render(<Hero2 />);
    expect(screen.getByText("شبکه ابر آروان")).toBeInTheDocument();
    expect(screen.getByText("گستره‌ای به وسعت جهان")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("ابر آروان با در اختیار داشتن"))
    ).toBeInTheDocument();
  });

  it("text should be displayed", () => {
    render(<Hero2 />);
    expect(screen.getByText("+۲۰۰ هزار")).toBeInTheDocument();
    expect(screen.getByText("۴۰")).toBeInTheDocument();
    expect(screen.getByText("۵۰۰ میلیون")).toBeInTheDocument();
    expect(screen.getByText("۹۹.۹۹٪")).toBeInTheDocument();
  });
});
