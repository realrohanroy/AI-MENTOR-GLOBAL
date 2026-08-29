import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FivePillars from "@/components/sections/FivePillars";
import Audiences from "@/components/sections/Audiences";
import ProductArchitecture from "@/components/sections/ProductArchitecture";
import AIIntelligence from "@/components/sections/AIIntelligence";
import TheDifference from "@/components/sections/TheDifference";
import SecurityPrivacy from "@/components/sections/SecurityPrivacy";
import DpiitRecognition from "@/components/sections/DpiitRecognition";
import Vision from "@/components/sections/Vision";
import Founder from "@/components/sections/Founder";
import RoadmapStatus from "@/components/sections/RoadmapStatus";
import EarlyAccess from "@/components/sections/EarlyAccess";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <FivePillars />
        <Audiences />
        <ProductArchitecture />
        <AIIntelligence />
        <TheDifference />
        <SecurityPrivacy />
        <DpiitRecognition />
        <Vision />
        <Founder />
        <RoadmapStatus />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
