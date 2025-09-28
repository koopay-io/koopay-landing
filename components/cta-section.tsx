import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, Bell } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Secure work. Instant pay. Fair reputation.
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            This is the future of freelancing.
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Bell className="w-8 h-8 text-yellow-300 mr-3" />
            <span className="text-white font-semibold text-lg">Early Access Available Now</span>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex rounded-full bg-white/20 backdrop-blur-sm p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/70 outline-none"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold shadow-lg">
                <Mail className="w-5 h-5 mr-2" />
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 rounded-full">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">10,000+</div>
            <div className="text-blue-100">On the waitlist</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-100">Beta testers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">99.9%</div>
            <div className="text-blue-100">Success rate</div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-sm">
            Join the revolution. No spam, just updates on our progress.
          </p>
        </div>
      </div>
    </section>
  );
}
