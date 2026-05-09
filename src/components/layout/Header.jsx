import { CalendarDays, Sparkles } from "lucide-react";

export default function Header({ title, description }) {
  const now = new Date();
  const formatted = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="px-4 pb-6 pt-2 sm:px-6 lg:px-8 lg:pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-azure/20 bg-azure/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-azure">
            <Sparkles className="h-3.5 w-3.5" />
            Research Prototype
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-mist sm:text-base">{description}</p>
        </div>

        <div className="panel flex items-center gap-3 self-start px-4 py-3">
          <div className="rounded-2xl bg-white/5 p-2.5 text-teal">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-mist">Operation Date</p>
            <p className="mt-1 text-sm font-medium text-slate-100">{formatted}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
