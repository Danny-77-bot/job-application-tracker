import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Heading */}

        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Ready to Organize Your Job Search?
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Join thousands of job seekers who are keeping every application,
          interview, and offer organized in one beautiful dashboard.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
            Get Started Free
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
            <Mail size={18} />
            Contact Sales
          </button>

        </div>

      </div>
    </section>
  );
}