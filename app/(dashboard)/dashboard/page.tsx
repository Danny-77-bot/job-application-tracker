import DashboardLayout from "./DashboardLayou";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="rounded-xl bg-white p-8 shadow">

        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-gray-600">
          Your dashboard is ready. Next, we'll build job application management.
        </p>

      </div>
    </DashboardLayout>
  );
}