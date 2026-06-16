import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-accent text-accent-foreground section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="red-accent-line mx-auto mb-4" />
          <h1 className="font-heading text-5xl md:text-7xl">Contact</h1>
          <p className="font-body text-accent-foreground/60 mt-4 max-w-xl mx-auto">
            Get in touch with the Swiss MMA Federation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-foreground mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                className="bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:bg-primary/90 transition-colors w-full disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-3xl text-foreground mb-6">Info</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "Info@mmasf.org" },
                { icon: MapPin, label: "Address", value: "Via Toveda n.3\n6535 Roveredo - Switzerland - Canton of Grisons" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-body text-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
