import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Bell } from "lucide-react";

const primaryButtonClasses =
  "px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white shadow-lg shadow-indigo-900/40";

const secondaryButtonClasses =
  "px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full border border-indigo-800/40 text-zinc-200 hover:bg-white/5";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0f0f22] via-[#12122b] to-[#0f0f22] border-t border-indigo-900/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-50 mb-6 leading-tight">
            Secure Work. Instant Pay. Verified Reputation.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Koopay gives freelancers and clients fintech-grade rails without the complexity of building it
            in-house.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="bg-[#101024]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-indigo-900/40 shadow-xl shadow-indigo-900/40 mb-8">
          <div className="flex items-center justify-center mb-6 text-zinc-100">
            <Bell className="w-7 h-7 text-blue-400 mr-3" />
            <span className="font-semibold uppercase tracking-wide text-xs text-zinc-300">
              Early Access Live Now
            </span>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex rounded-full bg-[#181826] border border-indigo-900/40 p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-sm text-zinc-200 placeholder-zinc-500 outline-none"
              />
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white text-xs font-semibold uppercase tracking-wide px-6">
                <Mail className="w-4 h-4 mr-2" />
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className={primaryButtonClasses}>
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className={secondaryButtonClasses}>
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl border border-indigo-900/40 bg-[#12122b] p-6 shadow-lg shadow-indigo-900/40">
            <div className="text-2xl font-semibold text-zinc-100 mb-2">10,000+</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wide">On the waitlist</div>
          </div>
          <div className="rounded-2xl border border-indigo-900/40 bg-[#12122b] p-6 shadow-lg shadow-indigo-900/40">
            <div className="text-2xl font-semibold text-zinc-100 mb-2">50+</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wide">Beta testers</div>
          </div>
          <div className="rounded-2xl border border-indigo-900/40 bg-[#12122b] p-6 shadow-lg shadow-indigo-900/40">
            <div className="text-2xl font-semibold text-zinc-100 mb-2">99.9%</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wide">Success rate</div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-900/30">
          <p className="text-zinc-500 text-sm">
            Join the revolution. No spam, just release notes and roadmap invites.
          </p>
        </div>
      </div>
    </section>
  );
}
