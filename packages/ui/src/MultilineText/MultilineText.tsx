import { Fragment } from "react";

interface MultilineTextProps {
  children: string;
}

export function MultilineText({ children }: MultilineTextProps) {
  return (
    <>
      {children.split("\n").map((str, i) => (
        <Fragment key={str}>
          {i > 0 && <br />}
          {str}
        </Fragment>
      ))}
    </>
  );
}
