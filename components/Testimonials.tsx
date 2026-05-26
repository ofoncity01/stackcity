"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "CEO, Okonkwo Properties",
    initials: "AO",
    avatarBg: "bg-purple-700",
    rating: 5,
    text: "CityStack completely transformed how we hire contractors. What used to take weeks now takes hours. The vetting process gives us confidence that every contractor we hire is qualified.",
  },
  {
    name: "Emeka Nwosu",
    role: "Operations Director, TechBridge Ltd.",
    initials: "EN",
    avatarBg: "bg-yellow-400",
    avatarText: "text-black",
    rating: 5,
    text: "The e-contract feature saved us from so many potential disputes. Everything is documented and milestone payments are automatic and seamless throughout the whole process.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Project Manager, Urban Develop Co.",
    initials: "FA",
    avatarBg: "bg-zinc-700",
    rating: 5,
    text: "We've completed 14 major projects through CityStack. The quality of contractors is unmatched and their support team is always available when we need them.",
  },
  {
    name: "Chukwuemeka Eze",
    role: "Founder, Eze Infrastructure",
    initials: "CE",
    avatarBg: "bg-purple-900",
    rating: 5,
    text: "As a contractor, CityStack opened doors I never had access to before. Professional platform, timely payments, and crystal clear project briefs every single time.",
  },
  {
    name: "Ngozi Adeleke",
    role: "Head of Procurement, Stellar Energy",
    initials: "NA",
    avatarBg: "bg-zinc-800",
    rating: 5,
    text: "We rely on CityStack for all our contractor sourcing. The platform transparency and listing quality have consistently exceeded our expectations on every project.",
  },
  {
    name: "Babatunde Lawal",
    role: "MD, Lagos Build Group",
    initials: "BL",
    avatarBg: "bg-yellow-400",
    avatarText: "text-black",
    rating: 5,
    text: "Contract disputes are virtually non-existent since we switched to CityStack. The legal framework built into the platform protects both parties and keeps everything professional.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mb-4">
            What Our Clients{" "}
            <span className="text-purple-900">Are Saying</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Real feedback from verified businesses and contractors on the platform.
          </p>
        </div>

        {/* Slide card */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-1">
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 sm:p-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-zinc-700 text-lg sm:text-xl leading-relaxed font-medium mb-10">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${t.avatarBg} flex items-center justify-center shrink-0`}>
                      <span className={`${t.avatarText ?? "text-white"} text-sm font-bold`}>
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-zinc-900 font-bold text-sm">{t.name}</p>
                      <p className="text-zinc-400 text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-900 group transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
          </button>

          {/* Progress pills */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-yellow-400 w-8"
                    : "bg-zinc-200 hover:bg-zinc-300 w-4"
                }`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-900 group transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Slide counter */}
        <p className="text-center text-xs text-zinc-400 mt-4 tabular-nums">
          {current + 1} / {testimonials.length}
        </p>

      </div>
    </section>
  );
}
