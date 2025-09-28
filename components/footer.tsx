import Image from "next/image";
import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "How it Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#security" },
      { name: "API", href: "#api" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    resources: [
      { name: "Whitepaper", href: "#whitepaper" },
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-[#090917] border-t border-indigo-900/30 text-zinc-300" id="contact">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-9 w-9">
                  <Image
                    src="/vector-logo.png"
                    alt="Koopay logo"
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="36px"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-100">Koopay</h3>
              </div>
              <p className="text-zinc-500 leading-relaxed">
                Smart escrow, instant payouts, and portable reputation for the independent economy.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="size-10 rounded-full border border-indigo-900/40 bg-[#101024] text-zinc-300 hover:text-white hover:border-indigo-500/50 transition-all duration-200 flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Product</h4>
            <ul className="space-y-3 text-zinc-500">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-200 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Company</h4>
            <ul className="space-y-3 text-zinc-500">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-200 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Resources</h4>
            <ul className="space-y-3 text-zinc-500">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-200 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Legal</h4>
            <ul className="space-y-3 text-zinc-500">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-200 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-900/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-zinc-100 mb-2">Stay Updated</h4>
              <p className="text-zinc-500">Release notes and exclusive previews. No spam.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-[#101024] border border-indigo-900/40 rounded-l-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white font-semibold text-xs uppercase tracking-wide rounded-r-xl transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-900/30 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Koopay. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built for the independent workforce</span>
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-500">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
