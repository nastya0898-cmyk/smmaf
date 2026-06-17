import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Trophy, Users, ChevronDown, Flame, Target, Swords } from "lucide-react";
import { useRef, useEffect } from "react";

import fighterDetail from "@/assets/fighter-detail.jpg";
import trainingGym from "@/assets/training-gym.jpg";
import smmafLogo from "@/assets/smmaf-logo.png";
import smmafLogoText from "@/assets/smmaf-logo-text.png";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { num: "50+", label: "Athletes", icon: Users },
  { num: "12", label: "Weight Classes", icon: Swords },
  { num: "8", label: "Events / Year", icon: Flame },
  { num: "2018", label: "Founded", icon: Target },
];

const pillars = [
  {
    icon: Shield,
    title: "Build Fighters",
    desc: "Developing athletes from grassroots to elite level through structured training and national programs.",
  },
  {
    icon: Trophy,
    title: "Organize National Competitions",
    desc: "Hosting official MMA events across Switzerland to ensure fair competition and athlete progression.",
  },
  {
    icon: Users,
    title: "Represent Switzerland",
    desc: "Selecting and preparing athletes to compete internationally under the Swiss flag.",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#membership") {
      setTimeout(() => {
        document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale: heroScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/videos/hero-video.mov"
          />
        </motion.div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        {/* Red accent glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative bg-accent border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center py-10 md:py-14 px-4 border-r border-white/5 last:border-r-0">
                <s.icon size={20} className="text-primary mx-auto mb-3 opacity-80" />
                <p className="font-heading text-4xl md:text-5xl text-white">{s.num}</p>
                <p className="font-body text-xs text-white/40 mt-2 uppercase tracking-[0.2em]">
                  {s.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════ ABOUT SPLIT ═══════════════ */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Image side */}
          <AnimatedSection className="relative overflow-hidden">
            <img
              src={fighterDetail}
              alt="Fighter preparing for competition"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
              loading="lazy"
              width={800}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:to-background/0" />
          </AnimatedSection>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24">
            <AnimatedSection delay={0.2}>
              <img src={smmafLogoText} alt="SMMAF Logo" className="w-24 mb-4" />
              <div className="red-accent-line mb-6" />
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-none mb-6">
                The Swiss
                <br />
                <span className="text-primary">Fighting Spirit</span>
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
                The Swiss Mixed Martial Arts Federation (SMMAF) is the governing body for MMA in Switzerland.
                Affiliated with the International Mixed Martial Arts Federation (IMMAF), we develop athletes,
                organize national competitions, and represent Switzerland on the international stage.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
                Our mission is to elevate Swiss MMA through structured pathways, from grassroots to elite level,
                fostering discipline, respect, and excellence.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 font-body font-semibold text-sm text-primary tracking-widest uppercase hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ MISSION PILLARS ═══════════════ */}
      <section className="section-padding bg-accent">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="red-accent-line mx-auto mb-4" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">Our Impact</h2>
            <p className="font-body text-white/50 mt-4 max-w-lg mx-auto text-sm">
              Three pillars that drive everything we do as a federation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative border border-white/10 p-8 lg:p-10 hover-lift group bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                  {/* Number */}
                  <span className="absolute top-6 right-6 font-heading text-5xl text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <item.icon size={28} className="text-primary mb-5" />
                  <h3 className="font-heading text-2xl lg:text-3xl text-white mb-4">{item.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PARALLAX TRAINING IMAGE ═══════════════ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={trainingGym}
          alt="MMA training session"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <AnimatedSection>
            <p className="font-body text-white/40 text-xs tracking-[0.3em] uppercase mb-4">
              Discipline · Respect · Excellence
            </p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-none">
              Train Like a <span className="text-primary">Champion</span>
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ MEMBERSHIP ═══════════════ */}
      <section id="membership" className="section-padding bg-accent">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="red-accent-line mx-auto mb-4" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">Membership</h2>
            <p className="font-body text-white/50 mt-4 max-w-lg mx-auto text-sm">
              Become a member of the Swiss MMA Federation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="border border-white/10 p-10 lg:p-12 text-center hover-lift bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                <p className="font-heading text-6xl text-primary mb-3">250 CHF</p>
                <p className="font-body text-sm text-white/50 uppercase tracking-[0.2em]">Gym</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="border border-white/10 p-10 lg:p-12 text-center hover-lift bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                <p className="font-heading text-6xl text-primary mb-3">100 CHF</p>
                <p className="font-body text-sm text-white/50 uppercase tracking-[0.2em]">Coach</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="border border-white/10 p-10 lg:p-12 text-center hover-lift bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                <p className="font-heading text-6xl text-primary mb-3">90 CHF</p>
                <p className="font-body text-sm text-white/50 uppercase tracking-[0.2em]">Fighter</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-primary">
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-20" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-none">
              Join the
              <br />
              Movement
            </h2>
            <p className="font-body text-white/80 max-w-xl mx-auto mb-10 text-base">
              Whether you're a fighter, coach, gym owner, or fan — become part of the Swiss MMA community
              and help us grow the sport together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-accent font-body font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-white/90 transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View Events
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
