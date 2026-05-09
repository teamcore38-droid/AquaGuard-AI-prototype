import { ArrowLeft, LockKeyhole, ShieldCheck, Waves } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const accessHighlights = [
  "Mock authentication for prototype demonstrations",
  "Direct access to monitoring, alerts, reports, and settings",
  "Prefilled credentials for a faster presentation flow",
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "research@aquaguard.ai",
    password: "prototype",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    window.localStorage.setItem("aquaguard-auth", "true");
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(77,168,255,0.14),transparent_28%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="panel-glow relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />

            <div className="relative">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 hover:bg-white/[0.08] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back To Landing Page
              </Link>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                <Waves className="h-4 w-4 text-teal" />
                Secure Mock Access
              </div>

              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white">
                Sign in to the AquaGuard AI command dashboard.
              </h1>

              <p className="mt-4 text-base leading-8 text-slate-300">
                This page is now dedicated to login only, while the project overview remains on the separate
                landing homepage for cleaner navigation and presentation flow.
              </p>

              <div className="mt-8 grid gap-4">
                {accessHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex items-center">
            <div className="panel mx-auto w-full max-w-lg p-6 sm:p-8">
              <div className="mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-teal/30 via-azure/20 to-white/5">
                  <LockKeyhole className="h-6 w-6 text-teal" />
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.28em] text-azure">Login Portal</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white">Access the dashboard</h2>
                <p className="mt-3 text-sm leading-7 text-mist">
                  Use the prefilled credentials or enter any values to continue into the prototype.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-azure/30"
                    placeholder="research@aquaguard.ai"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Password</span>
                  <input
                    type="password"
                    value={form.password}
                    onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-azure/30"
                    placeholder="prototype"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-teal to-azure px-4 py-3 text-sm font-semibold text-abyss shadow-[0_12px_34px_rgba(45,212,191,0.25)] hover:brightness-110"
                >
                  Enter AquaGuard Dashboard
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
