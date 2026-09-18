import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Cut Not Found &bull; Freda",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-start max-w-lg py-12">
      <span className="text-xs font-bold uppercase tracking-widest text-subtle mb-2">
        Error 404
      </span>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-main mb-4">
        Cut not found.
      </h1>
      <p className="text-lg text-muted mb-8 leading-relaxed">
        This clip seems to have fallen onto the cutting room floor. Let's get you back to the work.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-btn text-btn-text hover:bg-btn-hover font-semibold text-sm px-6 py-3 rounded-md transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to portfolio</span>
      </Link>
    </div>
  );
}
