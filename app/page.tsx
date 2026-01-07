"use client";

import HeroSlider from "./components/HeroSlider";
import FeaturedProjects from "./components/home/FeaturedProjects";
import AboutPreview from "./components/home/AboutPreview";
import AwardsSection from "./components/home/AwardsSection";

export default function HomePage() {
   return (
    <>
      <HeroSlider />
      <FeaturedProjects />
      <AboutPreview />
      <AwardsSection />
    </>
   );
}
