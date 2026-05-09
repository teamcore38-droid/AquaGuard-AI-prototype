import {
  Bell,
  BarChart3,
  Cctv,
  LayoutDashboard,
  LogOut,
  Settings,
  Waves,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export const navigationItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Live Monitoring", href: "/monitoring", icon: Cctv },
  { label: "Alerts", href: "/alerts", icon: Bell },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ mobileOpen, setMobileOpen, items = navigationItems }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("aquaguard-auth");
    navigate("/");
  };

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-80 border-r border-white/10 bg-midnight/90 px-6 py-6 backdrop-blur-2xl lg:block">
        <SidebarContent items={items} onLogout={handleLogout} />
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm border-r border-white/10 bg-midnight px-5 py-5 shadow-2xl">
            <div className="mb-5 flex justify-end">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-mist"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <SidebarContent
              items={items}
              onLogout={handleLogout}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function SidebarContent({ items, onLogout, onNavigate }) {
  return (
    <div className="flex h-full flex-col">
      <div className="panel-glow relative mb-8 overflow-hidden p-5">
        <div
          className="absolute inset-0 -z-10 bg-hero-grid opacity-40 [background-size:auto,auto,26px_26px,26px_26px]"
        />

        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-teal/30 via-azure/20 to-white/5">
            <Waves className="h-7 w-7 text-teal" />
          </div>
          <div>
            <p className="font-display text-xl font-semibold">AquaGuard AI</p>
            <p className="text-sm text-mist">Water safety monitoring suite</p>
          </div>
        </div>

      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  "group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition",
                  isActive
                    ? "border-azure/30 bg-azure/12 text-white shadow-glow"
                    : "border-transparent bg-white/[0.03] text-mist hover:border-white/10 hover:bg-white/[0.06] hover:text-white",
                ].join(" ")
              }
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-inherit">
                <Icon className="h-5 w-5" />
              </span>
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto">
        <div className="panel mt-8 p-4">
          <p className="text-sm font-semibold text-white">Operations Snapshot</p>
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-teal/20 bg-teal/10 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal">System Health</p>
              <p className="mt-1 text-sm text-slate-100">All monitoring pipelines active</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-teal shadow-[0_0_14px_rgba(45,212,191,0.75)]" />
          </div>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-mist hover:bg-white/[0.08] hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Mock Logout
        </button>
      </div>
    </div>
  );
}
