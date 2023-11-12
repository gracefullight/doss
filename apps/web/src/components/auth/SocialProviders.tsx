"use client";

import type { BuiltInProviderType } from "next-auth/providers";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { signIn } from "next-auth/react";

interface SocialProvidersProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null;
}

// ? https://next-auth.js.org/configuration/pages#oauth-sign-in
export default function SocialProviders({ providers }: SocialProvidersProps) {
  if (!providers) {
    return null;
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <button
          key={provider.id}
          className="btn btn-block btn-outline mb-2"
          onClick={() => signIn(provider.id)}
          type="button"
        >
          Sign in with {provider.name}
        </button>
      ))}
    </>
  );
}
