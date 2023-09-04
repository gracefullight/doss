import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NewsCard from "~/components/stock/news/NewsCard";
import { formatTimestamp } from "~/utils/datetime";
import { formatPercent } from "~/utils/number";

describe("#NewsCard", () => {
  it("renders the title correctly", () => {
    render(
      <NewsCard
        tags={[]}
        title="Test Title"
        source="Test Source"
        timestamp="2023-09-04T07:40:00+09:00"
      />,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the tags, source, and timestamp correctly if provided", () => {
    const tags = [{ name: "테스트", rate: 0.002 }];
    const source = "Test Source";
    const timestamp = "2023-09-04T07:40:00+09:00";

    render(
      <NewsCard
        tags={tags}
        title="Test Title"
        source={source}
        timestamp={timestamp}
      />,
    );

    expect(
      screen.getByText("테스트 " + formatPercent(0.002)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${source} · ${formatTimestamp(timestamp)}`),
    ).toBeInTheDocument();
  });

  it("renders the image if provided", () => {
    render(
      <NewsCard
        tags={[]}
        title="Test Title"
        source="Test Source"
        timestamp="2023-09-04T07:40:00+09:00"
        imageUrl="https://test.com/test.jpg"
      />,
    );
    expect(screen.getByAltText("기사 이미지")).toBeInTheDocument();
  });

  it("invokes handleLink on click if provided", () => {
    const handleLink = vi.fn();

    render(
      <NewsCard
        tags={[]}
        title="Test Title"
        source="Test Source"
        timestamp="2023-09-04T07:40:00+09:00"
        handleLink={handleLink}
      />,
    );

    fireEvent.click(screen.getByText("Test Title"));
    expect(handleLink).toHaveBeenCalledTimes(1);
  });
});
