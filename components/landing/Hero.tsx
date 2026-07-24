import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <CheckCircle2 size={18} />
            New • Track applications effortlessly
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Organize Every
            <span className="block text-blue-600">
              Job Application
            </span>
            In One Place
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Stop using spreadsheets. Track your applications,
            interviews, offers, and rejections in one beautiful,
            organized dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100">
              View Demo
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">

          <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-bold">
                Dashboard Preview
              </h3>

              <BriefcaseBusiness
                className="text-blue-600"
                size={28}
              />

            </div>

            <div className="space-y-4">

              <div className="rounded-xl bg-gray-100 p-4">
                <p className="font-semibold">
                  Google
                </p>

                <p className="text-sm text-gray-500">
                  Frontend Developer
                </p>

                <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                  Interview
                </span>
              </div>

              <div className="rounded-xl bg-gray-100 p-4">
                <p className="font-semibold">
                  Microsoft
                </p>

                <p className="text-sm text-gray-500">
                  Full Stack Engineer
                </p>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Offer
                </span>
              </div>

              <div className="rounded-xl bg-gray-100 p-4">
                <p className="font-semibold">
                  Amazon
                </p>

                <p className="text-sm text-gray-500">
                  Software Engineer
                </p>

                <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Applied
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}