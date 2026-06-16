import AnimatedSection from "@/components/AnimatedSection";
import eventsBg from "@/assets/events-bg.jpg";
import { Calendar, MapPin } from "lucide-react";

const upcoming = [
  {
    title: "IMMAF Youth World Championships 2026",
    date: "16-23 August 2026",
    location: "Abu Dhabi, UAE",
    desc: "Swiss national youth team competing at the IMMAF Youth World Championships.",
    image: "/august.png",
  },
];


const Events = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={eventsBg} alt="MMA training gym" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        <div className="red-accent-line mx-auto mb-4" />
        <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground">Events</h1>
      </div>
    </section>

    {/* Upcoming */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">Upcoming Events</h2>
          <div className="red-accent-line" />
        </AnimatedSection>

        <div className="space-y-6">
          {upcoming.map((event, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="border border-border hover-lift overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-72 lg:w-80 flex-shrink-0 h-52 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl text-foreground">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 mb-3">
                    <span className="font-body text-sm text-primary font-medium flex items-center gap-1">
                      <Calendar size={14} /> {event.date}
                    </span>
                    <span className="font-body text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={14} /> {event.location}
                    </span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Schedule */}
    <section className="section-padding bg-accent">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-accent-foreground mb-2">Schedule 2026</h2>
          <div className="red-accent-line" />
        </AnimatedSection>

        <div className="space-y-3">
          {[
            { title: "Swiss Cup September", location: "Lausanne", date: "Date — TBC" },
            { title: "Swiss Cup October", location: "Lugano", date: "Saturday 14 November" },
            { title: "Lugano in the Cage 9", location: "Lugano", date: "Saturday 14 November" },
            { title: "Swiss Cup December", location: "Geneva", date: "Date — TBC" },
            { title: "Referees and Judges Courses", location: "", date: "TBC" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-accent-foreground/10 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <div>
                    <span className="font-heading text-lg text-accent-foreground">{item.title}</span>
                    {item.location && (
                      <span className="font-body text-sm text-accent-foreground/50 ml-3 flex-shrink-0">
                        <MapPin size={12} className="inline mr-1" />{item.location}
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-body text-sm text-primary font-medium flex-shrink-0 ml-6 sm:ml-0">
                  {item.date}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default Events;
