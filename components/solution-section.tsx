import React from "react";
import { Shield, Zap, Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function SolutionSection() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-indigo-300" />,
      title: "Smart Escrow",
      description:
        "Milestone-based smart contracts lock every payment until both sides sign off.",
      benefits: [
        "Escrow created automatically",
        "Funds visible to both parties",
        "Disputes resolved on-chain",
      ],
    },
    {
      icon: <Zap className="w-12 h-12 text-sky-300" />,
      title: "Instant Payouts",
      description:
        "Stablecoin rails push cleared milestones to wallets in seconds &mdash; no banking delays.",
      benefits: ["Same-day settlements", "Programmable stablecoins", "No FX headaches"],
    },
    {
      icon: <Star className="w-12 h-12 text-violet-300" />,
      title: "Portable Reputation",
      description:
        "Every completed milestone writes verifiable reputation to a portable, permissionless profile.",
      benefits: ["On-chain proof of work", "Shareable profile links", "Cross-platform trust"],
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Koopay is an Always-On Trust Engine
          </h2>
          <p className="text-xl text-slate-300/80 max-w-3xl mx-auto mb-6">
            Escrow, instant payouts, and verifiable reputation in one frictionless workflow for modern teams.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111237]/90 p-8 shadow-xl shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="relative text-center flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                <div className="w-full border-t border-white/5 pt-6 space-y-3 text-left">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="size-2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0c0d25]/80 p-8 md:p-12 shadow-2xl shadow-black/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-100">
                One Command Center for Fair Freelance Collaborations
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Koopay packages the best of Web3 infrastructure without the crypto overwhelm. Spin up verified contracts, automate releases, and keep every stakeholder informed.
              </p>
              <div className="space-y-4 text-slate-200/90">
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-3 rounded-full bg-emerald-400"></div>
                  <div>
                    <h4 className="font-semibold text-slate-100">For Freelancers</h4>
                    <p className="text-sm text-slate-300">Guaranteed funds, real-time payout notifications, and a reputation graph you own.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-3 rounded-full bg-sky-400"></div>
                  <div>
                    <h4 className="font-semibold text-slate-100">For Clients</h4>
                    <p className="text-sm text-slate-300">Milestones stay on schedule with escrow-backed accountability and dispute resolution baked in.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 hover:from-indigo-400 hover:via-violet-400 hover:to-blue-400 text-white rounded-full px-8 py-3 font-semibold shadow-xl shadow-indigo-500/30">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/20 via-[#111237]/95 to-violet-500/20 p-8 shadow-xl shadow-black/30">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-indigo-200" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-100">Blockchain-Secured</h4>
                  <p className="text-slate-300">Every release is governed by auditable smart contracts with full activity logs.</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-indigo-200">99.9%</div>
                      <div className="text-xs text-slate-400">Uptime</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-violet-200">3%</div>
                      <div className="text-xs text-slate-400">Flat fee</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-sky-200">24h</div>
                      <div className="text-xs text-slate-400">Payout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
