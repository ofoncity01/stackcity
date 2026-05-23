import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "CEO, Okonkwo Properties",
    initials: "AO",
    color: "bg-blue-900",
    rating: 5,
    text: "CityStack completely transformed how we hire contractors. What used to take weeks now takes hours. The vetting process gives us confidence that every contractor we hire is qualified.",
  },
  {
    name: "Emeka Nwosu",
    role: "Operations Director, TechBridge Ltd.",
    initials: "EN",
    color: "bg-orange-500",
    rating: 5,
    text: "The e-contract feature saved us from so many potential disputes. Everything is documented, milestone payments are automatic, and communication is seamless through the platform.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Project Manager, Urban Develop Co.",
    initials: "FA",
    color: "bg-emerald-700",
    rating: 5,
    text: "We've completed 14 major projects through CityStack. The quality of contractors on this platform is unmatched. Their support team is always available when we need them.",
  },
  {
    name: "Chukwuemeka Eze",
    role: "Founder, Eze Infrastructure",
    initials: "CE",
    color: "bg-purple-700",
    rating: 5,
    text: "As a contractor, CityStack opened doors I never had access to before. The platform is professional, payments are always on time, and the project briefs are crystal clear.",
  },
  {
    name: "Ngozi Adeleke",
    role: "Head of Procurement, Stellar Energy",
    initials: "NA",
    color: "bg-rose-600",
    rating: 5,
    text: "We rely on CityStack for all our contractor sourcing. The platform's transparency and the quality of its listings have consistently exceeded our expectations every single time.",
  },
  {
    name: "Babatunde Lawal",
    role: "MD, Lagos Build Group",
    initials: "BL",
    color: "bg-indigo-700",
    rating: 5,
    text: "Contract disputes are virtually non-existent since we switched to CityStack. The legal framework built into the platform protects both parties and keeps everything professional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Trusted by Businesses{" "}
            <span className="text-blue-900">Across the City</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what our clients and contractors say about working with CityStack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, initials, color, rating, text }) => (
            <div
              key={name}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-200 mb-4 shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">&ldquo;{text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{initials}</span>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
