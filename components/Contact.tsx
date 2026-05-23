"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@citystack.ng",
    href: "mailto:hello@citystack.ng",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 800 CITY STK",
    href: "tel:+2348002489785",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Victoria Island, Lagos, Nigeria",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Ready to Find Your{" "}
            <span className="text-blue-900">Perfect Contractor?</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Fill out the form below and our team will reach out within 24 hours
            to discuss your project and match you with the right contractors.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-linear-to-br from-blue-900 to-blue-950 rounded-2xl p-8 text-white flex-1">
              <h3 className="font-bold text-xl mb-2">Get in Touch</h3>
              <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                Have a question or ready to post your first contract? Our team
                is standing by to help you succeed.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-blue-300 text-xs font-medium mb-0.5">{label}</p>
                      <a
                        href={href}
                        className="text-white text-sm font-medium hover:text-orange-300 transition-colors"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-3">Office Hours</p>
                <p className="text-white text-sm">Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p className="text-blue-300 text-xs mt-1">WAT (West Africa Time)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                  className="mt-6 text-blue-900 text-sm font-semibold hover:text-orange-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 outline-none text-sm text-slate-900 placeholder-slate-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 outline-none text-sm text-slate-900 placeholder-slate-400 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 outline-none text-sm text-slate-900 placeholder-slate-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 outline-none text-sm text-slate-900 transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Construction & Civil</option>
                      <option>IT & Software</option>
                      <option>Electrical & MEP</option>
                      <option>Logistics & Supply</option>
                      <option>Facility Management</option>
                      <option>Project Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Details <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project requirements, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 outline-none text-sm text-slate-900 placeholder-slate-400 transition resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-xs font-medium bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-900 hover:bg-blue-800 disabled:bg-slate-300 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-blue-900/25 hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
