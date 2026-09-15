"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0b0b0b]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90"
          alt="Elite athlete training"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0b0b0b] to-transparent" />
      </div>

      <div className="container-gym w-full relative z-10 pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 mt-12 py-2 border border-[#d7ff2f]/30 rounded-full mb-8 bg-[#d7ff2f]/5 backdrop-blur-sm"
        >
          <Zap size={14} className="text-[#d7ff2f]" fill="#d7ff2f" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#d7ff2f]">
            Peak Performance Domain
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl font-black uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            CONVERT
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-4 flex-wrap"
          >
            <h1
              className="text-7xl font-black uppercase leading-[0.9] tracking-tight text-[#d7ff2f]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              POTENTIAL TO
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl font-black uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            STRENGTH
          </motion.h1>
        </div>

        {/* Subtext + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col gap-6 mt-4"
        >
          <p className="text-white/60 text-base max-w-md leading-relaxed">
            Engineered workouts. Top-tier mentorship. Unrivaled progression for individuals demanding excellence.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2 px-6 py-3 bg-[#d7ff2f] text-[#0b0b0b] font-heading font-bold uppercase tracking-wider rounded-full text-sm hover:shadow-[0_0_30px_rgba(215,255,47,0.4)] transition-shadow duration-300"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Begin Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 border border-white/20 text-white font-heading font-bold uppercase tracking-wider rounded-full text-sm hover:border-white/50 transition-colors duration-200"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Who We Are
            </motion.a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex items-center gap-12 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { value: "12+", label: "Years of Innovation" },
            { value: "5K+", label: "Athletes Upgraded" },
            { value: "98%", label: "Member Approval Rate" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-3xl font-black text-[#d7ff2f] leading-none"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-white/50 mt-1 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-linear-to-b from-transparent to-[#d7ff2f]/60" />
        <span className="text-[10px] tracking-widest uppercase text-white/40 rotate-90 origin-center translate-x-4">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
