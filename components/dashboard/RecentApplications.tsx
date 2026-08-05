function getStatusColor(status: string) {
  switch (status) {
    case "Applied":
      return "bg-blue-100 text-blue-700";

    case "Interview":
      return "bg-yellow-100 text-yellow-700";

    case "Offer":
      return "bg-green-100 text-green-700";

    case "Rejected":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

const applications = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Engineer",
    status: "Applied",
    date: "Aug 1, 2026",
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Full Stack Developer",
    status: "Interview",
    date: "Jul 28, 2026",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Backend Developer",
    status: "Offer",
    date: "Jul 20, 2026",
  },
  {
    id: 4,
    company: "Netflix",
    position: "React Developer",
    status: "Rejected",
    date: "Jul 18, 2026",
  },
];

export default function RecentApplications() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="flex items-center justify-between border-b p-6">

        <div>

          <h2 className="text-xl font-semibold">
            Recent Applications
          </h2>

          <p className="text-sm text-gray-500">
            Your latest job applications.
          </p>

        </div>

        <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Position
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Applied Date
              </th>

              <th className="px-6 py-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {applications.map((application) => (

              <tr
                key={application.id}
                className="border-t"
              >

                <td className="px-6 py-4 font-medium">
                  {application.company}
                </td>

                <td className="px-6 py-4">
                  {application.position}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status}
                  </span>

                </td>

                <td className="px-6 py-4">
                  {application.date}
                </td>

                <td className="px-6 py-4">

                  <button className="text-blue-600 hover:underline">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}