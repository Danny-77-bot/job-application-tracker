import {
  Building2,
  BriefcaseBusiness,
  Landmark,
  Laptop,
  Globe,
  Cpu,
} from "lucide-react";

const companies = [
  {
    name: "Google",
    icon: Laptop,
  },
  {
    name: "Microsoft",
    icon: Cpu,
  },
  {
    name: "Amazon",
    icon: Building2,
  },
  {
    name: "Meta",
    icon: Globe,
  },
  {
    name: "Netflix",
    icon: BriefcaseBusiness,
  },
  {
    name: "Apple",
    icon: Landmark,
  },
];

export default function Companies() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Popular Destinations
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Track Applications from Top Companies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Keep every application organized, whether you're applying
            to startups or global technology companies.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => {
            const Icon = company.icon;

            return (
              <div
                key={company.name}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={42}
                  className="mb-4 text-blue-600"
                />

                <h3 className="font-semibold text-gray-800">
                  {company.name}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}