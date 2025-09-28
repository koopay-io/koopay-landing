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

  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-[#0b0b24]/80 backdrop-blur-xl z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 via-blue-600 to-violet-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold text-slate-100">Koopay</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="text-sm border-white/20 text-slate-200 hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 hover:from-indigo-400 hover:via-violet-400 hover:to-blue-400 text-white shadow-lg shadow-indigo-500/25">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-white focus:outline-none focus:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#111237] border border-white/10 rounded-2xl shadow-xl shadow-black/30 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-white/10 text-slate-200 hover:bg-white/10"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 hover:from-indigo-400 hover:via-violet-400 hover:to-blue-400 text-white shadow-lg shadow-indigo-500/25">
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
