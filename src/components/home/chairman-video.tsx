import { Play } from "lucide-react";

export function ChairmanVideo() {
  return (
    <section className="bg-deep-green-500 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Video placeholder */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-deep-green-700">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-green-600 to-deep-green-800" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-deep-green-500 transition-transform hover:scale-110"
                aria-label="Play video"
              >
                <Play className="h-7 w-7 ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-sm text-white/50">
              Chairman&apos;s Launch Video
            </div>
          </div>

          {/* Quote */}
          <div>
            <blockquote className="relative">
              <div className="text-6xl leading-none text-gold/30">
                &ldquo;
              </div>
              <p className="mt-2 font-heading text-xl font-medium leading-relaxed text-white md:text-2xl">
                I built Jobberman and Whogohost. Now I&apos;m bringing the same
                trust and technology to real estate.
              </p>
              <footer className="mt-6">
                <p className="text-base font-semibold text-gold">
                  Opeyemi Awoyemi
                </p>
                <p className="text-sm text-white/60">Chairman, Bonnafide</p>
              </footer>
            </blockquote>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg border border-gold px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-deep-green-500">
              <Play className="h-4 w-4" />
              Watch Full Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
