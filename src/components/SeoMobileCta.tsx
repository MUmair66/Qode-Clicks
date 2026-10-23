import Link from "next/link";

// Sticky mobile-only button that jumps to the page's lead form, so the form is one tap away on small screens.
export function MobileStickyCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
      <Link
        href={href}
        className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-bold text-slate-950 shadow-xl shadow-cyan-900/20 hover:bg-cyan-400 transition-colors"
      >
        {label}
      </Link>
    </div>
  );
}
