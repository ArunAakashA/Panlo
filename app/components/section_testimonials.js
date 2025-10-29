"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTestimonials() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    const pagination = paginationRef.current;
    if (!swiper || !pagination) return;

    gsap.fromTo(
      swiper,
      { opacity: 0.05, y: 120, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: swiper,
          start: "top 90%",
          end: "top 40%",
          scrub: 1.6,
        },
      }
    );

    gsap.fromTo(
      pagination,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: swiper,
          start: "top 80%",
          end: "top 35%",
          scrub: 1.6,
        },
      }
    );

    gsap.ticker.lagSmoothing(1000, 16);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Natalie Craig",
      role: "CEO @ Flash",
      company: "Flash",
      icon: "/flash-icon.svg",
      feedback:
        "Panlo saved us hours every week by cutting approval cycles in half.",
      avatar: "/images/avatar-natalie.webp",
    },
    {
      id: 2,
      name: "John Carter",
      role: "Creative Director @ Flash",
      company: "Flash",
      icon: "/flash-icon.svg",
      feedback:
        "The clarity and collaboration Panlo gives our team is unmatched.",
      avatar: "/images/avatar-natalie.webp",
    },
    {
      id: 3,
      name: "Lisa Nguyen",
      role: "Producer @ Flash",
      company: "Flash",
      icon: "/flash-icon.svg",
      feedback:
        "Everything is organized — feedback, versions, and deliverables in one place.",
      avatar: "/images/avatar-natalie.webp",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Design Head @ Flash",
      company: "Flash",
      icon: "/flash-icon.svg",
      feedback:
        "Our creative flow has never been smoother; everyone stays aligned.",
      avatar: "/images/avatar-natalie.webp",
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: "Marketing Manager @ Flash",
      company: "Flash",
      icon: "/flash-icon.svg",
      feedback:
        "Panlo simplifies our review process so much, it’s become our daily tool.",
      avatar: "/images/avatar-natalie.webp",
    },
    {
      id: 6,
      name: "Ravi Mehta",
      role: "Operations @ Flash",
      company: "Flash",
      icon: "/flash-icon.svg",
      feedback:
        "Managing projects and approvals is finally effortless and transparent.",
      avatar: "/images/avatar-natalie.webp",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-bg-primary text-white py-15 md:py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12 relative">

        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold leading-tight">
          Trusted by teams who value <br className="hidden sm:block" />
          <span className="text-secondary">clarity with creativity</span>
        </h2>

        <div className="hidden lg:block absolute left-0 top-0 h-full w-32 xl:w-40 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent pointer-events-none z-20"></div>
        <div className="hidden lg:block absolute right-0 top-0 h-full w-32 xl:w-40 bg-gradient-to-l from-bg-primary via-bg-primary/90 to-transparent pointer-events-none z-20"></div>

        <div
          ref={swiperRef}
          className="opacity-0 translate-y-20 scale-90 will-change-transform origin-center"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            centeredSlides={true}
            spaceBetween={24}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1440: { slidesPerView: 3 },
            }}
            className="!pb-0"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-bg-tertiary rounded-2xl p-6 sm:p-8 text-left shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4 grayscale">
                      <Image
                        src={t.icon}
                        alt={`${t.company} logo`}
                        width={15}
                        height={15}
                        className="object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
                      />
                      <p className="font-bold text-gray-300/70">{t.company}</p>
                    </div>


                    <p className="text-gray-400 leading-relaxed">
                      {t.feedback}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <div className="relative w-10 h-10">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          ref={paginationRef}
          className="custom-pagination relative mx-auto flex justify-center items-center gap-2 mt-6 w-[9%] max-w-[13%] h-[25px] rounded-full bg-white/[0.05] shadow-inner shadow-white/5 overflow-hidden md:w-[13%] sm:w-[40%]"
        ></div>
      </div>
    </section>
  );
}
