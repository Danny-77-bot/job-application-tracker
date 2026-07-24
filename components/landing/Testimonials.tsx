import * as Avatar from "@radix-ui/react-avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "Google",
    image: "https://i.pravatar.cc/150?img=1",
    review:
      "This application completely changed how I organize my job search. Everything is in one place and easy to manage.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "Microsoft",
    image: "https://i.pravatar.cc/150?img=3",
    review:
      "The dashboard is clean, fast, and helped me stay on top of every interview and follow-up.",
  },
  {
    name: "Emily Davis",
    role: "Full Stack Developer",
    company: "Amazon",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "I no longer need spreadsheets. This tracker keeps my applications organized and saves me a lot of time.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Loved by Job Seekers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Hear from developers who used our platform to organize
            their job search and land interviews.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Stars */}

              <div className="mb-6 flex gap-1">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="leading-7 text-gray-600">
                "{testimonial.review}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">

                <Avatar.Root className="h-14 w-14 overflow-hidden rounded-full">

                  <Avatar.Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />

                  <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-blue-600 font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </Avatar.Fallback>

                </Avatar.Root>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>

                  <p className="text-sm font-medium text-blue-600">
                    {testimonial.company}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}