import Head from "next/head";
import { StackLayout, type StackLayoutNavbarItem } from "~/components/layout";

export default function BenefitNearby() {
  const navbarItems: StackLayoutNavbarItem[] = [
    {
      title: "2배 이벤트",
      link: "/benefit/nearby/events",
    },
    {
      title: "설정",
      link: "/benefit/nearby/settings",
    },
  ];

  return (
    <>
      <Head>
        <title>Doss | 혜택 | 토스켜기</title>
      </Head>
      <StackLayout items={navbarItems}>11</StackLayout>
    </>
  );
}
