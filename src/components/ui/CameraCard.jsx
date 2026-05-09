import { ArrowRight, Cctv, Radar, ShieldAlert, ShieldCheck, TriangleAlert } from "lucide-react";
import { useState } from "react";
import Badge from "./Badge";

const toneConfig = {
  safe: {
    badge: "teal",
    label: "Safe",
    preview:
      "from-teal/16 via-azure/10 to-white/[0.03] after:border-teal/40 before:from-teal/15 before:to-transparent",
    icon: ShieldCheck,
  },
  warning: {
    badge: "orange",
    label: "Warning",
    preview:
      "from-ember/18 via-azure/10 to-white/[0.03] after:border-amber-300/40 before:from-ember/18 before:to-transparent",
    icon: TriangleAlert,
  },
  danger: {
    badge: "red",
    label: "Danger",
    preview:
      "from-alert/18 via-azure/10 to-white/[0.03] after:border-rose-300/40 before:from-alert/18 before:to-transparent",
    icon: ShieldAlert,
  },
};

export default function CameraCard({ camera }) {
  const [videoError, setVideoError] = useState(false);
  const config = toneConfig[camera.status] ?? toneConfig.safe;
  const StatusIcon = config.icon;

  return (
    <div className="panel overflow-hidden p-4">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">{camera.name}</p>
          <p className="mt-1 text-sm text-mist">{camera.location}</p>
        </div>
        <Badge tone={config.badge}>{config.label}</Badge>
      </div>

      <div
        className={[
          "relative isolate mb-4 flex h-52 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-5",
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:opacity-70",
          "after:absolute after:inset-4 after:rounded-[1.2rem] after:border after:border-dashed",
          config.preview,
        ].join(" ")}
      >
        {!videoError ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={camera.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
          >
            Your browser does not support the video tag.
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(77,168,255,0.05),transparent)] bg-[length:100%_16px] opacity-80" />
        {videoError ? (
          <div className="absolute inset-4 flex items-center justify-center rounded-[1.2rem] border border-dashed border-white/15 bg-slate-950/65 px-6 text-center">
            <p className="max-w-xs text-sm leading-6 text-slate-200">
              Sample video unavailable. Add the local feed file at <span className="font-semibold text-white">{camera.videoUrl}</span>.
            </p>
          </div>
        ) : null}
        <div className="relative z-10 flex w-full flex-col justify-between">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-200">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-teal shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              LIVE
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-mist">
              Sample Feed
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-slate-200">
                <Cctv className="h-3.5 w-3.5" />
                {camera.module}
              </div>
              <p className="max-w-[15rem] text-sm leading-6 text-slate-100">{camera.message}</p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/20">
              <StatusIcon className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-mist">AI Confidence</p>
          <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
            <Radar className="h-4 w-4 text-azure" />
            {camera.confidence}%
          </p>
        </div>

        <button
          type="button"
          className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left hover:bg-white/[0.08]"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-mist">Action</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white">
            View Details
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </p>
        </button>
      </div>
    </div>
  );
}
