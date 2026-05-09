import { Suspense, lazy } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const LiveMonitoringPage = lazy(() => import("./pages/LiveMonitoringPage"));
const AlertsPage = lazy(() => import("./pages/AlertsPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

function RequireAuth() {
  const isAuthed = window.localStorage.getItem("aquaguard-auth") === "true";
  return isAuthed ? <Outlet /> : <Navigate to="/" replace />;
}

function ShellRoutes() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

export default function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<RequireAuth />}>
          <Route element={<ShellRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/monitoring" element={<LiveMonitoringPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}

function AppLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-abyss px-4">
      <div className="panel-glow w-full max-w-md p-8 text-center">
        <p className="text-sm uppercase tracking-[0.26em] text-azure">AquaGuard AI</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-white">Loading dashboard modules</h1>
        <p className="mt-3 text-sm leading-7 text-mist">
          Preparing camera monitoring, alert analytics, and safety controls.
        </p>
      </div>
    </div>
  );
}
