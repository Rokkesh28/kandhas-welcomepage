import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, CornerDownRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/kandhas-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kandhas — Something Big Is Coming" },
      { name: "description", content: "Something powerful is taking shape. Stay connected. The journey begins soon." },
      { property: "og:title", content: "Kandhas — Something Big Is Coming" },
      { property: "og:description", content: "Something powerful is taking shape. Stay connected. The journey begins soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isEntered, setIsEntered] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!visualRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      visualRef.current.style.setProperty("--parallax-x", `${x * 8}px`);
      visualRef.current.style.setProperty("--parallax-y", `${y * 5}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-brand-ink text-foreground selection:bg-brand-gold selection:text-brand-ink">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <div
          ref={visualRef}
          className="absolute inset-0 -z-10 transition-transform duration-700 ease-out"
          style={{ transform: "translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0) scale(1.04)" }}
        >
          <img src={heroImage} alt="A luminous Vel before a shadowed Murugan-inspired figure" width={1600} height={1920} className="h-full w-full object-cover object-center opacity-75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_41%,color-mix(in_oklab,var(--brand-gold)_18%,transparent),transparent_28%),linear-gradient(90deg,var(--brand-ink)_5%,transparent_60%,var(--brand-ink)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--brand-ink)_0%,transparent_24%,transparent_72%,var(--brand-ink)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,color-mix(in_oklab,var(--brand-ink)_76%,transparent)_100%)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(color-mix(in_oklab,var(--brand-gold)_70%,transparent)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

        <header className="absolute left-6 right-6 top-8 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10 lg:left-16 lg:right-16">
          <div className="kandhas-rise flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.34em] text-brand-gold sm:text-xs">
            <span className="h-px w-8 bg-brand-gold/70" />
            KANDHAS
          </div>
          <p className="kandhas-rise kandhas-delay-1 text-[0.58rem] uppercase tracking-[0.28em] text-foreground/55 sm:text-[0.65rem]">Est. 2026</p>
        </header>

        <div className="relative mx-auto w-full max-w-[1320px] pt-16 sm:pt-20">
          <div className="max-w-3xl lg:ml-[7%]">
            <p className="kandhas-rise kandhas-delay-1 mb-7 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.38em] text-brand-saffron sm:text-xs">
              <span className="h-px w-10 bg-brand-saffron" />
              The beginning of something meaningful
            </p>
<h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.78] tracking-[0.045em] text-foreground drop-shadow-[0_12px_34px_color-mix(in_oklab,var(--brand-ink)_80%,transparent)]">
  <span className="kandhas-reveal block">KANDHAS</span>
</h1>
            <div className="mt-10 max-w-xl sm:mt-14">
              <h2 className="kandhas-rise kandhas-delay-2 font-display text-[clamp(2.6rem,6vw,5.8rem)] leading-[0.92] tracking-[0.01em] text-brand-gold">
                Something Big<br />Is Coming<span className="text-brand-saffron">.</span>
              </h2>
              <p className="kandhas-rise kandhas-delay-3 mt-7 max-w-sm text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">
                Something powerful is taking shape.<br />
                Stay connected. The journey begins soon.
              </p>
              <div className="kandhas-rise kandhas-delay-3 mt-10 flex flex-wrap items-center gap-5">
                {/* <button
                  type="button"
                  onClick={() => setIsEntered((current) => !current)}
                  aria-expanded={isEntered}
                  className="group relative inline-flex items-center gap-5 overflow-hidden border border-brand-gold/55 bg-brand-ink/25 px-5 py-4 text-[0.65rem] font-semibold tracking-[0.25em] text-brand-gold backdrop-blur-sm transition-colors duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="relative z-10">ENTER THE JOURNEY</span>
                  <ArrowUpRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                  <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[180%] bg-foreground/20 blur-md transition-transform duration-700 group-hover:translate-x-[480%]" />
                </button> */}
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-foreground/45">A new chapter awaits</span>
              </div>
              <div className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ${isEntered ? "mt-7 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0 overflow-hidden">
                  <div className="flex items-center gap-3 border-l border-brand-gold/50 pl-4 text-xs tracking-[0.12em] text-brand-gold/80">
                    <CornerDownRight className="size-4" strokeWidth={1} />
                    The signal is active. Stay close.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          {/* <div className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.26em] text-foreground/45">
            <span className="h-8 w-px bg-brand-gold/55" />
            <span>Stay connected</span>
          </div> */}
          {/* <div className="flex flex-col items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-foreground/45">
            <span>Scroll to begin</span>
            <ChevronDown className="kandhas-drift size-4 text-brand-gold" strokeWidth={1} />
          </div> */}
          <p className="text-[0.58rem] uppercase tracking-[0.26em] text-foreground/45">© Kandhas</p>
        </div>
      </section>

      <section className="relative border-t border-brand-gold/15 bg-brand-maroon/20 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8">
          <p className="max-w-md text-xs leading-6 tracking-[0.12em] text-foreground/50 sm:text-sm">
            A quiet signal from the edge of a new beginning.
          </p>
          <div className="h-px flex-1 bg-brand-gold/20" />
          <p className="font-display text-2xl italic text-brand-gold/80 sm:text-3xl">The journey begins soon.</p>
        </div>
      </section>
    </main>
  );
}
