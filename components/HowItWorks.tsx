import { Search, FileText, UserCheck, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Post Your Requirements",
    description:
      "Describe your project scope, timeline, and budget. Our smart matching system finds the best-fit contractors instantly.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Review & Select",
    description:
      "Browse verified contractor profiles, compare proposals, check ratings, and interview your shortlisted candidates.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Sign the Contract",
    description:
      "Use our secure e-contract system to formalize terms, milestones, and payments. All legally binding and fully protected.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Execute & Deliver",
    description:
      "Track progress in real-time, communicate through the platform, and release payments on milestone completion.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mb-4">
            From Requirement to Delivery in{" "}
            <span className="text-purple-900">4 Simple Steps</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Our streamlined process takes the complexity out of contract management
            so you can focus on what truly matters: growing your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(75%-3rem)] h-px bg-linear-to-r from-purple-200 via-yellow-300 to-purple-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, icon: Icon, title, description }, i) => (
              <div key={step} className="relative flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 group-hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center shadow-lg shadow-zinc-900/20 group-hover:shadow-yellow-400/30 z-10 relative">
                    <Icon className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center z-20">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-zinc-900 font-bold text-base mb-2.5">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-900 hover:bg-purple-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-900/25 hover:-translate-y-0.5"
          >
            Start Your First Contract
          </a>
        </div>
      </div>
    </section>
  );
}
