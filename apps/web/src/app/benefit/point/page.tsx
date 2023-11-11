"use client";

import {
  ChartPieIcon,
  ChevronRightIcon,
  ListBulletIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { formatNumber } from "~/utils/number";

export default function BenefitPoint() {
  const router = useRouter();
  const navItems = [{ title: "안내", link: "/benefit/point/agreement" }];
  const items = [
    { name: "넥슨", logoUrl: "https://placehold.co/100x100?text=nexon" },
    { name: "무신사", logoUrl: "https://placehold.co/100x100?text=musinsa" },
    { name: "요기요", logoUrl: "https://placehold.co/100x100?text=yogiyo" },
    { name: "ABLY", logoUrl: "https://placehold.co/100x100?text=ABLY" },
    { name: "여기어때", logoUrl: "https://placehold.co/100x100?text=yeogi" },
  ];

  const giftIcons = [
    {
      name: "CU | 크라운)새콤달콤포도",
      imageUrl: "https://placehold.co/100x100?text=cu",
      price: 500,
    },
    {
      name: "CU | 크라운)새콤달콤복숭아",
      imageUrl: "https://placehold.co/100x100?text=cu",
      price: 500,
    },
    {
      name: "이마트24 | 크라운)새콤달콤레몬",
      imageUrl: "https://placehold.co/100x100?text=emart24",
      price: 500,
    },
    {
      name: "GS25 | 퍼페티)츄파춥스",
      imageUrl: "https://placehold.co/100x100?text=gs25",
      price: 300,
    },
  ];

  const handleBrandSearch = () => {
    router.push("/benefit/point/brand");
  };

  return (
    <StackLayout>
      <StackLayoutNavbar items={navItems} isLightBackground />
      <div className="flex flex-col bg-neutral-800 pb-2">
        <div className="flex flex-col px-5">
          <span className="text-sm text-neutral-400">내 포인트</span>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-300">
              {formatNumber(200)} 원
            </h1>
            <button className="btn border-none bg-neutral-700" type="button">
              출금
            </button>
          </div>
          <div className="flex">
            <button className="btn btn-ghost btn-xs" type="button">
              <TicketIcon className="w-4" />
              무료 출금 쿠폰 {formatNumber(0)}개
              <ChevronRightIcon className="w-4" />
            </button>
          </div>
        </div>
        <div className="divider px-5"></div>
        <div className="flex flex-col gap-2 px-5">
          <h2 className="mb-1 font-medium text-neutral-300">
            여기서 쓸 수 있어요
          </h2>
          <input
            type="text"
            placeholder="포인트 사용처 검색"
            className="input w-full cursor-pointer bg-neutral-700"
            readOnly
            onClick={() => void handleBrandSearch()}
          />
          <div className="mt-2 grid grid-cols-3 gap-2 md:grid-cols-6">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-neutral-700 px-6 py-4"
              >
                <div className="avatar">
                  <div className="h-8 w-8 rounded-full">
                    <Image
                      src={item.logoUrl}
                      alt="thumbnail"
                      loading="lazy"
                      decoding="async"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <span className="text-sm text-neutral-300">{item.name}</span>
              </div>
            ))}
            <div className="col-start-auto flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-neutral-700 px-6 py-4">
              <div className="avatar">
                <div className="h-8 w-8 rounded-full">
                  <Image
                    src={`https://placehold.co/100x100?text=more`}
                    alt="thumbnail"
                    loading="lazy"
                    decoding="async"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <span className="text-sm text-neutral-300">더보기</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <h2 className="mb-2 font-medium text-neutral-300">기프티콘</h2>
            <div className="carousel rounded-box mt-2 max-w-full cursor-pointer space-x-4 self-start">
              {giftIcons.map((item) => (
                <div key={item.name} className="carousel-item">
                  <div className="flex w-32 cursor-pointer flex-col">
                    <img
                      src={item.imageUrl}
                      className="rounded-box w-full"
                      alt={item.name}
                      loading="eager"
                    />
                    <div className="mt-2 flex flex-col">
                      <div className="text-lg text-neutral-300">
                        {formatNumber(500)}원
                      </div>
                      <span className="text-sm text-neutral-400">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider mb-0"></div>
        <div className="btn btn-block btn-ghost">다른 상품 더보기</div>
      </div>
      <div className="mt-4 flex flex-grow flex-col gap-2 bg-neutral-800 px-3 pt-2">
        <div className="flex cursor-pointer select-none flex-row items-center justify-between rounded-lg p-2 active:bg-neutral-700">
          <div className="flex gap-2">
            <ChartPieIcon className="fill-info w-6" />
            <div className="font-medium text-neutral-300">
              지금까지 {formatNumber(30000)}원 받았어요
            </div>
          </div>
          <ChevronRightIcon className="w-4" />
        </div>
        <div className="flex cursor-pointer select-none flex-row items-center justify-between rounded-lg p-2 active:bg-neutral-700">
          <div className="flex gap-2">
            <ListBulletIcon className="fill-info w-6" />
            <div className="font-medium text-neutral-300">적립 내역 보기</div>
          </div>
          <ChevronRightIcon className="w-4" />
        </div>
      </div>
    </StackLayout>
  );
}
