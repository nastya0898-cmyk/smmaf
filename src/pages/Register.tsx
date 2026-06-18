import { FormEvent, useState } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar as CalendarIcon, MapPin, CheckCircle2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const events = [
  { id: "immaf-youth-2026", title: "IMMAF Youth World Championships 2026", date: "16-23 August 2026", location: "Abu Dhabi, UAE" },
];

const registrationSchema = z.object({
  eventId: z.string().min(1).max(64),
  role: z.string().min(1).max(64),
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  dob: z.string().min(1, "Date of birth is required"),
  gym: z.string().trim().max(120).optional(),
  weightClass: z.string().trim().max(32).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(32).optional(),
  notes: z.string().trim().max(2000).optional(),
});

const formatDateForInput = (date: Date) => format(date, "yyyy-MM-dd");
const parseDateOfBirth = (value: string) => (value ? new Date(`${value}T00:00:00`) : undefined);

const Register = () => {
  const [form, setForm] = useState({
    eventId: events[0].id,
    role: "Athlete",
    fullName: "",
    dob: "",
    gym: "",
    weightClass: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = registrationSchema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      toast.error(first?.message ?? "Please check the form");
      return;
    }
    const data = parsed.data;
    const event = events.find((ev) => ev.id === data.eventId);

    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("event_registrations").insert({
        id,
        event_id: data.eventId,
        event_title: event?.title ?? null,
        role: data.role,
        full_name: data.fullName,
        dob: data.dob || null,
        gym: data.gym || null,
        weight_class: data.weightClass || null,
        email: data.email,
        phone: data.phone || null,
        notes: data.notes || null,
      });
      if (error) throw error;

      // Fire-and-forget confirmation + admin notification (works once email domain is set up)
      void supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "registration-confirmation",
          recipientEmail: data.email,
          idempotencyKey: `reg-confirm-${id}`,
          templateData: {
            name: data.fullName,
            eventTitle: event?.title ?? "an SMMAF event",
            eventDate: event?.date ?? "",
            eventLocation: event?.location ?? "",
          },
        },
      });

      toast.success("Registration submitted! Confirmation will be emailed to you.");
      setForm({ ...form, fullName: "", dob: "", gym: "", weightClass: "", email: "", phone: "", notes: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not submit registration. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="pt-20">
      <section className="bg-accent text-accent-foreground section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="red-accent-line mx-auto mb-4" />
          <h1 className="font-heading text-5xl md:text-7xl">Register for Events</h1>
          <p className="font-body text-accent-foreground/60 mt-4 max-w-2xl mx-auto">
            Sign up as an athlete, coach or official for upcoming SMMAF competitions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <AnimatedSection>
            <div className="red-accent-line mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">Open Registrations</h2>
            <div className="space-y-4">
              {events.map((ev) => (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => setForm({ ...form, eventId: ev.id })}
                  className={`w-full text-left border p-5 transition-colors ${
                    form.eventId === ev.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {form.eventId === ev.id ? (
                      <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 border border-border rounded-full mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="font-heading text-lg text-foreground">{ev.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="font-body text-xs text-primary flex items-center gap-1">
                          <CalendarIcon size={12} /> {ev.date}
                        </span>
                        <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin size={12} /> {ev.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="red-accent-line mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-3">Registration Form</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              For additional information, rankings, and official federation documents, please fill out the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Role</label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option>Athlete</option>
                  <option>Coach</option>
                  <option>Official / Referee</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Date of Birth</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors flex items-center justify-between"
                      >
                        <span className={form.dob ? "text-foreground" : "text-muted-foreground"}>
                          {form.dob ? format(parseDateOfBirth(form.dob)!, "PPP", { locale: enUS }) : "Pick a date"}
                        </span>
                        <CalendarIcon size={16} className="text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={parseDateOfBirth(form.dob)}
                        onSelect={(date) => date && setForm({ ...form, dob: formatDateForInput(date) })}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        locale={enUS}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Gym / Club</label>
                  <input
                    type="text"
                    value={form.gym}
                    onChange={(e) => setForm({ ...form, gym: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Weight Class</label>
                  <input
                    type="text"
                    placeholder="e.g. -70 kg"
                    value={form.weightClass}
                    onChange={(e) => setForm({ ...form, weightClass: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
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
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">Notes</label>
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:bg-primary/90 transition-colors w-full disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Register;
