"use client";

import SelectedWorks from "@/app/components/portfolio/SelectedWorks";
import OngoingWorks from "@/app/components/portfolio/OngoingWorks";
import ShareDialog from "@/app/components/portfolio/ShareDialog";

export default function PortfolioPage() {
  return (
    <>
      <SelectedWorks />
      <OngoingWorks />
      <ShareDialog />
    </>
  );
}
