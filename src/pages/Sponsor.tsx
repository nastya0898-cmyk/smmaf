import { FormEvent, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Handshake,
  Trophy,
  Megaphone,
  Users,
  Target,
  Award,
  Download,
  ArrowRight,
  Check,
  Star,
  Flame,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import { toast } from "sonner";

const reachStats = [
  { value: "50+", label: "Athletes" },
  { value: "8+", label: "National events / year" },
  { value: "5'000+", label: "Live spectators" },
  { value: "50'000+", label: "Social media reach" },
];

const benefits = [
  { icon: Trophy, title: "Brand Visibility", text: "Your brand featured on fight events, athlete gear, and national promotions." },
  { icon: Megaphone, title: "Media Exposure", text: "Appear across social media, live events, and digital broadcasts." },
  { icon: Target, title: "Target Audience", text: "Reach a young, active, high-spending audience (18–35)." },
  { icon: Award, title: "Premium Positioning", text: "Align your brand with discipline, performance, and elite sport." },
];

const tiers = [
  {
    name: "Bronze",
    price: "CHF 5'000",
    tagline: "Entry-level partnership",
    perks: [
      "Logo on website (footer placement)",
      "3 social media mentions per year",
      "Event recognition during announcements",
      "Quarterly partnership newsletter",
    ],
    highlight: false,
    badge: null,
    accent: "border-border",
  },
  {
    name: "Silver",
    price: "CHF 15'000",
    tagline: "Most popular — best value",
    perks: [
      "Logo on official fighter gear",
      "Branded event booth at national events",
      "PR exposure & press release feature",
      "Estimated 25'000+ impressions per event",
      "VIP networking with athletes & officials",
      "Logo on website banner placement",
    ],
    highlight: true,
    badge: "BEST VALUE",
    accent: "border-primary",
  },
  {
    name: "Gold",
    price: "CHF 50'000+",
    tagline: "Title sponsor — WOW package",
    perks: [
      "Title sponsor of national events",
      "Logo on national team apparel",
      "Exclusive category branding rights",
      "Dedicated media campaigns & content",
      "Premium placement across all channels",
      "Direct partnership with the Swiss national team",
      "Co-branded press conferences & VIP hospitality",
    ],
    highlight: false,
    badge: "ELITE",
    accent: "border-foreground",
  },
];

const whatYouGet = [
  { icon: Globe, title: "Brand Exposure", text: "National & international visibility through events and media." },
  { icon: Users, title: "Direct Access to Athletes", text: "Meet, work and create content with elite Swiss fighters." },
  { icon: Flame, title: "Event Presence", text: "On-site activation at fight nights and championship galas." },
  { icon: Megaphone, title: "Media Coverage", text: "Featured across our digital, broadcast and PR network." },
  { icon: Shield, title: "Community Impact", text: "Support youth development and the future of Swiss MMA." },
];

const Sponsor = () => {
  const [form, setForm] = useState({ company: "", contact: "", email: "", message: "", tier: "Silver" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7a35a86a-ee1a-497b-abe2-7a46ba7e2265",
          subject: `New Partnership Inquiry: ${form.company}`,
          from_name: form.contact,
          email: form.email,
          message: [
            `Company: ${form.company}`,
            `Contact: ${form.contact}`,
            `Email: ${form.email}`,
            `Tier interest: ${form.tier}`,
            ``,
            `Message:`,
            form.message,
          ].join("\n"),
          botcheck: false,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Thank you! Our partnership team will contact you shortly.");
        setForm({ company: "", contact: "", email: "", message: "", tier: "Silver" });
      } else {
        toast.error(data.message ?? "Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("partnership-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative bg-accent text-accent-foreground section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="red-accent-line mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Sponsorship Opportunities</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight">
            Partner with Swiss MMA.<br />
            <span className="text-primary">Reach Thousands.</span> Build Your Brand.
          </h1>
          <p className="font-body text-accent-foreground/70 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Connect your brand with one of the fastest-growing sports in Switzerland and gain national and international exposure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={scrollToForm}
              className="group bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent-foreground" />
              Request Partnership
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => toast.info("Sponsor kit will be sent to your email after inquiry.")}
              className="group bg-accent-foreground text-accent font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:bg-accent-foreground/90 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download Sponsor Kit
            </button>
          </div>
        </div>
      </section>

      {/* OUR REACH */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8 text-center">Our Reach</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {reachStats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-heading text-4xl md:text-5xl text-primary">{s.value}</p>
                  <p className="font-body text-xs md:text-sm text-background/60 uppercase tracking-wider mt-2">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="red-accent-line mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">Why Partner With Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="border border-border p-6 h-full hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{b.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* WHAT YOU GET */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="red-accent-line mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">What You Get</h2>
            <p className="font-body text-muted-foreground mb-12 max-w-2xl">
              Every sponsorship comes with tangible value across exposure, access and impact.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whatYouGet.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.05}>
                <div className="border-l-2 border-primary pl-5 py-2 h-full">
                  <b.icon size={22} className="text-primary mb-3" />
                  <h3 className="font-heading text-lg text-foreground mb-2">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{b.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS / AFFILIATIONS */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 text-center">
              Official Partners & Affiliations
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <AnimatedSection delay={0.05}>
              <div className="bg-background border border-border px-6 py-5 flex items-center gap-3 min-w-[200px] justify-center">
                <Shield size={28} className="text-primary" />
                <div>
                  <p className="font-heading text-lg text-foreground leading-tight">IMMAF</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground">Member Federation</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-background border border-border px-6 py-5 flex items-center gap-3 min-w-[200px] justify-center">
                <div className="w-7 h-7 bg-primary flex items-center justify-center">
                  <div className="w-4 h-1 bg-background absolute" />
                  <div className="w-1 h-4 bg-background" />
                </div>
                <div>
                  <p className="font-heading text-lg text-foreground leading-tight">Switzerland</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground">National Body</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-background border border-border px-6 py-5 flex items-center gap-3 min-w-[200px] justify-center">
                <Award size={28} className="text-primary" />
                <div>
                  <p className="font-heading text-lg text-foreground leading-tight">Official Federation</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground">SMMAF · Since 2020</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="partnership-form" className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="red-accent-line mb-4" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Start Your Partnership Today</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-3">
              Let's build a winning partnership.
            </h2>
            <p className="font-body text-muted-foreground mb-10">
              Tell us about your brand and goals — our partnership team will get back to you within 48 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Company</label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Contact Name</label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:bg-primary/90 transition-colors w-full flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Request Partnership"}
                {!submitting && <ArrowRight size={16} />}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
