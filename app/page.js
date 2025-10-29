// app/page.js
import Hero from './components/hero'
import LogoCarousel from "./components/logo_carousel";
import SectionVideo from './components/section_video';
import SectionFeatures from './components/section_features';
import SectionInsights from './components/section_insights';
import SectionReview from './components/section_review';
import SectionHowItWorks from './components/section_how_it_works';
import SectionTestimonials from './components/section_testimonials';
import SectionCTA from './components/section_CTA';

import Jumplist from "./components/jumplist/jumplist";
import homepageJson from "./data/homepage.json";


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
      <Jumplist json={homepageJson} />
      <SectionTestimonials />
      <SectionCTA />
    </main>
  )
}
