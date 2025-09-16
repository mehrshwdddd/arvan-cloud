import { render, screen, fireEvent } from "@testing-library/react";
import CloudProductsSection from "../components/CloudProductsSection";
import { describe, it, expect,vi } from "vitest";

vi.mock("../images/cloud-computing-desktop.svg", () => ({ default: "server.svg" }));
vi.mock("../images/cdn-desktop.svg", () => ({ default: "cdn.svg" }));
vi.mock("../images/cloud-storage-desktop.svg", () => ({ default: "cloud.svg" }));
vi.mock("../images/video-platform-desktop.svg", () => ({ default: "video.svg" }));
vi.mock("../images/paas-desktop.svg", () => ({ default: "container.svg" }));
vi.mock("../images/dbaas-desktop.svg", () => ({ default: "db.svg" }));
vi.mock("../images/paas.svg", () => ({ default: "logo.svg" }));

describe("CloudProductsSection component", () => {
  it("it should render", () => {
    render(<CloudProductsSection />);
    expect(screen.getByText("محصولات ابری آروان")).toBeInTheDocument();
    expect(
      screen.getByText("پوشش کامل نیازهای شما برای راه‌اندازی کسب‌وکاری آنلاین")
    ).toBeInTheDocument();
  });

  it("initial image shuld render", () => {
    render(<CloudProductsSection />);
    const img = screen.getByAltText("active image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "server.svg");
  });

  it("items shuld be displayed", () => {
    render(<CloudProductsSection />);
    const items = [
      "سرور ابری",
      "شبکه توزیع محتوا",
      "فضای ابری",
      "پلتفرم ویدیو",
      "کانتینر ابری",
      "دیتابیس ابری",
    ];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("when click on the li image should change", () => {
    render(<CloudProductsSection />);
    const cloudItem = screen.getByText("فضای ابری");
    fireEvent.click(cloudItem);
    const img = screen.getByAltText("active image");
    expect(img).toHaveAttribute("src", "cloud.svg");
  });

  it("logo should be displayed", () => {
    render(<CloudProductsSection />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(
      screen.getByText("راه‌اندازی آسان و پایدار اپلیکیشن‌ها")
    ).toBeInTheDocument();
  });

  it("button should be in the document", () => {
    render(<CloudProductsSection />);
    expect(screen.getByRole("button", { name: /بیشتر بدانید/ })).toBeInTheDocument();
  });
});
