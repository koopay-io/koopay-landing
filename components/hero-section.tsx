import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-600/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">
            Future of freelance payments
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-4 leading-tight">
            Smart Escrow for
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">
              {" "}Freelancers & Clients
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Koopay locks every project in secure escrow, delivers instant stablecoin payouts, and keeps your reputation portable across the web.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 hover:from-indigo-400 hover:via-violet-400 hover:to-blue-400 text-white shadow-xl shadow-indigo-500/30"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-full border-white/30 text-slate-100 hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-[#111237]/90 rounded-3xl shadow-2xl shadow-black/40 border border-white/10 p-8 backdrop-blur">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/20 flex items-center justify-center border border-white/10">
              <div className="text-center px-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  Secure • Instant • Transparent
                </h3>
                <p className="text-slate-400">Dashboard preview drops with our beta launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
