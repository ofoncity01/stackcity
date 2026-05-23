const stats = [
  { value: "500+", label: "Verified Contractors", suffix: "" },
  { value: "200+", label: "Businesses Served", suffix: "" },
  { value: "$2.4B", label: "Contract Value Managed", suffix: "" },
  { value: "98%", label: "Client Satisfaction Rate", suffix: "" },
];

export default function Stats() {
  return (
    <section className="bg-blue-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-sm text-blue-300 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
