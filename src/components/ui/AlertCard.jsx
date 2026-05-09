import { ArrowRight, Clock3, MapPin, ShieldAlert } from "lucide-react";
import Badge from "./Badge";

const toneMap = {
  High: "red",
  Medium: "orange",
  Low: "teal",
};

const statusTone = {
  New: "red",
  "In Progress": "orange",
  Resolved: "teal",
};

export default function AlertCard({ alert, onView }) {
  return (
    <div className="panel p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-alert/12 text-alert">
            <ShieldAlert className="h-5 w-5" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-lg font-semibold text-white">{alert.type}</h3>
              <Badge tone={toneMap[alert.priority] ?? "teal"}>{alert.priority}</Badge>
              <Badge tone={statusTone[alert.status] ?? "slate"}>{alert.status}</Badge>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-mist">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {alert.time}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {alert.camera} · {alert.location}
              </span>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{alert.description}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onView(alert)}
          className="inline-flex items-center gap-2 self-start rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white hover:bg-white/[0.08]"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
