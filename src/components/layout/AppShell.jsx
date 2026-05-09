import { Menu, Waves } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar, { navigationItems } from "./Sidebar";

const pageMeta = {
  "/dashboard": {
    title: "AquaGuard Command Dashboard",
    description: "Monitor critical water-safety intelligence, active AI modules, and recent high-priority events.",
  },
  "/monitoring": {
    title: "Live Monitoring",
    description: "Review simulated camera streams, AI confidence, and zone-specific detections in real time.",
  },
  "/alerts": {
    title: "Alert Response Center",
    description: "Filter events by urgency, inspect details, and track resolution status across the safety team.",
  },
  "/reports": {
    title: "Reports & Analytics",
    description: "Prototype reporting for alert categories, risk distribution, and daily operational patterns.",
  },
  "/settings": {
    title: "System Settings",
    description: "Tune module activation, alert sensitivity, notifications, and camera deployment preferences.",
  },
};

export default function AppShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const activeMeta = useMemo(
    () => pageMeta[location.pathname] ?? pageMeta["/dashboard"],
    [location.pathname]
  );

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="flex min-h-screen">
        <Sidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          items={navigationItems}
        />

        <div className="flex min-h-screen flex-1 flex-col lg:pl-80">
          <div className="sticky top-0 z-30 px-4 pb-4 pt-4 sm:px-6 lg:hidden">
            <div className="panel-glow flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/30 to-azure/30">
                  <Waves className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold">AquaGuard AI</p>
                  <p className="text-xs text-mist">Safety operations console</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-mist hover:bg-white/10 hover:text-white"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Header title={activeMeta.title} description={activeMeta.description} />

          <main className="flex-1 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
