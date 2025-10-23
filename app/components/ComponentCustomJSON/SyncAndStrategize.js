"use client";
import Image from "next/image";

export default function SyncAndStrategize() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#061016] text-white py-24">
      <div className="mb-8">
        <div style={{ width: 4, height: 140, background: "#0AB5A9", boxShadow: "0 0 16px #0AB5A9" }} />
      </div>

      <h2 className="text-4xl font-bold text-[#0AB5A9]">Sync & Strategize</h2>
      <p className="text-gray-300 mt-3 max-w-2xl text-center">
        Insights + approvals aligned. Ready to ship.
      </p>

      <div className="w-full max-w-[900px] mt-12 rounded-xl overflow-hidden shadow-lg border border-[#0AB5A9]/30">
        <Image src="/images/sync&strategize.webp" alt="Sync" width={900} height={500} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
