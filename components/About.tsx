import { ShieldCheck, Award, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fully Vetted",
    description: "Every contractor is background-checked, licensed, and reviewed before listing.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We track project outcomes and maintain a rigorous performance rating system.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team guides you from contract creation to project completion.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, competitive rates with full contract visibility.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-linear-to-br from-blue-900 to-blue-950 rounded-3xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">About CityStack</p>
                <h3 className="text-white text-2xl font-bold leading-tight mb-6">
                  Built for the Modern<br />Business Landscape
                </h3>
                {/* Timeline items */}
                <div className="space-y-4">
                  {[
                    { year: "2019", event: "Founded in Lagos, Nigeria" },
                    { year: "2021", event: "Expanded to 5 major cities" },
                    { year: "2023", event: "$1B+ in contracts facilitated" },
                    { year: "2025", event: "500+ contractor network" },
                  ].map(({ year, event }) => (
                    <div key={year} className="flex items-center gap-4">
                      <span className="text-orange-400 font-bold text-sm w-10 shrink-0">{year}</span>
                      <div className="flex-1 h-px bg-white/10" />
                      <span className="text-blue-100 text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Industry Award</p>
                  <p className="text-xs text-slate-500">Best Platform 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
              The Platform That Bridges Businesses{" "}
              <span className="text-blue-900">with Contractors</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              CityStack was founded to solve a critical gap in the contracting world:
              finding reliable, qualified contractors was slow, opaque, and risky.
              We built a platform that makes the entire process — from discovery to
              contract execution — fast, transparent, and secure.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              Today, we serve hundreds of businesses across Nigeria and beyond,
              facilitating billions in contract value and powering growth for
              contractors at every scale.
            </p>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
