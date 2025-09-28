import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const primaryButtonClasses =
  "px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white shadow-lg shadow-indigo-900/40";

const secondaryButtonClasses =
  "px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full border border-indigo-800/40 text-zinc-200 hover:bg-white/5";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-600/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute -right-40 top-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-purple-700/15 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-800/40 bg-indigo-900/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
            Future of freelance payments
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-50 leading-tight">
            Smart Escrow for
            <span className="text-gradient bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              {" "}Freelancers & Clients
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Koopay locks every project inside secure escrow, pushes instant stablecoin payouts, and keeps your reputation portable across the web.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className={primaryButtonClasses}>
            Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className={secondaryButtonClasses}>
            Learn More
          </Button>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-[#12122b] rounded-3xl shadow-xl shadow-indigo-900/50 border border-indigo-900/40 p-4 sm:p-6 md:p-8 backdrop-blur">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-indigo-900/30 bg-[#0f0f22]">
              <video
                className="h-full w-full object-cover"
                src="/video/pitch-demo.mp4"
                preload="metadata"
                controls
                playsInline
                poster="/video/pitch-demo-thumbnail.svg"
              >
                Your browser does not support the Koopay product demo video.
              </video>
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#0b0b1a]/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur">
                Live product demo
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-500 text-center">
              Watch the Koopay walkthrough recorded from our latest internal beta build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
