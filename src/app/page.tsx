"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, Github, Twitter } from "lucide-react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main
      id="main-content"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-lime-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Logo / Brand */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }
          className="mb-8 flex items-center gap-3"
        >
          <motion.div
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 shadow-lg shadow-emerald-500/30"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: 5 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Sparkles className="relative h-6 w-6 text-white" />
          </motion.div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Siphonaut
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-balance font-bold leading-[0.95] tracking-[-0.04em] text-white"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
          }
        >
          Something{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              extraordinary
            </span>
            {/* Subtle underline accent */}
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 opacity-60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
              }
            />
          </span>
          <br />
          is coming.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 0.4 }
          }
        >
          We&apos;re crafting something new. Sign up to be the first to know
          when we launch.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.6 }
          }
        >
          <motion.a
            href="mailto:hello@siphonaut.com"
            className="btn-glow-primary group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-8 text-sm font-bold tracking-wide text-white transition-all"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            {/* Shine sweep effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative">Get in Touch</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-16 flex items-center gap-4"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 0.8 }
          }
        >
          <motion.a
            href="https://github.com/rickgorman/siphonaut-dot-com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/40 text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
            aria-label="GitHub"
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://twitter.com/rickgorman"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/40 text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
            aria-label="Twitter"
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <Twitter className="h-5 w-5" />
          </motion.a>
        </motion.div>

        {/* Status card */}
        <motion.div
          className="mt-20 w-full max-w-md"
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 1 }
          }
        >
          <div className="glass-card group rounded-3xl p-8 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                In Development
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We&apos;re building tools that amplify what you can accomplish.
              Stay tuned for updates.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 py-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Siphonaut. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
