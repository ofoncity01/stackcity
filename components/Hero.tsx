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
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,#f97316_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      {/* Floating accent shapes */}
      <div className="absolute top-24 right-16 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              #1 Contract Platform in the City
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Connect with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-300">
                Top Contractors
              </span>{" "}
              That Deliver
            </h1>

            <p className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl">
              CityStack is the premier platform for businesses to find, vet, and
              hire expert contractors. From construction to IT consulting —
              scale your projects with confidence.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-2.5 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100/90">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
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
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
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
            <div className="relative w-full max-w-md">
              {/* Background card */}
              <div className="absolute -top-4 -right-4 w-full h-64 bg-blue-800/40 rounded-2xl border border-white/10" />
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-blue-300 font-medium uppercase tracking-wider mb-1">Active Contract</p>
                    <h3 className="text-white font-bold text-lg">Office Complex Build</h3>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                    In Progress
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Contractor", value: "BuildPro Ltd.", avatar: "B" },
                    { label: "Duration", value: "12 Weeks" },
                    { label: "Value", value: "$480,000" },
                  ].map(({ label, value, avatar }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-blue-300 text-sm">{label}</span>
                      <div className="flex items-center gap-2">
                        {avatar && (
                          <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                            {avatar}
                          </div>
                        )}
                        <span className="text-white text-sm font-medium">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs text-blue-300 mb-1.5">
                    <span>Progress</span>
                    <span>68%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-linear-to-r from-orange-500 to-orange-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 font-bold text-sm">98%</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Client Satisfaction</p>
                  <p className="text-sm font-bold text-slate-900">Rated Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="white" />
        </svg>
      </div>

      {/* Video modal */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoModal(false)}
        >
          <div className="bg-blue-950 rounded-2xl p-8 max-w-md w-full text-center border border-white/10" onClick={(e) => e.stopPropagation()}>
            <p className="text-white font-semibold text-lg mb-2">How CityStack Works</p>
            <p className="text-blue-300 text-sm mb-6">Video demo coming soon. Scroll down to learn more about our platform.</p>
            <button
              onClick={() => setVideoModal(false)}
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
