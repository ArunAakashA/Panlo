// app/page.js
import Hero from './components/hero'
import LogoCarousel from "./components/logo_carousel";
import SectionVideo from './components/section_video';
import SectionFeatures from './components/section_features';
import SectionInsights from './components/section_insights';
import SectionReview from './components/section_review';
import SectionHowItWorks from './components/section_how_it_works';
import ScrollGlowLineWithSection_1 from './components/section_how_it_works_1';
import ScrollGlowLineWithSection_2 from './components/section_how_it_works_2';
import ScrollGlowLineWithSection_3 from './components/section_how_it_works_3';
import SectionTestimonials from './components/section_testimonials';
import SectionCTA from './components/section_CTA';

export default function Page() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
      <SectionVideo />
      <SectionFeatures />
      <SectionInsights />
      <SectionReview />
      <SectionHowItWorks />
      {/* <ScrollGlowLineWithSection_1 />
      <ScrollGlowLineWithSection_2 /> */}
      {/* <ScrollGlowLineWithSection_3 /> */}
      <SectionTestimonials />
      <SectionCTA />
    </main>
  )
}
