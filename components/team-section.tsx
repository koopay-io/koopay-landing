import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Badge } from "./ui/badge";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former blockchain engineer at Coinbase. Built payment rails for 10M+ users.",
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "Ex-Stripe engineer. Specialist in distributed ledgers and smart contract security.",
      image: "/api/placeholder/150/150",
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
      image: "/api/placeholder/150/150",
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
    { number: "10K+", label: "Waitlist Sign-ups" },
    { number: "50+", label: "Beta Testers" },
    { number: "$2M", label: "Pre-seed Raised" },
    { number: "99.9%", label: "Transaction Success" },
  ];

  return (
    <section className="py-20" id="team">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Built by Freelancers, for Freelancers
          </h2>
          <p className="text-xl text-slate-300/80 max-w-3xl mx-auto">
            Our crew blends Web3 security, global payments, and product design expertise to deliver a fair marketplace for independent work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-[#111237]/80 p-6 shadow-lg shadow-black/20">
              <div className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">
            Meet the Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-[#111237]/90 p-8 text-center shadow-xl shadow-black/25"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-2xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-1">
                  {member.name}
                </h4>
                <p className="text-indigo-200 font-medium mb-4">{member.role}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="size-9 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="size-9 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="size-9 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
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
          <h3 className="text-2xl font-semibold text-slate-100 mb-8">Backed By</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {advisors.map((advisor, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-white/20 text-slate-200 px-4 py-2 text-sm"
              >
                {advisor}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-[#111237]/90 p-8 shadow-xl shadow-black/25">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-slate-100">Jane Doe</h4>
                <p className="text-slate-400 text-sm">Freelance Designer</p>
              </div>
            </div>
            <p className="text-slate-300 italic">
              &ldquo;Instant escrow releases changed the way I scope projects. My clients see the balance, I see the milestones, and nobody worries about getting paid.&rdquo;
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111237]/90 p-8 shadow-xl shadow-black/25">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                MS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-slate-100">Mike Smith</h4>
                <p className="text-slate-400 text-sm">Startup Founder</p>
              </div>
            </div>
            <p className="text-slate-300 italic">
              &ldquo;Koopay&apos;s dispute automation keeps stakeholders aligned. Our freelancers know the money&apos;s waiting, our finance team closes books faster.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
