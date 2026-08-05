import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardLayout from "./DashboardLayou";
import RecentApplications from "@/components/dashboard/RecentApplications";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-600">
            Here's an overview of your job search progress.
          </p>
        </div>

        <DashboardStats />
        <RecentApplications/>

      </div>

    </DashboardLayout>
  );
}