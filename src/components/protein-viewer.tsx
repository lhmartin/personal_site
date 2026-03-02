"use client";

import { useEffect, useRef, useState } from "react";

export interface ProteinStructure {
  id: string;
  label: string;
  description: string;
}

interface Representation {
  value: "cartoon" | "surface" | "ball+stick";
  label: string;
}

const REPRESENTATIONS: Representation[] = [
  { value: "cartoon", label: "Cartoon" },
  { value: "surface", label: "Surface" },
  { value: "ball+stick", label: "Ball + Stick" },
];

interface Props {
  structures: ProteinStructure[];
}

export function ProteinViewer({ structures }: Props) {
  const [selected, setSelected] = useState<ProteinStructure>(structures[0]);
  const [repr, setRepr] = useState<Representation>(REPRESENTATIONS[0]);
  const [loading, setLoading] = useState(true);
  const [stageReady, setStageReady] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stageRef = useRef<any>(null);

  // Initialise NGL stage once
  useEffect(() => {
    if (!containerRef.current) return;

    let disposed = false;

    import("ngl").then((NGL) => {
      if (disposed || !containerRef.current) return;

      const stage = new NGL.Stage(containerRef.current, {
        backgroundColor: "white",
        quality: "high",
      });
      stageRef.current = stage;
      setStageReady(true);

      const handleResize = () => stage.handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    return () => {
      disposed = true;
      stageRef.current?.dispose();
      stageRef.current = null;
    };
  }, []);

  // Reload whenever selected structure or representation changes
  useEffect(() => {
    if (!stageReady || !stageRef.current) return;

    let cancelled = false;
    setLoading(true);

    const stage = stageRef.current;
    stage.removeAllComponents();

    stage
      .loadFile(`rcsb://${selected.id}`, { defaultRepresentation: false })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((component: any) => {
        if (cancelled) return;
        component.addRepresentation(repr.value, {
          color: repr.value === "cartoon" ? "residueindex" : "chainname",
          smoothSheet: true,
          opacity: repr.value === "surface" ? 0.85 : 1,
        });
        component.autoView(400);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [stageReady, selected, repr]);

  return (
    <div className="rounded-xl border border-slate-100 bg-white shadow-sm">
      {/* Structure selector */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 p-3">
        {structures.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s)}
            className={`rounded-md px-3 py-1 text-xs font-mono transition-colors ${
              selected.id === s.id
                ? "bg-teal-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {s.label}
          </button>
        ))}
        <div className="ml-auto flex gap-1">
          {REPRESENTATIONS.map((r) => (
            <button
              key={r.value}
              onClick={() => setRepr(r)}
              className={`rounded-md px-2 py-1 text-xs transition-colors ${
                repr.value === r.value
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Viewport */}
      <div className="relative h-96">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="inline-block size-3 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
              Loading {selected.id}…
            </div>
          </div>
        )}
        <div ref={containerRef} className="h-full w-full" />
      </div>

      {/* Caption */}
      <div className="border-t border-slate-100 px-4 py-2">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="font-semibold text-slate-700">{selected.id}</span>
          {" — "}
          {selected.description}
          {" · "}
          <a
            href={`https://www.rcsb.org/structure/${selected.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline"
          >
            View on RCSB PDB ↗
          </a>
        </p>
      </div>
    </div>
  );
}
