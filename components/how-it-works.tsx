import React from 'react';
import { FileText, Shield, CheckCircle, Star } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Client Posts Job",
      description: "Client creates a project and deposits funds into smart contract escrow",
      details: "Funds are locked and secured until work is completed"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Freelancer Accepts",
      description: "Freelancer accepts the project and begins work on defined milestones",
      details: "Clear milestones and deliverables are set upfront"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Work Delivered",
      description: "Freelancer completes milestones and submits work for approval",
      details: "Automatic release when milestones are approved"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Payment & Reputation",
      description: "Funds released instantly, reputation scores updated on-chain",
      details: "Both parties build verified, portable reputation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to secure, fast, and fair freelance payments
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 via-green-600 to-orange-600"></div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-gray-500 italic">{step.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-1">{step.description}</p>
                  <p className="text-sm text-gray-500 italic">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Freelance Experience?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers and clients who are already building the future of work with Koopay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
