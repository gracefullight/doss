import { BellIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function MainNavbar() {
  const router = useRouter();
  const handleNearby = async () => {
    await router.push("/benefit/nearby");
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl normal-case">doss</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => void handleNearby()}
          title="함께 도스켜고 포인트"
        >
          <MapPinIcon className="h-6 w-6" />
        </button>
        <button className="btn btn-square btn-ghost" title="알림" type="button">
          <BellIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
