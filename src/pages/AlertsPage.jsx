import { X } from "lucide-react";
import { useMemo, useState } from "react";
import AlertCard from "../components/ui/AlertCard";
import Badge from "../components/ui/Badge";
import { alerts } from "../data/mockData";

const filters = ["All", "High", "Medium", "Low"];
const badgeTone = {
  High: "red",
  Medium: "orange",
  Low: "teal",
};

export default function AlertsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedAlert, setSelectedAlert] = useState(null);

  const filteredAlerts = useMemo(() => {
    if (activeFilter === "All") {
      return alerts;
    }

    return alerts.filter((alert) => alert.priority === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="space-y-6">
        <div className="panel-glow p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-alert">Incident Queue</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                Prioritized alerts for field response and review
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    "rounded-2xl border px-4 py-2 text-sm font-medium",
                    activeFilter === filter
                      ? "border-azure/30 bg-azure/14 text-white"
                      : "border-white/10 bg-white/[0.03] text-mist hover:bg-white/[0.08] hover:text-white",
                  ].join(" ")}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onView={setSelectedAlert} />
          ))}
        </div>
      </div>

      {selectedAlert ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="panel-glow relative w-full max-w-2xl p-6 sm:p-7">
            <button
              type="button"
              onClick={() => setSelectedAlert(null)}
              className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-white/5 p-2 text-mist hover:text-white"
              aria-label="Close alert details"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-10">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-display text-2xl font-semibold text-white">{selectedAlert.type}</p>
                <Badge tone={badgeTone[selectedAlert.priority] ?? "slate"}>{selectedAlert.priority}</Badge>
              </div>

              <p className="mt-2 text-sm text-mist">
                {selectedAlert.id} · {selectedAlert.time} · {selectedAlert.camera}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <DetailBox label="Location" value={selectedAlert.location} />
                <DetailBox label="Status" value={selectedAlert.status} />
                <DetailBox label="Model Confidence" value={selectedAlert.confidence} />
                <DetailBox label="Suggested Response" value="Operational Review" />
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-mist">Detection Summary</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{selectedAlert.description}</p>
              </div>

              <div className="mt-4 rounded-3xl border border-alert/15 bg-alert/8 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-rose-300">Recommended Action</p>
                <p className="mt-3 text-sm leading-7 text-slate-100">{selectedAlert.recommendedAction}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function DetailBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-mist">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
