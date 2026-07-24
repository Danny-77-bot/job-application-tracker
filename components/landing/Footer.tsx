import Link from "next/link";
import {
  BriefcaseBusiness,
 
 User,
  Mail,
  Globe,
} from "lucide-react";

const productLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

const companyLinks = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Support",
    href: "#",
  },
];

const socialLinks = [
 
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: User,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    name: "Portfolio",
    href: "https://yourportfolio.com",
    icon: Globe,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <BriefcaseBusiness
                size={34}
                className="text-blue-500"
              />

              <span className="text-2xl font-bold text-white">
                JobTracker
              </span>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
              Organize your entire job search in one beautiful dashboard.
              Track applications, interviews, offers, and follow-ups with ease.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">

              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>

            <div className="mt-5 flex gap-4">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="rounded-xl bg-slate-900 p-3 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}

            </div>

            <p className="mt-6 text-sm text-gray-400">
              Feel free to connect with me for collaboration,
              freelance opportunities, or full-time positions.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} JobTracker. All rights reserved.
            </p>

            <p className="text-sm text-gray-500">
              Built with ❤️ using Next.js 16, React 19 & Tailwind CSS v4.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}