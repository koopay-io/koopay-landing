import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Badge } from "./ui/badge";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former blockchain engineer at Coinbase. Built payment systems for 10M+ users.",
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
      bio: "Ex-Stripe engineer. Expert in distributed systems and smart contract security.",
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
      bio: "Former Upwork PM. Deep understanding of freelancer and client pain points.",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built by Freelancers, for Freelancers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of blockchain developers, full-stack engineers, and
            designers are building a fair, transparent future for freelance
            work.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet the Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Backed By</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {advisors.map((advisor, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                {advisor}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Jane Doe</h4>
                <p className="text-gray-600 text-sm">Freelance Designer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;Finally, a platform that puts freelancers first. The
              instant payouts and guaranteed escrow give me peace of mind I
              never had with traditional platforms.&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                MS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Mike Smith</h4>
                <p className="text-gray-600 text-sm">Startup Founder</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;As a client, I love knowing my payments are secure and my
              freelancers are protected. The milestone system keeps projects on
              track.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
