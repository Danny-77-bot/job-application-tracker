import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for students and beginners.",
    popular: false,
    features: [
      "Track up to 20 applications",
      "Application status tracking",
      "Basic dashboard",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    description: "Best for active job seekers.",
    popular: true,
    features: [
      "Unlimited applications",
      "Interview scheduling",
      "Advanced analytics",
      "Resume management",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For universities and career centers.",
    popular: false,
    features: [
      "Everything in Pro",
      "Team management",
      "Organization dashboard",
      "Custom integrations",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Choose the Plan That Fits You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Start for free and upgrade whenever you're ready.
            No hidden fees. Cancel anytime.
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-600 shadow-xl"
                  : "border-gray-200"
              }`}
            >

              {plan.popular && (

                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">

                  <Sparkles size={16} />

                  Most Popular

                </div>

              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-3 text-gray-600">
                {plan.description}
              </p>

              <div className="mt-8">

                <span className="text-5xl font-extrabold">
                  {plan.price}
                </span>

                {plan.price !== "Free" &&
                  plan.price !== "Custom" && (
                    <span className="text-gray-500">
                      /month
                    </span>
                  )}

              </div>

              <ul className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={20}
                      className="text-green-600"
                    />

                    <span>{feature}</span>

                  </li>

                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}