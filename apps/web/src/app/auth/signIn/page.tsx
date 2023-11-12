import { getProviders } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { SocialProviders } from "~/components/auth";
import { getServerAuthSession } from "~/server/auth";

export default async function LoginPage() {
  const providers = await getProviders();
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="card bg-base-200 p-10">
        <div className="card-body items-center text-center">
          <Image
            src="/apple-touch-icon.png"
            alt="App Icon"
            className="mb-5 h-16 w-16"
            width={16}
            height={16}
          />
          <div className="card-actions">
            <SocialProviders providers={providers} />
          </div>
        </div>
      </div>
    </div>
  );
}
