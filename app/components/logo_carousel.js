"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
  "logos/beardo.svg",
];

export default function LogoCarousel() {
  return (
    <section className="relative py-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#071A20] to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#071A20] to-transparent z-10 pointer-events-none"></div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={7}
          spaceBetween={40}
          speed={6000} 
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false} 
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 5, spaceBetween: 40 },
            1024: { slidesPerView: 7, spaceBetween: 50 },
          }}
          className="!overflow-hidden flex items-center"
        >
          {logos.concat(logos).map((logo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 mx-auto select-none"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
