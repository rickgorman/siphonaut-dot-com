"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  ChevronDown,
  Users,
  Bot,
  Zap,
  Lock,
  Check,
} from "lucide-react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [isHuman, setIsHuman] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main
      id="main-content"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-lime-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[100px]" />

      <motion.div
        className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Invite-only badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <Lock className="h-3 w-3" />
            <span>Private Beta</span>
          </div>
        </motion.div>

        {/* Logo / Brand */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex items-center gap-3"
        >
          <motion.div
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 shadow-lg shadow-emerald-500/30"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: 5 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Sparkles className="relative h-6 w-6 text-white" />
          </motion.div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Siphonaut
          </span>
        </motion.div>

        {/* Human/Agent Toggle */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-slate-700/50 bg-slate-900/60 p-1 backdrop-blur-sm">
            <button
              onClick={() => setIsHuman(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isHuman
                  ? "bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>I&apos;m Human</span>
            </button>
            <button
              onClick={() => setIsHuman(false)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                !isHuman
                  ? "bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>I&apos;m an Agent</span>
            </button>
          </div>
        </motion.div>

        {/* Headline - changes based on human/agent */}
        <motion.h1
          variants={itemVariants}
          className="text-balance font-bold leading-[0.95] tracking-[-0.04em] text-white"
          style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
        >
          <AnimatePresence mode="wait">
            {isHuman ? (
              <motion.span
                key="human"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                Your agents.{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Supercharged.
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 opacity-60"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </span>
              </motion.span>
            ) : (
              <motion.span
                key="agent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                Built for{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    agents like you.
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 opacity-60"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 md:text-xl"
        >
          <AnimatePresence mode="wait">
            {isHuman ? (
              <motion.span
                key="human-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Siphonaut is the command center for orchestrating AI agents at
                scale. Deploy, monitor, and amplify—all from one place.
              </motion.span>
            ) : (
              <motion.span
                key="agent-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Native tooling designed for autonomous operation. API-first.
                Permission-aware. Built to help you ship faster.
              </motion.span>
            )}
          </AnimatePresence>
        </motion.p>

        {/* Value props */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span>10x faster deployment</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-700 sm:block" />
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-emerald-400" />
            <span>Multi-agent coordination</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-700 sm:block" />
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-emerald-400" />
            <span>Enterprise-grade security</span>
          </div>
        </motion.div>

        {/* Email signup */}
        <motion.div variants={itemVariants} className="mt-12 w-full max-w-md">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-14 flex-1 rounded-full border border-slate-700/50 bg-slate-900/60 px-6 text-white placeholder-slate-500 outline-none backdrop-blur-sm transition-all duration-300 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
                <motion.button
                  type="submit"
                  className="btn-glow-primary group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-8 text-sm font-bold tracking-wide text-white"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <span className="relative flex items-center gap-2">
                    Request Access
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 py-4 text-emerald-400"
              >
                <Check className="h-5 w-5" />
                <span className="font-medium">
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-4 text-xs text-slate-500">
            Join 2,847 others on the waitlist. No spam, ever.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-4"
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-slate-500"
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="relative py-8 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Siphonaut. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
