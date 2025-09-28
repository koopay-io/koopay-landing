import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Steven Molina",
    role: "Blockchain Developer",
    bio: "Specialises in decentralised architectures and smart contracts, bringing automation and security to Koopay's escrow system.",
    image: "/team/steven.jpg",
  },
  {
    name: "Tomas Salina",
    role: "Full-Stack Developer",
    bio: "Builds scalable, user-friendly applications to keep Koopay fast, reliable, and intuitive for freelancers and clients.",
    image: "/team/tomas.jpg",
  },
  {
    name: "Renzo Barcos",
    role: "Full-Stack Developer",
    bio: "Bridges backend and frontend to deliver smooth milestone management and seamless integrations across web technologies.",
    image: "/team/renzo.jpg",
  },
  {
    name: "Micaela Descotte",
    role: "Web3 Designer",
    bio: "Designs human-centred experiences that translate complex blockchain flows into simple, beautiful interfaces.",
    image: "/team/micaela.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="py-20" id="team">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6">Our Team</h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
            Koopay is built by a passionate team of young builders from Buenos Aires, combining blockchain expertise,
            full-stack development, and Web3 design. Together, we are shaping a secure, seamless, and fair freelancing
            experience for the next generation of global work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-indigo-900/40 bg-[#12122b] p-6 shadow-lg shadow-indigo-900/30 flex flex-col items-center text-center"
            >
              <div className="relative w-28 h-28 mb-6 overflow-hidden rounded-2xl border border-indigo-900/40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, 140px"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-1">{member.name}</h3>
              <p className="text-blue-300 text-sm uppercase tracking-wide mb-3">{member.role}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-indigo-900/40 bg-[#101024] p-8 md:p-12 shadow-xl shadow-indigo-900/30 text-center">
          <h3 className="text-3xl font-semibold text-zinc-100 mb-4">Work With Us</h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            We collaborate openly with freelancers, founders, and partners who believe in trust-first payments.
            Reach out if you are exploring ecosystem partnerships, beta testing, or strategic support.
          </p>
          <a
            href="mailto:team@koopay.xyz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold uppercase tracking-wide rounded-full shadow-lg shadow-indigo-900/40 hover:brightness-110"
          >
            <span>Contact the Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
