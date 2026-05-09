const styles = {
  teal: "border-teal/20 bg-teal/12 text-teal",
  azure: "border-azure/20 bg-azure/12 text-azure",
  orange: "border-ember/20 bg-ember/12 text-amber-200",
  red: "border-alert/20 bg-alert/12 text-rose-300",
  slate: "border-white/10 bg-white/8 text-slate-200",
};

export default function Badge({ children, tone = "slate" }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        styles[tone] ?? styles.slate,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
