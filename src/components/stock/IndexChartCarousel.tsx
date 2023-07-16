import { Fragment } from "react";
import { formatNumber } from "~/utils/number";

interface CarouselItem {
  subheader: string;
  title: string;
  description: string;
}

export default function IndexChartCarousel() {
  const items: CarouselItem[] = [
    {
      subheader: "코스피",
      title: formatNumber(2628.3),
      description: "+37.07 (1.4%)",
    },
    {
      subheader: "코스닥",
      title: formatNumber(896.28),
      description: "+3.21 (0.3%)",
    },
    {
      subheader: "환율",
      title: formatNumber(1226.25),
      description: "-3.95 (0.3%)",
    },
    {
      subheader: "나스닥",
      title: formatNumber(14113.7),
      description: "-24.87 (0.1%)",
    },
    {
      subheader: "다우존스",
      title: formatNumber(34509.03),
      description: "+113.89 (0.3%)",
    },
    {
      subheader: "S&P 500",
      title: formatNumber(4505.42),
      description: "-4.62 (0.1%)",
    },
  ];
  return (
    <div className="carousel rounded-box max-w-full space-x-4 self-start">
      {items.map((item, index) => (
        <div className="carousel-item" key={index}>
          <div className="flex w-36 cursor-pointer flex-col justify-between gap-2 rounded-2xl bg-neutral-700 p-4">
            <div className="flex flex-col">
              <span className="text-sm">{item.subheader}</span>
              <span className="text-lg font-medium">
                {item.title.split("\n").map((str, i) => (
                  <Fragment key={i}>
                    {i > 0 && <br />}
                    {str}
                  </Fragment>
                ))}
              </span>
              <span className="text-sm text-error">{item.description}</span>
            </div>
            {/* Chart Here, 5분 단위 값으로 09:00부터 추가된 값 */}
          </div>
        </div>
      ))}
    </div>
  );
}
