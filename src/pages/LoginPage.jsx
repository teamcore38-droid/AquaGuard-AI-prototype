import { Eye, ShieldCheck, Waves } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(77,168,255,0.16),transparent_28%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="panel-glow relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-azure/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
              <Waves className="h-4 w-4 text-teal" />
              AI-Powered Bathing Area Monitoring
            </div>

            <h1 className="mt-8 max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              AquaGuard AI keeps critical water zones visible before a human spotter misses the signal.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              A premium final-year research prototype for drowning risk detection, unattended visitor
              monitoring, wildlife alerts, garbage surveillance, and human posture analysis across public
              bathing environments.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <FeatureChip
                icon={ShieldCheck}
                title="5 AI Modules"
                text="Focused on rapid intervention and safer public spaces."
              />
              <FeatureChip
                icon={Eye}
                title="12 Active Inputs"
                text="Built for multi-camera command center workflows."
              />
              <FeatureChip
                icon={Waves}
                title="Research Ready"
                text="Designed to present clearly to supervisors and evaluators."
              />
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <div className="panel mx-auto w-full max-w-md p-6 sm:p-8">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.28em] text-azure">Secure Mock Login</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">Access the command dashboard</h2>
              <p className="mt-3 text-sm leading-7 text-mist">
                This prototype uses local mock authentication only. Use the prefilled credentials or enter any
                values to continue.
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
  );
}

function FeatureChip({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
        <Icon className="h-5 w-5 text-teal" />
      </div>
      <p className="font-display text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-mist">{text}</p>
    </div>
  );
}
