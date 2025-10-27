"use client";
import Image from "next/image";

export default function SectionFeatures() {
  return (
    <section id="features" className="bg-bg-primary text-white pt-40 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* === ROW 1 === */}
        <div className="bg-bg-tertiary rounded-2xl p-8 pr-0 lg:p-10 lg:pr-0 grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-10 items-center">
          {/* Left content */}
          <div className="space-y-5 text-center lg:text-left pr-8 lg:pr-0">
            <h2 className="text-4xl lg:text-[56px] font-bold leading-tight">
              Less mess. <span className="text-secondary">More magic</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-medium text-base">
              Creative chaos is real. Feedback scattered across emails, chats, screenshots
              which kills momentum. Panlo corrals the mess — projects, reviews, dashboards,
              and insights, all elegantly in one place.
            </p>
            <p className="text-gray-400 leading-relaxed font-medium text-base">
              Panlo is built for marketing teams across brands and agencies alike. One platform
              that keeps creators, managers, and clients perfectly in sync.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-auto">
            <Image
              src="/images/less-mess-more-magic.webp"
              alt="Analytics chart"
              width={1000}
              height={600}
              className="w-full object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* === ROW 2 === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT SIDE CONTAINER */}
          <div className="bg-bg-tertiary rounded-2xl pt-8 pl-8 space-y-6">
            {/* Top Content */}
            <div className="pb-2 text-center lg:text-left pr-8">
              <h3 className="text-xl font-bold text-secondary">
                Project Management, Minus<br className="hidden lg:block" /> the Mayhem
              </h3>
              <p className="text-gray-400 mt-2 font-medium">
                Multiple accounts & role permissions made simple.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="relative w-full h-auto lg:mt-20">
              <Image
                src="/images/project-management.webp"
                alt="Project management"
                width={1000}
                height={600}
                className="w-full object-cover rounded-b-2xl"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTAINER */}
          <div className="space-y-10">
            {/* Top Container */}
            <div className="bg-bg-tertiary rounded-2xl pl-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-center text-center lg:text-left">
              {/* Left Content */}
              <div className="pr-8 pt-8 lg:pt-0">
                <h3 className="text-xl font-bold text-secondary">
                  Admin Powers, Simplified
                </h3>
                <p className="text-gray-400 mt-2 font-medium">
                  Assign, revoke, control - without the headache.
                </p>
              </div>
              {/* Right Image */}
              <div className="relative w-full h-auto">
                <Image
                  src="/images/admin-powers.webp"
                  alt="Admin controls"
                  width={1000}
                  height={600}
                  className="w-full object-cover rounded-r-2xl"
                />
              </div>
            </div>

            {/* Bottom Container */}
            <div className="bg-bg-tertiary rounded-2xl pl-8 pr-0 pb-0 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-center text-center lg:text-left">
              {/* Left Content */}
              <div className="pr-8 pt-8 lg:pt-0">
                <h3 className="text-xl font-bold text-secondary">
                  Template Treasure Trove
                </h3>
                <p className="text-gray-400 mt-2 font-medium">
                  Social posts, videos, websites. Ready to roll.
                </p>
              </div>
              {/* Right Image */}
              <div className="relative w-full h-auto">
                <Image
                  src="/images/template-treasure-trove.webp"
                  alt="Templates gallery"
                  width={1000}
                  height={600}
                  className="w-full object-cover rounded-r-2xl"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
