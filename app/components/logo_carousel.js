"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
  "/logos/beardo.svg",
];

export default function LogoCarousel() {
  return (
    <section className="relative py-12 bg-[#071A20]">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#071A20] to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#071A20] to-transparent z-10 pointer-events-none"></div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={7}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          className="flex items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}