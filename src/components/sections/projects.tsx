import Image from "next/image";
import Link from "next/link";
import { BarChart3, Github, Sparkles } from "lucide-react";
import { PROJECTS } from "@/components/constants/data";

type ProjectCoverTheme = {
  topGlow: string;
  bottomGlow: string;
  panel: string;
  bar: string;
  accent: string;
  chip: string;
};

const PROJECT_THEMES: ProjectCoverTheme[] = [
  {
    topGlow: "from-sky-500/35 via-cyan-500/10 to-transparent",
    bottomGlow: "from-orange-500/30 via-rose-500/10 to-transparent",
    panel: "from-[#08192d] via-[#0a1d36] to-[#07101d]",
    bar: "from-sky-400 via-cyan-300 to-blue-500",
    accent: "text-sky-300",
    chip: "bg-sky-400/15 text-sky-100 border-sky-300/15",
  },
  {
    topGlow: "from-amber-400/30 via-orange-500/10 to-transparent",
    bottomGlow: "from-cyan-400/25 via-blue-500/10 to-transparent",
    panel: "from-[#111827] via-[#12182a] to-[#090d18]",
    bar: "from-orange-400 via-amber-300 to-yellow-400",
    accent: "text-orange-300",
    chip: "bg-orange-400/15 text-orange-100 border-orange-300/15",
  },
];

const clampDescription = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical" as const,
  WebkitLineClamp: 2,
  overflow: "hidden",
};

function ProjectCover({
  index,
  tech,
  highlightImage,
}: {
  index: number;
  tech: string[];
  highlightImage?: string;
}) {
  const theme = PROJECT_THEMES[index % PROJECT_THEMES.length];

  return (
    <div className={`relative isolate h-[220px] overflow-hidden rounded-t-2xl bg-gradient-to-br ${theme.panel}`}>
      {highlightImage ? (
        <Image
          src={highlightImage}
          alt="Project highlight"
          fill
          className="object-cover object-center opacity-95"
          priority={index === 0}
        />
      ) : null}

      <div className={`absolute inset-0 bg-gradient-to-tr ${theme.topGlow}`} />
      <div className={`absolute inset-0 bg-gradient-to-bl ${theme.bottomGlow}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
        <Sparkles className="h-3 w-3" />
        Featured
      </div>

      <div className="absolute right-3 top-3 rounded-2xl border border-white/10 bg-black/20 px-2.5 py-1.5 shadow-lg backdrop-blur-md">
        <div className="text-[9px] uppercase tracking-[0.2em] text-white/45">summary</div>
        <div className={`mt-0.5 text-[11px] font-semibold ${theme.accent}`}>{tech[0]}</div>
      </div>

      <div className="absolute left-3 right-3 bottom-3 flex items-end justify-between gap-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 px-2.5 py-2 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/45">
            <BarChart3 className="h-3 w-3" />
            trend
          </div>
          <div className="mt-1.5 flex items-end gap-1">
            {[14, 20, 26, 18, 30].map((height, barIndex) => (
              <span
                key={height}
                className={`w-2 rounded-t-full bg-gradient-to-t ${theme.bar}`}
                style={{ height: `${height + barIndex * 2}px` }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-1.5">
          {tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className={`rounded-full border px-2 py-1 text-[9px] font-medium backdrop-blur-md ${theme.chip}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-5 border-t border-border/60">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-foreground">
          <Sparkles className="h-4 w-4" />
          <span>Featured</span>
        </div>

        <div className="mt-2 h-px w-full bg-border/70">
          <div className="h-px w-20 bg-foreground" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article
            key={project.name}
            className="group overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1"
          >
            <ProjectCover
              index={index}
              tech={project.tech}
              highlightImage={(project as { highlightImage?: string }).highlightImage}
            />

            <div className="space-y-3 border-t border-border/70 bg-gradient-to-b from-black/10 to-transparent p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2 text-base font-semibold leading-snug">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-muted/80">
                      <BarChart3 className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate">{project.name}</span>
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-muted/70 transition-colors hover:bg-muted"
                    aria-label={`Open ${project.name} source code`}
                  >
                    <Github className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed text-muted-foreground"
                style={clampDescription}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs text-foreground transition-colors group-hover:border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
