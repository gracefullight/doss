import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InformationCard from "~/components/stock/news/InformationCard";

describe("#InformationCard", () => {
  it("renders the title correctly", () => {
    render(<InformationCard title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the description if provided", () => {
    render(
      <InformationCard title="Test Title" description="Test Description" />,
    );
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders the image if provided", () => {
    render(
      <InformationCard
        title="Test Title"
        imageUrl="https://test.com/test.jpg"
      />,
    );
    expect(screen.getByAltText("thumbnail")).toBeInTheDocument();
  });

  it("invokes handleLink on click if provided", () => {
    const handleClick = vi.fn();
    render(<InformationCard title="Test Title" handleLink={handleClick} />);
    fireEvent.click(screen.getByText("Test Title"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
