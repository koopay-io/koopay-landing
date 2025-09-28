import React from "react";
import { FileText, Shield, CheckCircle, Star } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: "Client Posts Brief",
      description:
        "Scope the project, lock funds in escrow, and outline milestone checkpoints in minutes.",
      details: "Balances stay visible to both parties from day one.",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-300" />,
      title: "Freelancer Accepts",
      description:
        "Verified talent accepts work knowing budgets are secured and timelines are agreed upfront.",
      details: "Productized milestones keep everyone aligned.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-300" />,
      title: "Deliver & Review",
      description:
        "Upload deliverables, collect feedback, and trigger automated approvals inside Koopay.",
      details: "Approvals release payouts instantly.",
    },
    {
      icon: <Star className="w-8 h-8 text-purple-300" />,
      title: "Payout & Reputation",
      description:
        "Funds land in wallets while both sides earn verifiable reputation that travels everywhere.",
      details: "Profiles update the moment milestones close.",
    },
  ];

  return (
    <section className="py-20" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">
            Four Steps from Brief to Payout
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Koopay keeps the flow intuitive while the infrastructure quietly guarantees trust, compliance,
            and payouts.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 left-1/5 right-1/5 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-40" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative z-10 mb-6 flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#12122b] rounded-full shadow-lg shadow-indigo-900/40 border border-indigo-900/40 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-3">{step.title}</h3>
                  <p className="text-zinc-400 mb-2 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-zinc-500 italic">{step.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-[#12122b] rounded-full border border-indigo-900/40 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 opacity-50" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">{step.title}</h3>
                  <p className="text-zinc-400 mb-1 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-zinc-500 italic">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-3xl border border-indigo-900/30 bg-gradient-to-br from-[#14142a] via-[#101024] to-[#12122b] p-8 md:p-12 shadow-xl shadow-indigo-900/40">
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-100 mb-4">
              Ready to Ship Confident Projects?
            </h3>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join builders already managing escrow, payouts, and reputation with Koopay&apos;s all-in-one
              dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold uppercase tracking-wide rounded-full shadow-lg shadow-indigo-900/40 transition-all duration-200 hover:brightness-110">
                Get Started Today
              </button>
              <a
                href="/video/pitch-demo.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-indigo-800/40 text-zinc-200 text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-white/5 transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
