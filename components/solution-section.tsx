import React from 'react';
import { Shield, Zap, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function SolutionSection() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Smart Escrow",
      description: "Funds locked until milestones are complete. No more payment worries for freelancers or clients.",
      benefits: ["Blockchain-secured", "Milestone-based releases", "Automatic dispute resolution"]
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Instant Payouts",
      description: "Get paid in stablecoins without waiting weeks. Your work, your money, immediately.",
      benefits: ["Same-day payouts", "Stablecoin payments", "No banking delays"]
    },
    {
      icon: <Star className="w-12 h-12 text-green-600" />,
      title: "Portable Reputation",
      description: "Build a verified on-chain reputation you own. Take your credibility anywhere.",
      benefits: ["Blockchain-verified", "Cross-platform", "Permanent record"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Koopay: Trustless Freelance Payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Escrow + Milestones + Reputation, all in one platform
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Complete Freelance Solution
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Koopay combines the security of blockchain escrow with the simplicity of traditional payments.
                No crypto complexity, just secure, fast, and fair transactions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">For Freelancers</h4>
                    <p className="text-gray-600">Guaranteed payments, instant payouts, portable reputation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">For Clients</h4>
                    <p className="text-gray-600">Work protection, milestone-based payments, verified talent</p>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Blockchain-Secured</h4>
                  <p className="text-gray-600 mb-6">Every transaction protected by smart contracts</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3 shadow">
                      <div className="text-2xl font-bold text-blue-600">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow">
                      <div className="text-2xl font-bold text-purple-600">3%</div>
                      <div className="text-xs text-gray-600">Fees</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow">
                      <div className="text-2xl font-bold text-green-600">24h</div>
                      <div className="text-xs text-gray-600">Payout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
