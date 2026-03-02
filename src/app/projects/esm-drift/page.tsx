import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";
import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { ProteinStructure } from "@/components/protein-viewer";

export const metadata: Metadata = {
  title: "ESM-Drift | Luke Martin",
  description:
    "One-step protein backbone generation via drift-based generative modeling on ESMFold embeddings.",
};

const ProteinViewer = dynamic(
  () =>
    import("@/components/protein-viewer").then((m) => ({
      default: m.ProteinViewer,
    })),
  { ssr: false },
);

const TECH_STACK = ["Python", "PyTorch", "ESMFold", "Generative Models"];

// Structures shown in the viewer — small proteins that load quickly and
// illustrate the compact, well-folded backbones ESM-Drift targets.
const EXAMPLE_STRUCTURES: ProteinStructure[] = [
  {
    id: "1L2Y",
    label: "Trp-cage (1L2Y)",
    description:
      "20-residue miniprotein — one of the smallest known folded proteins, a common benchmark for structure prediction and generation",
  },
  {
    id: "1UBQ",
    label: "Ubiquitin (1UBQ)",
    description:
      "76-residue β-grasp fold found in all eukaryotes; a classic benchmark for backbone generation methods",
  },
  {
    id: "1VII",
    label: "Villin headpiece (1VII)",
    description:
      "35-residue three-helix bundle; one of the fastest-folding proteins known and a common generative model test case",
  },
];

export default function ESMDriftPage() {
  return (
    <main className="container relative mx-auto overflow-auto p-4 md:p-16">
      {/* Gradient bar */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400" />

      <section className="mx-auto w-full max-w-2xl space-y-8">
        {/* Back nav */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-teal-600 hover:underline"
        >
          ← Back
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="bg-gradient-to-r from-slate-900 to-teal-700 bg-clip-text text-3xl font-bold text-transparent">
            ESM-Drift
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            One-step protein backbone generation via drift-based generative
            modeling on ESMFold embeddings
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {TECH_STACK.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
            <Button variant="outline" size="sm" className="ml-auto gap-1.5" asChild>
              <a
                href="https://github.com/lhmartin/ESM-Drift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="size-3.5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-block h-4 w-1 rounded-full bg-teal-500" />
            Overview
          </h2>
          <div className="space-y-3 font-mono text-sm leading-relaxed text-muted-foreground">
            <p>
              ESM-Drift applies the{" "}
              <a
                href="https://arxiv.org/abs/2303.08797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Generative Modeling via Drifting
              </a>{" "}
              framework to ESMFold&apos;s representation space. The goal: generate
              novel protein backbone structures in a single forward pass, without
              the many denoising steps required by diffusion-based methods like
              RFdiffusion or Chroma.
            </p>
            <p>
              ESMFold (Meta FAIR) folds a protein sequence into a 3D structure by
              passing it through a protein language model trunk, producing a dense
              sequence embedding that encodes structural information. ESM-Drift
              treats this embedding space as the target for generative modeling —
              learn to map from noise to valid protein embeddings, then decode
              through ESMFold&apos;s folding trunk to recover 3D coordinates.
            </p>
            <p>
              Drift models define a deterministic ODE that transports samples from
              a source distribution (Gaussian noise) to the data distribution
              (real protein embeddings). In the one-step limit, this collapses to a
              single neural network evaluation — significantly faster than
              iterative DDPM/DDIM-style sampling.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-block h-4 w-1 rounded-full bg-teal-500" />
            Method
          </h2>
          <ol className="space-y-4 font-mono text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-700">Encode real proteins</p>
                <p className="mt-1">
                  Pass PDB backbone structures through ESMFold to extract the
                  per-residue embedding vectors from the language model trunk.
                  These form the training data distribution.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-700">Train the drift network</p>
                <p className="mt-1">
                  A transformer-based network learns the drift velocity field: given
                  a noisy embedding at time t, predict the direction toward a real
                  protein embedding. Training uses flow-matching loss over
                  interpolated (noise, data) pairs.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-700">One-step generation</p>
                <p className="mt-1">
                  At inference, sample Gaussian noise and apply the drift network
                  in a single pass to produce a protein embedding. The ODE
                  integrator is replaced by a direct prediction, trading
                  sample quality for speed.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-700">Decode via ESMFold</p>
                <p className="mt-1">
                  The generated embedding is passed to ESMFold&apos;s structure
                  module, which decodes it into 3D backbone coordinates (N, Cα, C,
                  O atoms per residue). No inverse folding or sequence design step
                  is needed for backbone-only generation.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Viewer */}
        <div className="space-y-3">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-block h-4 w-1 rounded-full bg-teal-500" />
            Example Structures
          </h2>
          <p className="font-mono text-xs text-muted-foreground">
            The proteins below are from RCSB PDB and represent the compact,
            well-folded backbones ESM-Drift is trained to generate. Drag to
            rotate, scroll to zoom.
          </p>
          <ProteinViewer structures={EXAMPLE_STRUCTURES} />
        </div>
      </section>
    </main>
  );
}
