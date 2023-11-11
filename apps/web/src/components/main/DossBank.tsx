"use client";

import { bankWelcomeToastState } from "../bank";
import Section from "./Section";

export default function DossBank() {
  const handleBankWelcomeToast = () => {
    bankWelcomeToastState.visible = true;
  };

  return (
    <Section
      title="도스뱅크"
      link="/bank"
      handleLink={handleBankWelcomeToast}
    />
  );
}
