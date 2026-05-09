import {
  Activity,
  AlertTriangle,
  BarChart3,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Trash2,
  Waves,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import StatusCard from "../components/ui/StatusCard";
import ChartCard from "../components/ui/ChartCard";
import Badge from "../components/ui/Badge";
import { alertTrend, moduleStatuses, recentAlerts, summaryStats } from "../data/mockData";

const summaryIcons = [Waves, BarChart3, AlertTriangle, ShieldCheck];

const moduleIcons = {
  drowning: ShieldAlert,
  alone: Siren,
  animal: AlertTriangle,
  garbage: Trash2,
  movement: Activity,
};

const toneByPriority = {
  High: "red",
  Medium: "orange",
  Low: "teal",
};

const toneByStatus = {
  New: "red",
  "In Progress": "orange",
  Resolved: "teal",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-2">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryStats.map((item, index) => (
          <StatusCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            tone={item.tone}
            icon={summaryIcons[index]}
          />
        ))}
      </section>

      <section className="panel-glow overflow-hidden p-6">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-azure">Module Status Matrix</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">
              AI model signals across safety layers
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-mist">
            Current inference states summarize the most recent detection cycle for drowning, isolation,
            wildlife, cleanliness, and posture analysis.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {moduleStatuses.map((item) => (
            <StatusCard
              key={item.id}
              title={item.title}
              value={item.status}
              subtitle={item.note}
              tone={item.tone}
              icon={moduleIcons[item.id]}
              badge={item.status}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-5 sm:p-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">Recent Alerts</h2>
              <p className="mt-2 text-sm leading-6 text-mist">
                Latest incidents surfaced by the monitoring engine for quick operator review.
              </p>
            </div>
            <Badge tone="azure">Today</Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-[0.22em] text-mist">
                  <th className="pb-3 pr-4 font-medium">Time</th>
                  <th className="pb-3 pr-4 font-medium">Alert Type</th>
                  <th className="pb-3 pr-4 font-medium">Location</th>
                  <th className="pb-3 pr-4 font-medium">Priority</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAlerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-white/6 last:border-transparent">
                    <td className="py-4 pr-4 text-sm text-slate-200">{alert.time}</td>
                    <td className="py-4 pr-4 text-sm font-medium text-white">{alert.type}</td>
                    <td className="py-4 pr-4 text-sm text-mist">{alert.location}</td>
                    <td className="py-4 pr-4">
                      <Badge tone={toneByPriority[alert.priority]}>{alert.priority}</Badge>
                    </td>
                    <td className="py-4">
                      <Badge tone={toneByStatus[alert.status]}>{alert.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ChartCard
          title="Alert Trend"
          subtitle="A compact weekly overview of alert volume across the prototype system."
          action={<Badge tone="slate">7 Days</Badge>}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={alertTrend}>
              <defs>
                <linearGradient id="dashboardTrend" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4DA8FF" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#4DA8FF" stopOpacity={0.04} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(157,179,204,0.12)" vertical={false} />
              <XAxis dataKey="label" stroke="#9DB3CC" tickLine={false} axisLine={false} />
              <YAxis stroke="#9DB3CC" tickLine={false} axisLine={false} width={30} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(7,17,31,0.95)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                }}
              />
              <Area
                type="monotone"
                dataKey="alerts"
                stroke="#4DA8FF"
                strokeWidth={3}
                fill="url(#dashboardTrend)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>
    </div>
  );
}
