import {
  BriefcaseBusiness,
  CalendarCheck,
  BadgeCheck,
  CircleX,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Applications"
        value={24}
        icon={BriefcaseBusiness}
      />

      <StatCard
        title="Interviews"
        value={8}
        icon={CalendarCheck}
      />

      <StatCard
        title="Offers"
        value={3}
        icon={BadgeCheck}
      />

      <StatCard
        title="Rejections"
        value={5}
        icon={CircleX}
      />

    </section>
  );
}