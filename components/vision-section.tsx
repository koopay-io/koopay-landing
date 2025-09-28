import React from "react";
import { TrendingUp, Globe, Users, Zap } from "lucide-react";

export function VisionSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "57M",
      label: "Freelancers in US",
      description: "Growing 3x faster than traditional workforce",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      number: "$1.3T",
      label: "Global Freelance Market",
      description: "Expected to reach by 2027",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      number: "50%",
      label: "Remote Work Adoption",
      description: "Permanent shift post-pandemic",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      number: "86%",
      label: "Want Better Payments",
      description: "Freelancers seeking payment security",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Vision */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The Future of Freelancing
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              The freelance economy is exploding, but trust hasn&apos;t kept up.
              Koopay brings secure, borderless payments to the global workforce,
              at the right time: when millions are leaving traditional jobs to
              work independently.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Workforce
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We&apos;re building infrastructure for a borderless economy where
              talent and opportunity connect instantly, regardless of geography.
              No more banking barriers or currency friction.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Instant Economy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The future of work is immediate. Instant matching, instant
              payments, instant reputation. Technology should accelerate
              opportunity, not create delays.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Now?
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Remote Work Revolution
                  </h4>
                  <p className="text-gray-600">
                    COVID-19 normalized remote work, creating massive demand for
                    flexible talent
                  </p>
                </div>
                <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Blockchain Maturity
                  </h4>
                  <p className="text-gray-600">
                    Smart contracts and stablecoins are now reliable enough for
                    mainstream adoption
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Payment Pain Points
                  </h4>
                  <p className="text-gray-600">
                    Traditional platforms&apos; high fees and delays are pushing
                    users toward alternatives
                  </p>
                </div>
                <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Gen Z Workforce
                  </h4>
                  <p className="text-gray-600">
                    Digital natives expect instant, transparent, and fair
                    payment systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Be Part of the Revolution
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join us in building the infrastructure for the future of work.
              Fair, fast, and secure payments for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Join the Movement
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-all duration-200">
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
