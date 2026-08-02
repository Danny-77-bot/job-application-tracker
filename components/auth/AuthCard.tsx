import Link from "next/link";

interface AuthCardProps {
  title: string;
  description: string;
  buttonText: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  children: React.ReactNode;
  loading?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthCard({
  title,
  description,
  buttonText,
  footerText,
  footerLink,
  footerLinkText,
  children,
  loading,
  onSubmit
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 text-center">

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-gray-500">
          {description}
        </p>

      </div>

      <form className="space-y-5" onSubmit={onSubmit}>

        {children}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
           disabled={loading}
        >
          {loading ? "Signing In..." : buttonText}
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        {footerText}{" "}
        <Link
          href={footerLink}
          className="font-semibold text-blue-600"
        >
          {footerLinkText}
        </Link>
      </p>

    </div>
  );
}