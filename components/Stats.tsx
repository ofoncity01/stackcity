const stats = [
  { value: "500+", label: "Verified Contractors", description: "Verified and licensed" },
  { value: "200+", label: "Businesses Served", description: "Across Nigeria and beyond" },
  { value: "$2.4B", label: "Contract Value", description: "Facilitated on the platform" },
  { value: "98%", label: "Satisfaction Rate", description: "From verified client reviews" },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-br from-purple-950 via-zinc-900 to-black">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#7e22ce_0%,transparent_60%)] opacity-30 pointer-events-none" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-yellow-400/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, description }, i) => (
            <div
              key={label}
              className="group relative rounded-2xl border border-white/5 bg-white/3 hover:bg-white/6 p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Yellow corner accent on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number badge */}
              <span className="inline-block text-xs font-bold text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2.5 py-1 rounded-full mb-5 uppercase tracking-widest">
                0{i + 1}
              </span>

              {/* Stat value */}
              <p className="text-5xl font-extrabold text-yellow-400 tracking-tight leading-none mb-3">
                {value}
              </p>

              {/* Label */}
              <p className="text-white font-semibold text-base mb-1.5">{label}</p>

              {/* Description */}
              <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>

              {/* Subtle glow behind value */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-yellow-400/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-purple-500/60 to-transparent" />
    </section>
  );
}
