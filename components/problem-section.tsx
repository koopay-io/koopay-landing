import React from "react";
import { AlertCircle, Clock, CreditCard, Users } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <CreditCard className="w-8 h-8 text-rose-400" />,
      title: "High Fees",
      description:
        "Legacy platforms keep 15-20% of every invoice, shrinking freelancer margins overnight.",
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-300" />,
      title: "Delayed Payments",
      description:
        "Weeks-long payout windows make cashflow unpredictable for independent talent.",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-yellow-300" />,
      title: "Payment Disputes",
      description:
        "Opaque dispute processes force freelancers to swallow unpaid work or damaged relationships.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-300" />,
      title: "Trust Issues",
      description:
        "Clients and freelancers enter every project with fragile trust because funds are unsecured.",
    },
  ];

  return (
    <section className="py-20" id="pain-points">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Why Trust Breaks on Traditional Platforms
          </h2>
          <p className="text-xl text-slate-300/80 max-w-3xl mx-auto">
            The current freelance stack prioritises platform profit over project health. Koopay removes
            that friction with transparent escrow, instant payouts, and enforceable milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111237]/90 p-6 shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="relative flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{problem.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0c0d25]/80 p-8 md:p-12 shadow-2xl shadow-black/30">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                Status Quo Freelance Platforms
              </h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <span>15-20% platform rake per transaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <span>15-30 day payout delays for freelancers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <span>Minimal protection when disputes arise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <span>Trust handled manually &mdash; if at all</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20 p-8">
              <h3 className="text-2xl font-bold text-indigo-200 mb-6">Koopay Unlocks Fair Projects</h3>
              <div className="space-y-4 text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span>Flat 3% transaction fee with transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span>Instant stablecoin payouts once milestones clear</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span>Smart contract arbitration keeps work protected</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
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
