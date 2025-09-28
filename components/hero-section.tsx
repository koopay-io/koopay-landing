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
          <div className="bg-[#12122b] rounded-3xl shadow-xl shadow-indigo-900/50 border border-indigo-900/40 p-8 backdrop-blur">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#181826] via-[#141428] to-[#12122b] flex items-center justify-center border border-indigo-900/30">
              <div className="text-center px-4">
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/40">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  Secure • Instant • Transparent
                </h3>
                <p className="text-zinc-400">Dashboard preview ships with our beta launch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
