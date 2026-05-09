import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import ChartCard from "../components/ui/ChartCard";
import StatusCard from "../components/ui/StatusCard";
import { alertsByCategory, dailyAlertTrend, reportSummary, riskDistribution } from "../data/mockData";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {reportSummary.map((item) => (
          <StatusCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle="Prototype analytics summary"
            tone={item.tone}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          title="Alerts by Category"
          subtitle="Distribution of AI-generated safety events across core detection modules."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={alertsByCategory}>
              <CartesianGrid stroke="rgba(157,179,204,0.12)" vertical={false} />
              <XAxis dataKey="category" stroke="#9DB3CC" tickLine={false} axisLine={false} />
              <YAxis stroke="#9DB3CC" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(7,17,31,0.95)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                }}
              />
              <Bar dataKey="total" radius={[12, 12, 0, 0]} fill="#4DA8FF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Daily Alert Trend"
          subtitle="Seven-day activity trend to demonstrate recurring risk intensity across monitored areas."
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyAlertTrend}>
              <defs>
                <linearGradient id="reportTrend" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2DD4BF" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#2DD4BF" stopOpacity={0.04} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(157,179,204,0.12)" vertical={false} />
              <XAxis dataKey="day" stroke="#9DB3CC" tickLine={false} axisLine={false} />
              <YAxis stroke="#9DB3CC" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(7,17,31,0.95)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#2DD4BF"
                strokeWidth={3}
                fill="url(#reportTrend)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Risk Level Distribution"
          subtitle="Relative weight of high, medium, and low severity alerts in the prototype dataset."
          bodyClassName="space-y-4"
        >
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={66}
                  outerRadius={94}
                  paddingAngle={4}
                >
                  {riskDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(7,17,31,0.95)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {riskDistribution.map((entry) => (
              <div key={entry.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <div
                  className="mx-auto mb-2 h-2.5 w-10 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <p className="text-xs uppercase tracking-[0.22em] text-mist">{entry.name}</p>
                <p className="mt-1 text-sm font-semibold text-white">{entry.value}%</p>
              </div>
            ))}
          </div>
        </ChartCard>

        <div className="panel p-5 sm:p-6">
          <h3 className="font-display text-xl font-semibold text-white">Report Summary</h3>
          <p className="mt-2 text-sm leading-6 text-mist">
            AquaGuard AI’s dummy analytics demonstrate how research findings can be translated into a presentation-ready
            operational story for supervisors, defense panels, or funding reviews.
          </p>

          <div className="mt-6 space-y-4">
            {reportSummary.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <div>
                  <p className="text-sm text-mist">{item.title}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                </div>
                <div
                  className={[
                    "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]",
                    item.tone === "red"
                      ? "bg-alert/12 text-rose-300"
                      : item.tone === "orange"
                        ? "bg-ember/12 text-amber-200"
                        : item.tone === "azure"
                          ? "bg-azure/12 text-azure"
                          : "bg-teal/12 text-teal",
                  ].join(" ")}
                >
                  Tracked
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
