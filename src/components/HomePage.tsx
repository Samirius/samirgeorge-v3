import { LanguageProvider } from './LanguageContext';
import Hero from './Hero';
import Pain from './Pain';
import TerminalDemo from './TerminalDemo';
import WhatIBuild from './WhatIBuild';
import FeaturedWork from './FeaturedWork';
import Community from './Community';
import Cta from './Cta';

export default function HomePage() {
  return (
    <LanguageProvider>
      <Hero />
      <div className="section-divider" />
      <Pain />
      <div className="section-divider" />
      <WhatIBuild />
      <div className="section-divider" />
      <TerminalDemo />
      <div className="section-divider" />
      <FeaturedWork />
      <div className="section-divider" />
      <Community />
      <div className="section-divider" />
      <Cta />
    </LanguageProvider>
  );
}
