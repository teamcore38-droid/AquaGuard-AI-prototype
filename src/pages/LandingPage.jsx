import {
  AlertTriangle,
  ArrowRight,
  Eye,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Trash2,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

const landingStats = [
  { label: "Prototype Modules", value: "05", detail: "Safety models active across the research stack" },
  { label: "Camera Feeds", value: "12", detail: "Multi-zone coverage for live monitoring workflows" },
  { label: "Priority Zones", value: "04", detail: "Main bathing, deep water, edge, and public entry" },
];

const moduleCards = [
  {
    icon: ShieldAlert,
    title: "Drowning Risk Detection",
    text: "Flags irregular submersion patterns and prolonged distress movement in deep-water views.",
  },
  {
    icon: Siren,
    title: "Vulnerable Person Monitoring",
    text: "Highlights isolation risk when a child or elderly visitor remains exposed near unsafe boundaries.",
  },
  {
    icon: AlertTriangle,
    title: "Wild Animal Threat Alerts",
    text: "Tracks animal-to-human threat scenarios near river-bank and forest-edge access points.",
  },
  {
    icon: Trash2,
    title: "Public Area Cleanliness",
    text: "Supports environmental safety reviews by identifying litter build-up in shared visitor spaces.",
  },
];

const workflowSteps = [
  {
    title: "Observe",
    text: "Live camera tiles surface risky motion, water distress, and visitor exposure in one operator view.",
  },
  {
    title: "Interpret",
    text: "AI confidence, module labels, and alert categories help supervisors understand what changed fast.",
  },
  {
    title: "Respond",
    text: "Operators can trigger rescue, warning, or inspection actions from the dashboard workflow.",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(77,168,255,0.16),transparent_28%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="grid min-h-[calc(100vh-4rem)] gap-8 lg:grid-cols-[1.15fr_0.85fr]">
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

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal to-azure px-5 py-3 text-sm font-semibold text-abyss shadow-[0_12px_34px_rgba(45,212,191,0.25)] hover:brightness-110"
                >
                  Open Login
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#prototype-overview"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white"
                >
                  Explore Overview
                </a>
              </div>

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

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {landingStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </section>

          <section className="flex items-center">
            <div className="mx-auto flex w-full max-w-md flex-col gap-5">
              <div className="panel p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-azure">Prototype Summary</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                  Built for safer public bathing environments
                </h2>
                <p className="mt-4 text-sm leading-7 text-mist">
                  This landing page introduces the project separately from login, so judges, supervisors,
                  and stakeholders can understand the value of the system before entering the dashboard.
                </p>

                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                  <p>Multi-camera previews simulate high-risk zones in a presentation-friendly interface.</p>
                  <p>Alerts, reports, and monitoring pages show how AI supports prevention and response.</p>
                  <p>The sign-in screen is now separate for a cleaner user flow and a stronger first impression.</p>
                </div>

                <Link
                  to="/login"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.08]"
                >
                  Continue To Login
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="panel-glow p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-azure">
                    <Radar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-azure">What You&apos;ll See Inside</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200">
                      <li>Live camera cards with looped video previews for each monitored zone.</li>
                      <li>Alert dashboards for drowning, wildlife, movement, and public-area safety risks.</li>
                      <li>Reports and confidence summaries suitable for a research project demonstration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="prototype-overview" className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <Radar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-azure">Inside The Dashboard</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                  One operator view, multiple safety layers
                </h3>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-mist">
              The platform combines live feed previews, alert timelines, AI confidence snapshots, and
              module status summaries so a supervisor can move from observation to decision without
              switching tools.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {moduleCards.map((card) => (
                <ModuleCard key={card.title} {...card} />
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-azure">Response Workflow</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              Built to support fast safety action
            </h3>
            <div className="mt-6 space-y-4">
              {workflowSteps.map((step, index) => (
                <WorkflowStep key={step.title} index={index + 1} {...step} />
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-teal/20 bg-teal/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-teal">Evaluation Value</p>
              <p className="mt-2 text-sm leading-7 text-slate-100">
                The landing experience now tells the full prototype story before login, which helps demos,
                presentations, and supervisor reviews feel more complete.
              </p>
            </div>
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

function StatCard({ label, value, detail }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-azure/80">{label}</p>
      <p className="mt-3 font-display text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-mist">{detail}</p>
    </div>
  );
}

function ModuleCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/15 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/6">
        <Icon className="h-4.5 w-4.5 text-teal" />
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-mist">{text}</p>
    </div>
  );
}

function WorkflowStep({ index, title, text }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-azure/12 font-display text-sm font-semibold text-azure">
        {index}
      </div>
      <div>
        <p className="font-display text-lg font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-mist">{text}</p>
      </div>
    </div>
  );
}
