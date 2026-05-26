"use client";

import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { useState } from "react";

const highlights = [
  "500+ Verified Contractors",
  "Fast Contract Delivery",
  "Trusted by 200+ Businesses",
];

export default function Hero() {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — 60% black */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,#eab308_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      {/* Floating accent shapes */}
      <div className="absolute top-24 right-16 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-56 h-56 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              N0.1 Contract Platform in the City
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Connect with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-300">
                Top Contractors
              </span>{" "}
              That Deliver
            </h1>

            <p className="text-lg text-purple-100/80 leading-relaxed mb-8 max-w-xl">
              CityStack is the premier platform for businesses to find, vet, and
              hire expert contractors. From construction to IT consulting, scale
              your projects with confidence.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-2.5 mb-10">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-purple-100/90"
                >
                  <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:-translate-y-0.5"
              >
                Post a Contract
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setVideoModal(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-medium rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                See How It Works
              </button>
            </div>
          </div>

          {/* Right: card stack visual */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in delay-300">
            <div className="relative w-full max-w-md mt-8 pb-14">
              {/* Purple glow behind card */}
              <div className="absolute inset-0 bg-purple-700/20 blur-3xl rounded-3xl pointer-events-none" />

              {/* Background decorative card */}
              <div className="absolute -top-3 -right-3 w-[92%] h-full bg-yellow-400/5 border border-yellow-400/10 rounded-2xl" />

              {/* Main card */}
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-1">
                      Active Contract
                    </p>
                    <h3 className="text-white font-bold text-lg">
                      Office Complex Build
                    </h3>
                  </div>
                  <span className="px-3 py-1.5 bg-green-500/15 text-green-400 text-xs font-bold rounded-full border border-green-500/25">
                    In Progress
                  </span>
                </div>

                <div className="h-px bg-white/5 mb-5" />

                {/* Details */}
                <div className="space-y-4 mb-5">
                  {[
                    {
                      label: "Contractor",
                      value: "BuildPro Ltd.",
                      avatar: "B",
                    },
                    { label: "Duration", value: "12 Weeks" },
                    { label: "Value", value: "$480,000" },
                  ].map(({ label, value, avatar }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-zinc-500 text-sm">{label}</span>
                      <div className="flex items-center gap-2">
                        {avatar && (
                          <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">
                            {avatar}
                          </div>
                        )}
                        <span className="text-white text-sm font-semibold">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress block */}
                <div className="bg-zinc-800/60 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between text-xs mb-2.5">
                    <span className="text-zinc-400 font-medium">Progress</span>
                    <span className="text-yellow-400 font-bold">68%</span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-linear-to-r from-yellow-400 to-yellow-300 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating satisfaction badge */}
              <div className="absolute bottom-0 -left-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-zinc-100">
                <div className="w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-yellow-400 font-extrabold text-sm">
                    98%
                  </span>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-0.5">
                    Client Satisfaction
                  </p>
                  <p className="text-sm font-bold text-zinc-900">
                    Rated Excellent
                  </p>
                </div>
              </div>

              {/* Floating new bids badge */}
              <div className="absolute -top-5 -right-5 bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-white text-xs font-semibold">
                  3 new bids
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Video modal */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoModal(false)}
        >
          <div
            className="bg-zinc-950 rounded-2xl p-8 max-w-md w-full text-center border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-semibold text-lg mb-2">
              How CityStack Works
            </p>
            <p className="text-purple-300 text-sm mb-6">
              Video demo coming soon. Scroll down to learn more about our
              platform.
            </p>
            <button
              onClick={() => setVideoModal(false)}
              className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
