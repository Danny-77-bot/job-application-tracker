"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    href: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h1 className="text-2xl font-bold text-blue-600">
          JobTracker
        </h1>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}

      </nav>

      <div className="border-t p-4">

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50">
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}