import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

export default function StackLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="navbar sticky top-0 z-50 px-4">
        <div className="navbar-start">
          <ChevronLeftIcon
            className="w-6 cursor-pointer font-bold"
            onClick={handleBack}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
