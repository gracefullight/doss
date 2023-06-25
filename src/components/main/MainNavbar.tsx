import { MapPinIcon, BellIcon } from "@heroicons/react/24/solid";

export default function MainNavbar() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn-ghost btn text-3xl normal-case">doss</a>
      </div>
      <div className="flex-none">
        <button className="btn-ghost btn-square btn">
          <MapPinIcon className="h-6 w-6" />
        </button>
        <button className="btn-ghost btn-square btn">
          <BellIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
