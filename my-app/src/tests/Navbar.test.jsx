import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { describe, it, expect, vi } from "vitest";

vi.mock("../images/logo-header-desktop-v6.svg", () => ({
  default: "logo-header-desktop-v6.svg",
}));

describe("Navbar component", () => {
  it("logo should render", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo-header-desktop-v6.svg");
  });

  it("items should be in the document", () => {
    render(<Navbar />);
    expect(screen.getByText("اتاق خبر")).toBeInTheDocument();
    expect(screen.getByText("بلاگ")).toBeInTheDocument();
    expect(screen.getByText("تماس با ما")).toBeInTheDocument();
  });

  it("items should be in the document", () => {
    render(<Navbar />);
    expect(screen.getByText("محصولات")).toBeInTheDocument();
    expect(screen.getByText("راهکارها")).toBeInTheDocument();
    expect(screen.getByText("قیمت‌گذاری")).toBeInTheDocument();
    expect(screen.getByText("منابع دانش")).toBeInTheDocument();
    expect(screen.getByText("خدمات سازمانی")).toBeInTheDocument();
    expect(screen.getByText("خدمات دواپس")).toBeInTheDocument();
  });

  it("items should be in the document", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: "ورود" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ثبت نام" })).toBeInTheDocument();
  });
});
