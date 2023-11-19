import type { LinkProps } from "next/link";
import Link from "next/link";
import type { PropsWithChildren } from "react";

interface ConditionalLinkProps extends Omit<LinkProps, "href"> {
  href?: string;
}

export default function ConditionalLink(
  props: PropsWithChildren<ConditionalLinkProps>,
) {
  if (props.href) {
    return <Link href={props.href} {...props} />;
  }

  return <>{props.children}</>;
}
