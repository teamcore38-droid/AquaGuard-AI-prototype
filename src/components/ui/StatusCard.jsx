import Badge from "./Badge";

const accentStyles = {
  teal: "from-teal/25 to-transparent text-teal",
  azure: "from-azure/25 to-transparent text-azure",
  orange: "from-ember/25 to-transparent text-amber-200",
  red: "from-alert/25 to-transparent text-rose-300",
};

export default function StatusCard({
  title,
  value,
  subtitle,
  icon: Icon,
  tone = "azure",
  badge,
}) {
  return (
    <div className="panel relative overflow-hidden p-5">
      <div
        className={[
          "absolute inset-x-0 top-0 h-24 bg-gradient-to-b opacity-80",
          accentStyles[tone] ?? accentStyles.azure,
        ].join(" ")}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-mist">{title}</p>
          <p className="mt-3 font-display text-3xl font-semibold text-white">{value}</p>
          {subtitle ? <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">{subtitle}</p> : null}
        </div>

        {Icon ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3">
            <Icon className="h-6 w-6 text-white" />
          </div>
        ) : null}
      </div>

      {badge ? (
        <div className="relative mt-5">
          <Badge tone={tone}>{badge}</Badge>
        </div>
      ) : null}
    </div>
  );
}
