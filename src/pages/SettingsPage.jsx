import { BellRing, Camera, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Badge from "../components/ui/Badge";
import ToggleSwitch from "../components/ui/ToggleSwitch";
import { cameraManagement, initialModuleSettings, notificationMethods } from "../data/mockData";

const sensitivityOptions = ["Low", "Medium", "High"];

export default function SettingsPage() {
  const [modules, setModules] = useState(initialModuleSettings);
  const [sensitivity, setSensitivity] = useState("Medium");
  const [notifications, setNotifications] = useState(["Dashboard", "Siren", "SMS"]);

  const toggleModule = (id) => {
    setModules((current) =>
      current.map((module) => (module.id === id ? { ...module, enabled: !module.enabled } : module))
    );
  };

  const toggleNotification = (method) => {
    setNotifications((current) =>
      current.includes(method) ? current.filter((item) => item !== method) : [...current, method]
    );
  };

  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-teal/12 p-3 text-teal">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">AI Module Controls</h2>
              <p className="mt-1 text-sm leading-6 text-mist">
                Prototype toggles let you demonstrate which models are enabled during a monitoring cycle.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div>
                  <p className="font-medium text-white">{module.label}</p>
                  <p className="mt-1 text-sm text-mist">
                    {module.enabled ? "Module is actively contributing to alert generation." : "Module is currently disabled in the prototype."}
                  </p>
                </div>
                <ToggleSwitch enabled={module.enabled} onToggle={() => toggleModule(module.id)} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-azure/12 p-3 text-azure">
                <BellRing className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Alert Sensitivity</h3>
                <p className="mt-1 text-sm leading-6 text-mist">
                  Choose how aggressively AquaGuard AI surfaces anomaly candidates.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {sensitivityOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSensitivity(option)}
                  className={[
                    "rounded-2xl border px-4 py-2 text-sm font-medium",
                    sensitivity === option
                      ? "border-teal/30 bg-teal/14 text-white"
                      : "border-white/10 bg-white/[0.03] text-mist hover:bg-white/[0.08] hover:text-white",
                  ].join(" ")}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-mist">Current Profile</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                {sensitivity} sensitivity balances early detection with alert fatigue for the demonstration workflow.
              </p>
            </div>
          </div>

          <div className="panel p-5 sm:p-6">
            <h3 className="font-display text-xl font-semibold text-white">Notification Method</h3>
            <p className="mt-2 text-sm leading-6 text-mist">
              Select which prototype notification channels appear active in the system configuration.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {notificationMethods.map((method) => {
                const selected = notifications.includes(method);

                return (
                  <button
                    key={method}
                    type="button"
                    onClick={() => toggleNotification(method)}
                    className={[
                      "rounded-2xl border px-4 py-2 text-sm font-medium",
                      selected
                        ? "border-azure/30 bg-azure/14 text-white"
                        : "border-white/10 bg-white/[0.03] text-mist hover:bg-white/[0.08] hover:text-white",
                    ].join(" ")}
                  >
                    {method}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {notifications.map((method) => (
                <Badge key={method} tone="azure">
                  {method} Enabled
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="panel-glow p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-ember/12 p-3 text-amber-200">
            <Camera className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">Camera Management</h3>
            <p className="mt-1 text-sm leading-6 text-mist">
              Review deployment coverage, uptime, and unit health for the current prototype zones.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cameraManagement.map((camera) => (
            <div key={camera.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{camera.name}</p>
                  <p className="mt-1 text-sm text-mist">{camera.area}</p>
                </div>
                <Badge tone={camera.health === "Priority Watch" ? "orange" : "teal"}>{camera.health}</Badge>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span>Uptime</span>
                  <span className="font-semibold text-white">{camera.uptime}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span>Feed ID</span>
                  <span className="font-semibold text-white">{camera.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
