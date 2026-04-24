import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SectorsSection from "../components/SectorsSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServiceSection";


const HomePage: React.FC = () => {
  return (
    <div className="bg-[#050d09] text-green-100 min-h-screen overflow-x-hidden font-sans">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SectorsSection />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
};

export default HomePage;