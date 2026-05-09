export default function ChartCard({
  title,
  subtitle,
  children,
  action,
  bodyClassName = "h-[260px]",
}) {
  return (
    <div className="panel h-full p-5 sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
          {subtitle ? <p className="mt-2 text-sm leading-6 text-mist">{subtitle}</p> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>

      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
