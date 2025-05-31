import React from 'react';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import WhatWeDoSection from './sections/WhatWeDoSection';
import ManufacturingServiceSection from './sections/ManufacturingServiceSection';
import HowToGetStartedSection from './sections/HowToGetStartedSection';
import LabReportSection from './sections/LabReportSection';
import AdvancedProductDevSection from './sections/AdvancedProductDevSection';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main> {/* Added main tag wrapper as in original HTML */}
        <HeroSection />
        <WhatWeDoSection />
        <ManufacturingServiceSection />
        <HowToGetStartedSection />
        <LabReportSection />
        <AdvancedProductDevSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
