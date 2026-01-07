"use client";

import { useEffect, useState } from "react";
import InitialCurtain from "./InitialCurtain";
import CurtainReveal from "./CurtainReveal";

type Stage = "initial" | "reveal" | "done";

export default function IntroCurtainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stage, setStage] = useState<Stage>("done");

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenCurtain");

    if (!hasSeen) {
      setStage("initial");
      sessionStorage.setItem("hasSeenCurtain", "true");
    }
  }, []);

  return (
    <>
      {stage === "initial" && (
        <InitialCurtain onComplete={() => setStage("reveal")} />
      )}

      {stage === "reveal" && (
        <CurtainReveal onComplete={() => setStage("done")} />
      )}

      {stage === "done" && children}
    </>
  );
}
