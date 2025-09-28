import React from "react";
import { TrendingUp, Globe, Users, Zap } from "lucide-react";

export function VisionSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      number: "57M",
      label: "Freelancers in US",
      description: "Growing 3× faster than the traditional workforce.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-300" />,
      number: "$1.3T",
      label: "Global Market",
      description: "Projected volume by 2027 across remote services.",
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-300" />,
      number: "50%",
      label: "Remote Adoption",
      description: "Teams keeping hybrid/remote policies in place.",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-300" />,
      number: "86%",
      label: "Want Better Payments",
      description: "Freelancers demanding secure, instant payouts.",
    },
  ];

  return (
    <section className="py-20" id="vision">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-8">
            The Koopay Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8">
              The independent economy is booming, yet payouts and trust lag behind. Koopay blends fintech
              rigour with Web3 rails so every project feels like a tier-one payment experience.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl border border-indigo-900/40 bg-[#12122b] p-6 text-center shadow-lg shadow-indigo-900/40"
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#181826] border border-indigo-900/30">
                {stat.icon}
              </div>
              <div className="text-3xl font-semibold text-zinc-100 mb-2">{stat.number}</div>
              <h3 className="text-lg font-medium text-zinc-200 mb-2">{stat.label}</h3>
              <p className="text-sm text-zinc-500">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl border border-blue-900/40 bg-[#101024] p-8 shadow-xl shadow-indigo-900/40">
            <div className="size-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Global Workforce</h3>
            <p className="text-zinc-400 leading-relaxed">
              Koopay makes geography irrelevant. Stablecoins, smart contracts, and identity let freelancers
              and clients collaborate without banking lock-in.
            </p>
          </div>

          <div className="rounded-3xl border border-purple-900/40 bg-[#101024] p-8 shadow-xl shadow-indigo-900/40">
            <div className="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Instant Economy</h3>
            <p className="text-zinc-400 leading-relaxed">
              Teams expect immediate outcomes. Koopay synchronises approvals, releases funds instantly, and
              records success for portable credibility.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-indigo-900/40 bg-[#101024] p-8 md:p-12 shadow-2xl shadow-indigo-900/40">
          <h3 className="text-3xl font-semibold text-center text-zinc-100 mb-12">Why Now?</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-60" />
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">Remote Revolution</h4>
                  <p className="text-zinc-400">
                    Distributed teams demand instant onboarding, payouts, and accountability.
                  </p>
                </div>
                <div className="relative z-10 size-4 rounded-full bg-blue-500 border-4 border-[#101024]" />
                <div className="w-1/2 pl-8" />
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8" />
                <div className="relative z-10 size-4 rounded-full bg-indigo-500 border-4 border-[#101024]" />
                <div className="w-1/2 pl-8">
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">Web3 Maturity</h4>
                  <p className="text-zinc-400">
                    Stablecoins, audits, and wallets are ready for mainstream fintech workloads.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">Payment Fatigue</h4>
                  <p className="text-zinc-400">
                    High fees and slow releases push freelancers toward transparent alternatives.
                  </p>
                </div>
                <div className="relative z-10 size-4 rounded-full bg-emerald-400 border-4 border-[#101024]" />
                <div className="w-1/2 pl-8" />
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8" />
                <div className="relative z-10 size-4 rounded-full bg-purple-400 border-4 border-[#101024]" />
                <div className="w-1/2 pl-8">
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">New Workforce</h4>
                  <p className="text-zinc-400">
                    Digital natives expect transparent, always-on systems that feel trustworthy by default.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-100 mb-4">
              Be Part of the Future of Work
            </h3>
            <p className="text-lg text-zinc-400 mb-8">
              Help us onboard the next million independent builders with trust-first payments and
              reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold uppercase tracking-wide rounded-full shadow-lg shadow-indigo-900/40 transition-all duration-200 hover:brightness-110">
                Join the Movement
              </button>
              <button className="px-8 py-4 border border-indigo-800/40 text-zinc-200 text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-white/5 transition-all duration-200">
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
