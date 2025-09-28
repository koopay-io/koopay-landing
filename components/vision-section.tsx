import React from "react";
import { TrendingUp, Globe, Users, Zap } from "lucide-react";

export function VisionSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-indigo-300" />,
      number: "57M",
      label: "Freelancers in US",
      description: "Growing 3x faster than traditional workforce.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-300" />,
      number: "$1.3T",
      label: "Global Market",
      description: "Projected volume by 2027 across remote services.",
    },
    {
      icon: <Globe className="w-8 h-8 text-sky-300" />,
      number: "50%",
      label: "Remote Adoption",
      description: "Permanent remote policies for digital teams.",
    },
    {
      icon: <Zap className="w-8 h-8 text-violet-300" />,
      number: "86%",
      label: "Want Better Payments",
      description: "Freelancers demanding secure instant payouts.",
    },
  ];

  return (
    <section className="py-20" id="vision">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8">
            The Koopay Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              The independent economy deserves infrastructure that matches its momentum. Koopay blends Web3 security with familiar UX so teams can trust every collaboration globally.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 mx-auto rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#111237]/90 p-6 text-center shadow-lg shadow-black/20"
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-white/5">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-100 mb-2">{stat.number}</div>
              <h3 className="text-lg font-medium text-slate-200 mb-2">{stat.label}</h3>
              <p className="text-sm text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/20 via-[#0c0d25]/90 to-indigo-500/20 p-8 shadow-xl shadow-black/25">
            <div className="size-12 rounded-lg bg-sky-500/30 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-sky-100" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Global Workforce</h3>
            <p className="text-slate-300 leading-relaxed">
              We design Koopay to make geography irrelevant. Smart contracts, stablecoins, and identity let freelancers and clients collaborate without banking lock-in or currency delays.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 via-[#0c0d25]/90 to-indigo-500/20 p-8 shadow-xl shadow-black/25">
            <div className="size-12 rounded-lg bg-violet-500/30 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-violet-100" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Instant Economy</h3>
            <p className="text-slate-300 leading-relaxed">
              Instant matching and payments demand trust automation. Koopay synchronises approvals, releases funds instantly, and records success for portable credibility.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0c0d25]/90 p-8 md:p-12 shadow-2xl shadow-black/30">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">
            Why Now?
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 via-violet-400 to-emerald-400 rounded-full" />
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">
                    Remote Revolution
                  </h4>
                  <p className="text-slate-300">
                    Distributed workforces expect instant onboarding, payments, and accountability tools.
                  </p>
                </div>
                <div className="relative z-10 size-4 rounded-full bg-indigo-400 border-4 border-[#0c0d25]" />
                <div className="w-1/2 pl-8" />
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8" />
                <div className="relative z-10 size-4 rounded-full bg-violet-400 border-4 border-[#0c0d25]" />
                <div className="w-1/2 pl-8">
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">
                    Web3 Maturity
                  </h4>
                  <p className="text-slate-300">
                    Stablecoins, audits, and wallets have crossed the usability chasm for mainstream teams.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">
                    Payment Fatigue
                  </h4>
                  <p className="text-slate-300">
                    High fees and slow releases push both sides toward flexible, transparent alternatives.
                  </p>
                </div>
                <div className="relative z-10 size-4 rounded-full bg-emerald-400 border-4 border-[#0c0d25]" />
                <div className="w-1/2 pl-8" />
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8" />
                <div className="relative z-10 size-4 rounded-full bg-amber-400 border-4 border-[#0c0d25]" />
                <div className="w-1/2 pl-8">
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">
                    Gen Z Expectations
                  </h4>
                  <p className="text-slate-300">
                    Digital natives demand transparent, always-on systems that mirror the products they use elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
              Be Part of the Revolution
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              Help us onboard the next million independent builders with trust-first payments and reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:scale-105">
                Join the Movement
              </button>
              <button className="px-8 py-4 border border-white/20 text-slate-100 font-semibold rounded-full hover:bg-white/10 transition-all duration-200">
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
