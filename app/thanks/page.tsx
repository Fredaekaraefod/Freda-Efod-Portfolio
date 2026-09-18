import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Message Sent — Freda",
  description: "Thank you for getting in touch with Freda.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-start max-w-lg py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-main mb-4">
        Message sent.
      </h1>
      <p className="text-lg text-muted mb-8 leading-relaxed">
        Thanks for reaching out! I've received your note and usually reply within a day or two.
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
