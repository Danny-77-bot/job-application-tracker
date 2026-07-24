import {
  FileCheck2,
  Building2,
  Target,
  Globe,
} from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Applications Tracked",
    icon: FileCheck2,
  },
  {
    value: "500+",
    label: "Companies",
    icon: Building2,
  },
  {
    value: "95%",
    label: "Organization Rate",
    icon: Target,
  },
  {
    value: "24/7",
    label: "Cloud Access",
    icon: Globe,
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Our Impact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Stay Organized Throughout Your Job Search
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Thousands of applications can be managed with a simple,
            organized workflow that keeps everything in one place.
          </p>

        </div>

        {/* Statistics */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur transition hover:bg-white/20"
              >
                <div className="mb-5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <Icon size={30} />
                  </div>
                </div>

                <h3 className="text-4xl font-extrabold">
                  {stat.value}
                </h3>

                <p className="mt-3 text-blue-100">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}