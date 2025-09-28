import React from "react";
import { Shield, Zap, Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const primaryButtonClasses =
  "bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-full shadow-lg shadow-indigo-900/40";

export function SolutionSection() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Smart Escrow",
      description:
        "Milestone-based smart contracts lock funds until both sides sign off on deliverables.",
      benefits: [
        "Escrow created automatically",
        "Shared balance visibility",
        "On-chain dispute automation",
      ],
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-300" />,
      title: "Instant Payouts",
      description:
        "Stablecoin rails deliver cleared milestones in seconds &mdash; no banking delays or FX fees.",
      benefits: [
        "Same-day settlements",
        "Programmable stablecoins",
        "Compliance-ready ledger",
      ],
    },
    {
      icon: <Star className="w-12 h-12 text-purple-300" />,
      title: "Portable Reputation",
      description:
        "Every milestone writes verifiable reputation to a portable Koopay profile you own.",
      benefits: [
        "On-chain proof of work",
        "Shareable profile",
        "Cross-platform trust",
      ],
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">
            Koopay is the Trust Layer for Freelance Teams
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-6">
            Escrow, instant payouts, and verifiable reputation converge in one
            workflow, giving both sides a dashboard-level view of every project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-indigo-900/40 bg-[#12122b] p-8 shadow-lg shadow-indigo-900/40 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-center flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-[#181826] rounded-2xl flex items-center justify-center border border-indigo-900/30">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="w-full border-t border-indigo-900/30 pt-6 space-y-3 text-left">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <div className="size-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                      <span dangerouslySetInnerHTML={{ __html: benefit }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-indigo-900/40 bg-[#101024] p-8 md:p-12 shadow-xl shadow-indigo-900/40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-zinc-100">
                One Command Center for Secure Collaborations
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Koopay packages audited smart contracts, instant payouts, and
                transparent reporting without the crypto overwhelm. Spin up
                escrow accounts, automate releases, and keep every stakeholder
                informed.
              </p>
              <div className="space-y-4 text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-2 rounded-full bg-blue-500" />
                  <div>
                    <h4 className="font-semibold text-zinc-100">
                      For Freelancers
                    </h4>
                    <p className="text-sm text-zinc-400">
                      Guaranteed funds, payout alerts, and reputation that
                      travels with every win.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-2 rounded-full bg-purple-500" />
                  <div>
                    <h4 className="font-semibold text-zinc-100">For Clients</h4>
                    <p className="text-sm text-zinc-400">
                      Milestones stay accountable with escrow-backed approvals
                      and dispute automation.
                    </p>
                  </div>
                </div>
              </div>
              <Button className={primaryButtonClasses}>
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="rounded-3xl border border-blue-900/40 bg-gradient-to-br from-[#14142a] via-[#101024] to-[#12122b] p-8 shadow-lg shadow-indigo-900/40">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-[#181826] rounded-full flex items-center justify-center border border-indigo-900/30">
                  <Shield className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-zinc-100">
                  Audit-Ready Infrastructure
                </h4>
                <p className="text-zinc-400">
                  Every contract ships with logs, permissions, and risk controls
                  aligned to fintech standards.
                </p>
                <div className="grid grid-cols-1 gap-4 text-left lg:grid-cols-3">
                  <div className="rounded-2xl border border-indigo-900/40 bg-[#181826] p-4">
                    <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                      Reliability
                    </div>
                    <p className="text-[13px] text-zinc-400 mt-2">
                      Redundant infrastructure and audits are in progress for
                      beta launch.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-indigo-900/40 bg-[#181826] p-4">
                    <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                      Pricing
                    </div>
                    <p className="text-[13px] text-zinc-400 mt-2">
                      Pricing experiments are underway; final fee structure will
                      be shared pre-launch.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-indigo-900/40 bg-[#181826] p-4">
                    <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                      Payouts
                    </div>
                    <p className="text-[13px] text-zinc-400 mt-2">
                      Instant stablecoin payouts are planned; settlement timing
                      will be validated with beta users.
                    </p>
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
