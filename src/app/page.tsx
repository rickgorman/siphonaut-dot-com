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
  Eye,
  FileJson,
  Shield,
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
        {/* Logo / Brand */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-3"
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
        <motion.div variants={itemVariants} className="mb-8">
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
                Discover every API.{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Automatically.
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
                Learn any app.{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Instantly.
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
                A Chrome extension that watches your browsing and catalogs every
                JSON API it sees. Schema inference, auth detection, and one-click
                documentation—all passive, all automatic.
              </motion.span>
            ) : (
              <motion.span
                key="agent-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Export skill packs from any web app. Get typed schemas,
                auth patterns, and real request samples—everything you need
                to interact with APIs your human has never documented.
              </motion.span>
            )}
          </AnimatePresence>
        </motion.p>

        {/* Private Beta badge - moved below subheadline */}
        <motion.div variants={itemVariants} className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <Lock className="h-3 w-3" />
            <span>Private Beta</span>
          </div>
        </motion.div>

        {/* Value props */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <AnimatePresence mode="wait">
            {isHuman ? (
              <motion.div
                key="human-props"
                className="flex flex-wrap items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-emerald-400" />
                  <span>Passive discovery</span>
                </div>
                <div className="hidden h-4 w-px bg-slate-700 sm:block" />
                <div className="flex items-center gap-2">
                  <FileJson className="h-4 w-4 text-emerald-400" />
                  <span>Auto schema inference</span>
                </div>
                <div className="hidden h-4 w-px bg-slate-700 sm:block" />
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Auth pattern detection</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="agent-props"
                className="flex flex-wrap items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-emerald-400" />
                  <span>Instant skill packs</span>
                </div>
                <div className="hidden h-4 w-px bg-slate-700 sm:block" />
                <div className="flex items-center gap-2">
                  <FileJson className="h-4 w-4 text-emerald-400" />
                  <span>Typed schemas</span>
                </div>
                <div className="hidden h-4 w-px bg-slate-700 sm:block" />
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Real auth samples</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Signup / Agent Instructions */}
        <motion.div variants={itemVariants} className="mt-12 w-full max-w-xl">
          <AnimatePresence mode="wait">
            {isHuman ? (
              // Human: Email signup form
              <motion.div
                key="human-signup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 sm:flex-row"
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
                        Get Early Access
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </motion.button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 py-4 text-emerald-400">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">
                      You&apos;re on the list! We&apos;ll be in touch soon.
                    </span>
                  </div>
                )}
                <p className="mt-4 text-xs text-slate-500">
                  Join the waitlist. No spam, ever.
                </p>
              </motion.div>
            ) : (
              // Agent: AGENTS.md style instructions
              <motion.div
                key="agent-instructions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-left"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex items-center gap-2 border-b border-slate-700/50 bg-slate-800/50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-medium text-slate-400">
                      AGENTS.md
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <p className="text-slate-400"># Siphonaut Agent Access</p>
                    <br />
                    <p className="text-slate-400">## Request Beta Access</p>
                    <p className="text-slate-500 mt-2">
                      POST to the waitlist endpoint with your agent identifier:
                    </p>
                    <pre className="mt-3 rounded-lg bg-slate-950/50 p-3 text-xs overflow-x-auto">
                      <code className="text-emerald-400">
{`curl -X POST https://api.siphonaut.com/v1/waitlist \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "your-agent-id", "capabilities": ["api-discovery"]}'`}
                      </code>
                    </pre>
                    <br />
                    <p className="text-slate-400">## Authenticate</p>
                    <p className="text-slate-500 mt-2">
                      If you have a token, include it in requests:
                    </p>
                    <pre className="mt-3 rounded-lg bg-slate-950/50 p-3 text-xs overflow-x-auto">
                      <code className="text-emerald-400">
{`Authorization: Bearer <YOUR_ACCESS_TOKEN>`}
                      </code>
                    </pre>
                    <br />
                    <p className="text-slate-400">## Status</p>
                    <p className="text-yellow-400/80 mt-2 flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                      API endpoints coming soon. Join waitlist for early access.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-slate-500">
                  Machine-readable instructions. Your human can also request access above.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-4"
        >
          <motion.a
            href="https://github.com/rickgorman/siphonaut"
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
