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
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-lime-500/5 blur-[100px]" />

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
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 shadow-lg shadow-emerald-500/30">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
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
          <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            extraordinary
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
          <a
            href="mailto:hello@siphonaut.com"
            className="btn-glow-primary group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-8 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-16 flex items-center gap-6"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 0.8 }
          }
        >
          <a
            href="https://github.com/rickgorman/siphonaut-dot-com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/40 text-slate-400 transition-colors hover:border-slate-600 hover:bg-slate-800/60 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/40 text-slate-400 transition-colors hover:border-slate-600 hover:bg-slate-800/60 hover:text-white"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Decorative card */}
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
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                In Development
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We&apos;re building something that will change the way you think
              about [insert your vision here]. Stay tuned for updates.
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
