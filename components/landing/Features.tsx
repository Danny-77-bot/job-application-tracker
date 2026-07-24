import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CalendarCheck2,
  Cloud,
  FileText,
} from "lucide-react";

const features = [
  {
    title: "Track Applications",
    description:
      "Keep every job application organized in one place with different application stages.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Interview Scheduling",
    description:
      "Never miss an interview with organized interview dates and timelines.",
    icon: CalendarCheck2,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize your progress with statistics and insights about your job search.",
    icon: BarChart3,
  },
  {
    title: "Smart Reminders",
    description:
      "Receive reminders for interviews, follow-ups, and important deadlines.",
    icon: Bell,
  },
  {
    title: "Resume Management",
    description:
      "Store multiple resumes and tailor them for each application.",
    icon: FileText,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "Your applications are securely stored and available whenever you need them.",
    icon: Cloud,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Everything You Need to Manage Your Job Search
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Stay organized from the first application to your final offer.
            Manage your entire job search from one beautiful dashboard.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon
                    className="text-blue-600"
                    size={30}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}