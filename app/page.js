// app/page.js
import Hero from './components/hero'
import LogoCarousel from "./components/logo_carousel";
import SectionVideo from './components/section_video';
import SectionFeatures from './components/section_features';
import SectionInsights from './components/section_insights';

export default function Page() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
      <SectionVideo />
      <SectionFeatures />
      <SectionInsights />
      {/* later: add Features, Testimonials sections below */}
    </main>
  )
}
