import React from 'react';
import { AlertCircle, Clock, CreditCard, Users } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: <CreditCard className="w-8 h-8 text-red-500" />,
      title: "High Fees",
      description: "Traditional platforms charge 15-20% in fees, eating into freelancer earnings"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Delayed Payments",
      description: "Freelancers wait weeks or months to get paid, affecting cash flow"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-yellow-500" />,
      title: "Payment Disputes",
      description: "No clear resolution process leads to lost work and unpaid invoices"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Trust Issues",
      description: "Both parties lack confidence in secure, fair payment processes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Freelancers & Clients Lose Trust Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The current freelance ecosystem is broken. High fees, delayed payments, and lack of trust
            create friction that hurts both freelancers and clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Platforms vs Koopay</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">15-20% platform fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">15-30 day payment delays</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Limited dispute resolution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">No payment guarantees</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">With Koopay</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Only 3% transaction fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Same-day payouts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Smart contract arbitration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Guaranteed escrow protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
