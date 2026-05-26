import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background — 60% black */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,#eab308_0%,transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-6">
          Get Started Today
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Your Next Great Project Starts{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-300">
            Right Here
          </span>
        </h2>
        <p className="text-purple-100/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Join over 200 businesses that trust CityStack to power their contract
          workflows. Post your first contract today it&apos;s free to get
          started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all duration-200 shadow-xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:-translate-y-0.5 text-base"
          >
            Post a Contract Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+2348002489785"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 text-base"
          >
            <PhoneCall className="w-5 h-5" />
            Speak to Our Team
          </a>
        </div>
        <p className="text-purple-300/60 text-xs mt-6">
          No credit card required · Response within 24 hours · Cancel anytime
        </p>
      </div>
    </section>
  );
}
