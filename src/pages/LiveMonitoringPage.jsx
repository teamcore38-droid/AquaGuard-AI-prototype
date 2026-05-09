import { Info, Radio } from "lucide-react";
import CameraCard from "../components/ui/CameraCard";
import Badge from "../components/ui/Badge";
import { cameras } from "../data/mockData";

export default function LiveMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="panel-glow p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-teal">Simulated Live View</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white">
              Multi-camera surveillance preview for high-risk zones
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="red">1 Danger State</Badge>
            <Badge tone="orange">1 Warning State</Badge>
            <Badge tone="teal">2 Safe Feeds</Badge>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-mist">
          <Info className="mt-1 h-4 w-4 shrink-0 text-azure" />
          Camera tiles below use local sample videos from the prototype asset folder so the live view feels closer to a
          final research demonstration while staying fully frontend-only.
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {cameras.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>

      <div className="panel p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-azure/12 p-3 text-azure">
            <Radio className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-white">Prototype Readiness Note</h3>
            <p className="mt-1 text-sm leading-6 text-mist">
              This frontend is structured so each camera card can later bind to a live stream URL, confidence API,
              and event timeline without redesigning the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
