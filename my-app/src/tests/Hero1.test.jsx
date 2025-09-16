import { render, screen } from "@testing-library/react";
import Hero1 from "../components/Hero1";
import { describe, it, expect, vi } from "vitest";
import { IoMdArrowBack } from "react-icons/io";

vi.mock("../images/dr.webp", () => ({
  default: "/src/images/dr.webp", 
}));

vi.mock("react-icons/io", () => ({
  IoMdArrowBack: () => <span>icon</span>,
}));

describe("Hero1 component", () => {
  it("image should render", () => {
    render(<Hero1 />);
    const img = screen.getByAltText("pic");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("dr.webp"));
  });

  it("elements shuld render", () => {
    render(<Hero1 />);
    expect(screen.getByText("زیرساخت یکپارچه ابری")).toBeInTheDocument();
    expect(screen.getByText("جهانی امن‌تر، سریع‌تر و دردسترس‌تر")).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
        content.includes("با استفاده از زیرساخت یکپارچه")
      )
    ).toBeInTheDocument();
  });

  it("buttons should render", () => {
    render(<Hero1 />);
    expect(screen.getByRole("button", { name: "شروع کنید" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "تماس با فروش" })).toBeInTheDocument();
    expect(screen.getByText("درخواست مشاوره")).toBeInTheDocument();
  });
});
