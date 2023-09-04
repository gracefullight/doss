import { shuffle } from "lodash";
import { useRouter } from "next/router";
import { NewsCard, NowInformation, ValuableInformation } from "./news";

export default function NewsTab() {
  const router = useRouter();
  const items = [
    {
      link: "/stock",
      tags: [{ name: "삼성전자", rate: 0.002 }],
      title: '"초대형 리더십 강화" ...삼성전자, 100형대 TV 출시 예고',
      source: "파이낸셜뉴스",
      timestamp: "2023-09-02T12:34:56Z",
      imageUrl: "https://placehold.co/100x100?text=samsung",
    },
    {
      link: "/stock",
      tags: [
        { name: "코리아나", rate: -0.058 },
        { name: "한국화장품제조", rate: -0.009 },
      ],
      title: "유커가 끌고, 비중국 수출이 밀고...화장품주 최고 100% 뛰었다",
      source: "머니투데이",
      timestamp: "2023-09-03T00:30:00Z",
      imageUrl: "https://placehold.co/100x100?text=cosmetics",
    },
    {
      link: "/stock",
      tags: [{ name: "테슬라", rate: -0.05 }],
      title: 'UBS "테슬라, 전기차 경쟁서 승리할것"',
      source: "이데일리해외",
      timestamp: "2023-09-02T00:34:56Z",
    },
    {
      link: "/stock",
      tags: [{ name: "대동", rate: 0.243 }],
      title: '농슬라 대동, 포스코와 로봇 개발 협력 소식에 20% "급등"',
      source: "한국경제",
      timestamp: "2023-09-04T10:40:00+09:00",
      imageUrl: "https://placehold.co/100x100?text=daedong",
    },
    {
      link: "/stock",
      tags: [{ name: "에코프로", rate: -0.05 }],
      title: "에코프로 하락에 베팅...2차전지 인버스ETF주목",
      source: "머니S",
      timestamp: "2023-09-04T08:00:00+09:00",
      imageUrl: "https://placehold.co/100x100?text=ecopro",
    },
    {
      link: "/stock",
      tags: [{ name: "삼성전자", rate: 0.002 }],
      title: "재고지수 보면 삼성전자 주가 보인다?",
      source: "조선비즈",
      timestamp: "2023-09-04T07:40:00+09:00",
      imageUrl: "https://placehold.co/100x100?text=samsung",
    },
    {
      link: "/stock",
      tags: [{ name: "포스코인터네셔널", rate: 0.013 }],
      title:
        "포스코인터네셔널, 아프리카서 2차전지 음극재용 흑연 연 9만톤 확보 소식에 강세",
      source: "매일경제",
      timestamp: "2023-09-04T08:00:00+09:00",
      imageUrl: "https://placehold.co/100x100?text=posco",
    },
    {
      link: "/stock",
      tags: [
        { name: "한익스프레스", rate: -0.008 },
        { name: "한화솔루션", rate: 0.013 },
      ],
      title: "공정위, 한화솔루션 과징금 취소소송 '승소'",
      source: "파이낸셜뉴스",
      timestamp: "2023-09-04T11:00:00+09:00",
    },
    {
      link: "/stock",
      tags: [
        { name: "지더블유바이텍", rate: 0.022 },
        { name: "퓨런티어", rate: 0.01 },
      ],
      title: "퓨런티어, 신규 수주가 기대되는 하반기 Not Rated",
      source: "뉴스핌",
      timestamp: "2023-09-04T11:00:00+09:00",
    },
    {
      link: "/stock",
      tags: [{ name: "한미반도체", rate: 0.003 }],
      title: "한미반도체, 신규 고객사 확장 기대감에 목표가⬆️",
      source: "아주경제",
      timestamp: "2023-09-04T09:00:00+09:00",
      imageUrl: "https://placehold.co/100x100?text=hanmi",
    },
  ];

  // TODO: view algorithm
  const shuffledItems = shuffle(items);
  const firstThreeItems = shuffledItems.slice(0, 3); // 0, 1, 2
  const nextThreeItems = shuffledItems.slice(3, 6); // 3, 4, 5
  const remainingItems = shuffledItems.slice(6); // 6 ~ 나머지

  const handleLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-neutral-800 px-5 py-5">
        {firstThreeItems.map((item) => (
          <NewsCard
            key={item.title}
            tags={item.tags}
            title={item.title}
            source={item.source}
            timestamp={item.timestamp}
            imageUrl={item.imageUrl}
            handleLink={() => handleLink(item.link)}
          />
        ))}
      </div>
      <NowInformation />
      <div className="mt-4 flex flex-col gap-4 bg-neutral-800 px-5 py-5">
        {nextThreeItems.map((item) => (
          <NewsCard
            key={item.title}
            tags={item.tags}
            title={item.title}
            source={item.source}
            timestamp={item.timestamp}
            imageUrl={item.imageUrl}
            handleLink={() => handleLink(item.link)}
          />
        ))}
      </div>
      <ValuableInformation />
      <div className="mt-4 flex flex-col gap-4 bg-neutral-800 px-5 py-5">
        {remainingItems.map((item) => (
          <NewsCard
            key={item.title}
            tags={item.tags}
            title={item.title}
            source={item.source}
            timestamp={item.timestamp}
            imageUrl={item.imageUrl}
            handleLink={() => handleLink(item.link)}
          />
        ))}
      </div>
    </>
  );
}
