import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import Features from "./components/Features";
import Applications from "./components/Applications";
import HowItWorks from "./components/HowItWorks";
import EarlyAccess from "./components/EarlyAccess";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <Features />
      <Applications />
      <HowItWorks />
      <EarlyAccess />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
