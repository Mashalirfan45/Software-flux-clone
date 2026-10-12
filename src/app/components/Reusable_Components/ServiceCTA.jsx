import Link from "next/link";

export default function ServiceCTA({ cta }) {
  if (!cta) return null;

  return (
    <div className="mt-14">
      <Link
        href={cta.href}
        className="inline-block rounded-full bg-gradient-to-r from-[#8a2a9b] to-[#c13bb0] px-8 py-4 font-semibold text-white transition hover:opacity-90"
      >
        {cta.buttonLabel}
      </Link>
    </div>
  );
}