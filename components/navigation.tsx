"use client";

import React from "react";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Vision", href: "#vision" },
    { name: "Blog", href: "#blog" },
  ];

  const primaryCtaClasses =
    "bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white uppercase tracking-wide text-xs font-semibold rounded-full shadow-lg shadow-indigo-900/40";

  return (
    <nav className="fixed top-0 w-full border-b border-white/5 bg-[#0b0b1a]/80 backdrop-blur-xl z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-md shadow-indigo-900/50">
                <span className="text-white font-bold text-base">K</span>
              </div>
              <span className="text-lg font-semibold text-zinc-100">Koopay</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="text-xs font-semibold uppercase tracking-wide rounded-full border-white/10 text-zinc-200 hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button className={primaryCtaClasses}>
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-200 hover:text-white focus:outline-none focus:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-[#12122b] border border-indigo-900/30 rounded-2xl shadow-xl shadow-indigo-900/40 mt-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full text-xs font-semibold uppercase tracking-wide rounded-full border-white/10 text-zinc-200 hover:bg-white/10"
                >
                  Sign In
                </Button>
                <Button className={`${primaryCtaClasses} w-full justify-center`}>
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
