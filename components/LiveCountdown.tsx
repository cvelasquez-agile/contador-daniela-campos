"use client";
import { useEffect, useState } from "react";
import { getProximoVencimiento } from "@/lib/calendarioRenta";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function LiveCountdown() {
  // Starts null so server and first client render match exactly (no
  // hydration mismatch); the real, ticking value takes over on mount.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const proximo = now === null ? null : getProximoVencimiento(now);

  return (
    <div className="flex items-center gap-2.5 mb-7 animate-fade-rise [animation-delay:210ms]">
      <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>

      {proximo ? (
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/70">
          Próximo vencimiento Renta 2026{" "}
          <span className="text-[#C9A84C] font-semibold">{proximo.label}</span>
          {" · "}
          <span className="tabular-nums text-[#F5F0E8] font-semibold">
            {formatRemaining(proximo.endOfDayTs - now!)}
          </span>
        </p>
      ) : (
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50">
          Calculando el próximo vencimiento…
        </p>
      )}
    </div>
  );
}

function formatRemaining(ms: number) {
  const clamped = Math.max(ms, 0);
  const totalSeconds = Math.floor(clamped / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
