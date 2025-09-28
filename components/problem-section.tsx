import React from "react";
import { AlertCircle, Clock, CreditCard, Users } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <CreditCard className="w-8 h-8 text-rose-400" />,
      title: "High Fees",
      description:
        "Legacy platforms hold 15-20% of every invoice, shrinking freelancer margins overnight.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Delayed Payments",
      description:
        "Weeks-long payout windows make cashflow unpredictable for independents and agencies alike.",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-amber-400" />,
      title: "Payment Disputes",
      description:
        "Opaque dispute processes force teams to swallow unpaid work or damage relationships.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-300" />,
      title: "Trust Issues",
      description:
        "Both sides start projects unsure whether funds are secured or milestones are enforceable.",
    },
  ];

  return (
    <section className="py-20" id="pain-points">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">
            Why Trust Breaks on Traditional Platforms
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            The classic freelancer stack optimises for platform rake, not project health. Koopay replaces
            it with transparent escrow, instant payouts, and enforceable milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl border border-indigo-900/40 bg-[#12122b] p-6 shadow-lg shadow-indigo-900/40 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#181826] flex items-center justify-center border border-indigo-900/30">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">{problem.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-indigo-900/40 bg-[#101024] p-8 md:p-12 shadow-xl shadow-indigo-900/40">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-6">
                Status Quo Freelance Platforms
              </h3>
              <div className="space-y-4 text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-rose-500" />
                  <span>15-20% platform rake per transaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-rose-500" />
                  <span>15-30 day payout delays for freelancers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-rose-500" />
                  <span>Minimal protection when disputes arise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-rose-500" />
                  <span>Trust handled manually &mdash; if at all</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-blue-900/40 bg-gradient-to-br from-[#14142a] via-[#101024] to-[#12122b] p-8">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Koopay Unlocks Fair Projects</h3>
              <div className="space-y-4 text-zinc-300">
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <span>Flat 3% transaction fee with transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <span>Instant stablecoin payouts once milestones clear</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <span>Smart contract arbitration keeps work protected</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <span>Escrowed funds build confidence before work starts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
