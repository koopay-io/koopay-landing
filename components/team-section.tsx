import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Badge } from "./ui/badge";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former blockchain engineer at Coinbase. Built payment rails for 10M+ users.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "Ex-Stripe engineer specialising in distributed ledgers and smart contract security.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      bio: "Former Upwork PM translating freelancer pain points into products people love.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const advisors = [
    "Stellar Development Foundation",
    "Y Combinator",
    "Techstars",
    "Blockchain Capital",
  ];

  const stats = [
    { number: "10K+", label: "Waitlist sign-ups" },
    { number: "50+", label: "Beta testers" },
    { number: "$2M", label: "Pre-seed raised" },
    { number: "99.9%", label: "Transaction success" },
  ];

  return (
    <section className="py-20" id="team">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">
            Built by Freelancers, for Freelancers
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Product, payments, and security experts building a fair marketplace for independent work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-indigo-900/40 bg-[#12122b] p-6 shadow-lg shadow-indigo-900/30"
            >
              <div className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-2">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-zinc-100 mb-12">
            Meet the Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl border border-indigo-900/40 bg-[#12122b] p-8 text-center shadow-xl shadow-indigo-900/40"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-2xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h4 className="text-xl font-semibold text-zinc-100 mb-1">{member.name}</h4>
                <p className="text-blue-300 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="size-9 rounded-full border border-indigo-900/40 text-zinc-300 hover:text-white hover:border-indigo-500/50 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="size-9 rounded-full border border-indigo-900/40 text-zinc-300 hover:text-white hover:border-indigo-500/50 flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="size-9 rounded-full border border-indigo-900/40 text-zinc-300 hover:text-white hover:border-indigo-500/50 flex items-center justify-center transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-8">Backed By</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {advisors.map((advisor, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-indigo-900/40 text-zinc-200 bg-[#101024] px-4 py-2 text-sm"
              >
                {advisor}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-indigo-900/40 bg-[#12122b] p-8 shadow-xl shadow-indigo-900/40">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-zinc-100">Jane Doe</h4>
                <p className="text-sm text-zinc-500">Freelance Designer</p>
              </div>
            </div>
            <p className="text-zinc-400 italic">
              &ldquo;Instant escrow releases changed the way I scope projects. Clients see the balance,
              contractors see the milestones, and nobody worries about getting paid.&rdquo;
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-900/40 bg-[#12122b] p-8 shadow-xl shadow-indigo-900/40">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                MS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-zinc-100">Mike Smith</h4>
                <p className="text-sm text-zinc-500">Startup Founder</p>
              </div>
            </div>
            <p className="text-zinc-400 italic">
              &ldquo;Koopay&apos;s dispute automation keeps stakeholders aligned. Our freelancers know the funds
              are waiting and finance closes books faster.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
