import React from "react";
import { FileText, Shield, CheckCircle, Star } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-indigo-300" />,
      title: "Client Posts Job",
      description:
        "Clients scope a project, drop funds into escrow, and define milestone gates in minutes.",
      details: "Funds stay locked on-chain until acceptance.",
    },
    {
      icon: <Shield className="w-8 h-8 text-sky-300" />,
      title: "Freelancer Accepts",
      description:
        "Verified talent reviews requirements and commits knowing the budget is already secured.",
      details: "Both parties agree on timeline & deliverables.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-300" />,
      title: "Work Delivered",
      description:
        "Milestones clear through Koopay with submission checklists and tamper-proof audit logs.",
      details: "Approvals trigger automated payouts.",
    },
    {
      icon: <Star className="w-8 h-8 text-violet-300" />,
      title: "Payment & Reputation",
      description:
        "Instant stablecoin payouts land in wallets while both sides earn verifiable reputation badges.",
      details: "Portable profiles update in real time.",
    },
  ];

  return (
    <section className="py-20" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Four Steps from Brief to Payout
          </h2>
          <p className="text-xl text-slate-300/80 max-w-3xl mx-auto">
            Koopay keeps the workflow intuitive while the infrastructure quietly guarantees trust.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 left-1/5 right-1/5 h-0.5 bg-gradient-to-r from-indigo-400 via-sky-400 via-emerald-400 to-violet-400 opacity-60" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative z-10 mb-6 flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#111237]/90 rounded-full shadow-xl shadow-black/20 border border-white/10 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{step.title}</h3>
                  <p className="text-slate-300 mb-2 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-slate-400 italic">{step.details}</p>
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
                  <div className="w-16 h-16 bg-[#111237]/90 rounded-full border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-indigo-400 to-violet-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">{step.title}</h3>
                  <p className="text-slate-300 mb-1 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-slate-400 italic">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/20 via-[#0c0d25]/90 to-violet-600/20 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
              Ready to Ship Confident Projects?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join builders who already manage escrow, payouts, and trust with Koopay&apos;s unified console.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-white/20 text-slate-100 font-semibold rounded-full hover:bg-white/10 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
