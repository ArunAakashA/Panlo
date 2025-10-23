"use client";
import Image from "next/image";

export default function CreateAndUpload() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#061016] text-white py-24">
      {/* glow placeholder */}
      <div className="mb-8">
        <div style={{ width: 4, height: 140, background: "#0AB5A9", boxShadow: "0 0 16px #0AB5A9" }} />
      </div>

      <h2 className="text-4xl font-bold text-[#0AB5A9]">Create & Upload</h2>
      <p className="text-gray-300 mt-3 max-w-2xl text-center">
        Add assets or link a live site.
      </p>

      <div className="w-full max-w-[900px] mt-12 rounded-xl overflow-hidden shadow-lg border border-[#0AB5A9]/30">
        <Image src="/images/create&upload.webp" alt="Create" width={900} height={500} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
