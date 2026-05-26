import {
  HardHat,
  Code2,
  Truck,
  Zap,
  Building2,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Construction & Civil",
    description:
      "From ground-up builds to full renovations. Connect with licensed contractors who deliver on time and on budget.",
    color: "bg-yellow-50 text-yellow-600",
    border: "border-yellow-100 hover:border-yellow-300",
  },
  {
    icon: Code2,
    title: "IT & Software",
    description:
      "Find experienced software engineers, DevOps specialists, and IT consultants for your digital projects.",
    color: "bg-purple-50 text-purple-700",
    border: "border-purple-100 hover:border-purple-300",
  },
  {
    icon: Zap,
    title: "Electrical & MEP",
    description:
      "Access certified electrical, mechanical, and plumbing contractors for commercial and industrial projects.",
    color: "bg-yellow-50 text-yellow-600",
    border: "border-yellow-100 hover:border-yellow-300",
  },
  {
    icon: Truck,
    title: "Logistics & Supply",
    description:
      "Source reliable logistics and supply chain contractors to keep your operations moving without disruption.",
    color: "bg-zinc-50 text-zinc-700",
    border: "border-zinc-100 hover:border-zinc-300",
  },
  {
    icon: Building2,
    title: "Facility Management",
    description:
      "Maintain and manage your properties with vetted facility management companies across the city.",
    color: "bg-purple-50 text-purple-700",
    border: "border-purple-100 hover:border-purple-300",
  },
  {
    icon: ClipboardList,
    title: "Project Consulting",
    description:
      "Get expert project managers and consultants to oversee complex multi-phase contracts from start to finish.",
    color: "bg-yellow-50 text-yellow-600",
    border: "border-yellow-100 hover:border-yellow-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mb-4">
            Everything You Need to{" "}
            <span className="text-purple-900">Manage Contracts</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            CityStack covers every sector. Whether you&apos;re building a skyscraper
            or shipping software, we have the right contractors for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color, border }) => (
            <div
              key={title}
              className={`group bg-white border ${border} rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-zinc-900 font-bold text-lg mb-2.5">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
