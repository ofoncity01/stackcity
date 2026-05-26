import { ShieldCheck, Award, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fully Vetted",
    description:
      "Every contractor is verified, licensed, and reviewed before listing.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "We track project outcomes and maintain a rigorous performance rating system.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our team guides you from contract creation to project completion.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear, competitive rates with full contract visibility.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative flex flex-col">
            {/* Main card — 30% purple */}
            <div className="relative bg-linear-to-br from-purple-900 to-black rounded-3xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  About CityStack
                </p>
                <h3 className="text-white text-2xl font-bold leading-tight mb-6">
                  Built for the Modern
                  <br />
                  Business Landscape
                </h3>
                {/* Timeline items */}
                <div className="space-y-4">
                  {[
                    { year: "2019", event: "Founded in Lagos, Nigeria" },
                    { year: "2021", event: "Expanded to 5 major cities" },
                    { year: "2023", event: "$1B+ in contracts facilitated" },
                    { year: "2025", event: "500+ contractor network" },
                  ].map(({ year, event }) => (
                    <div
                      key={year}
                      className="flex items-center gap-4 pl-3 border-l-2 border-yellow-400/40"
                    >
                      <span className="text-yellow-400 font-bold text-sm w-10 shrink-0">
                        {year}
                      </span>
                      <span className="text-purple-100 text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge — in flow on mobile, absolute on desktop */}
            <div className="self-end mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-sm">
                    Industry Award
                  </p>
                  <p className="text-xs text-zinc-500">Best Platform 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mb-5">
              The Platform That Bridges Businesses{" "}
              <span className="text-purple-900">with Contractors</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-5">
              CityStack was founded to solve a critical gap in the contracting
              world: finding reliable, qualified contractors was slow, opaque,
              and risky. We built a platform that makes the entire process from
              discovery to contract execution fast, transparent, and secure.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-10">
              Today, we serve hundreds of businesses across Nigeria and beyond,
              facilitating billions in contract value and powering growth for
              contractors at every scale.
            </p>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm mb-1">
                      {title}
                    </p>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {description}
                    </p>
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
