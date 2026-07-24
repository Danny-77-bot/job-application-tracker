import {
  UserPlus,
  BriefcaseBusiness,
  ChartColumnIncreasing,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Sign up in just a few seconds and access your personal dashboard to manage every job application.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Add Your Applications",
    description:
      "Save every application with company details, job title, application date, and current status.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Track Your Progress",
    description:
      "Monitor interviews, offers, rejections, and follow-ups from one organized dashboard.",
    icon: ChartColumnIncreasing,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Start Tracking Your Job Search in Three Easy Steps
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Getting started takes only a few minutes. Organize your job search
            and never lose track of an application again.
          </p>

        </div>

        {/* Steps */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}

                <div className="absolute right-6 top-6 text-5xl font-extrabold text-gray-200">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}