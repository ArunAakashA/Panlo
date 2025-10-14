export default function SectionFeatures() {
  return (
    <section className="bg-[#071a20] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* === ROW 1 === */}
        <div className="bg-[#0E1E24] border border-[#16323C] rounded-2xl p-10 pr-10 md:pr-0 grid md:grid-cols-[1fr_2.5fr] gap-10 items-center">
          {/* Left content */}
          <div className="space-y-5">
            <h2 className="text-5xl font-semibold leading-tight">
              Less mess. <span className="text-[#0AB5A9]">More magic</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Creative chaos is real. Feedback scattered across emails, chats, screenshots
              which kills momentum. Panlo corrals the mess — projects, reviews, dashboards,
              and insights, all elegantly in one place.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Panlo is built for marketing teams across brands and agencies alike. One platform
              that keeps creators, managers, and clients perfectly in sync.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/less-mess-more-magic.webp"
              alt="Analytics chart"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* === ROW 2 === */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE CONTAINER */}
          <div className="bg-[#0E1E24] rounded-2xl border border-[#16323C] pt-10 pl-10 space-y-6">
            {/* Top Content */}
            <div className="pb-2">
              <h3 className="text-xl font-semibold text-[#0AB5A9]">
                Project Management, Minus<br />  the Mayhem
              </h3>
              <p className="text-gray-400 mt-2">
                Multiple accounts & role permissions made <br/>simple.
              </p>
            </div>

            {/* Bottom Image */}
            <img
              src="/images/project-management.webp"
              alt="Project management"
              className="w-full h-75 object-cover"
            />
          </div>

          {/* RIGHT SIDE CONTAINER */}
          <div className="space-y-10">
            {/* Top Container */}
            <div className="bg-[#0E1E24] rounded-2xl border border-[#16323C] pl-10 grid md:grid-cols-[1fr_2fr] gap-6 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#0AB5A9]">
                  Admin Powers, Simplified
                </h3>
                <p className="text-gray-400 mt-2">
                  Assign, revoke, control - without the headache.
                </p>
              </div>
              {/* Right Image */}
              <div>
                <img
                src="/images/admin-powers.webp"
                alt="Admin controls"
                className="w-full h-50 object-cover"
              />
              </div>
            </div>

            {/* Bottom Container */}
            <div className="bg-[#0E1E24] rounded-2xl border border-[#16323C] pl-10 pr-0 pb-0 grid md:grid-cols-[1fr_2fr] gap-6 items-center">
              {/* Left Content */}
              <div className="mb-0">
                <h3 className="text-xl font-semibold text-[#0AB5A9]">
                  Template Treasure Trove
                </h3>
                <p className="text-gray-400 mt-2">
                  Social posts, videos, websites. Ready to roll.
                </p>
              </div>
              {/* Right Image */}
              <div>
                <img
                    src="/images/template-treasure-trove.webp"
                    alt="Templates gallery"
                    className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
