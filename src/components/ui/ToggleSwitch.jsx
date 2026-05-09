export default function ToggleSwitch({ enabled, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        "relative inline-flex h-8 w-14 items-center rounded-full border transition",
        enabled
          ? "border-teal/20 bg-teal/20"
          : "border-white/10 bg-white/[0.06]",
      ].join(" ")}
      aria-pressed={enabled}
    >
      <span
        className={[
          "inline-block h-6 w-6 rounded-full shadow-lg transition",
          enabled ? "translate-x-7 bg-teal" : "translate-x-1 bg-slate-300",
        ].join(" ")}
      />
    </button>
  );
}
