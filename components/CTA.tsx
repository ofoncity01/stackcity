import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,#f97316_0%,transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full mb-6">
          Get Started Today
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Your Next Great Project Starts{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-300">
            Right Here
          </span>
        </h2>
        <p className="text-blue-100/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Join over 200 businesses that trust CityStack to power their contract
          workflows. Post your first contract today — it&apos;s free to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 text-base"
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
        <p className="text-blue-300/60 text-xs mt-6">
          No credit card required · Response within 24 hours · Cancel anytime
        </p>
      </div>
    </section>
  );
}
