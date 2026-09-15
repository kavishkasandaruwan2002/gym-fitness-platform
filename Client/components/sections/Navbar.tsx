"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-xl"
          : "bg-transparent"
          }`}
      >
        <div className="container-gym">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                width={297}
                height={72}
                className="h-8.5 w-auto"
                src='assets/logo.svg'
                alt="Logo"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-[#d7ff2f] text-[#0b0b0b] font-heading font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-200 hover:bg-[#c8f020] hover:shadow-[0_0_20px_rgba(215,255,47,0.35)]"
              >
                Get Access
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0b0b0b] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-heading font-black uppercase tracking-widest text-white hover:text-[#d7ff2f] transition-colors"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-[#d7ff2f] text-[#0b0b0b] font-heading font-bold text-lg uppercase tracking-wider rounded-full"
            >
              Get Access
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
