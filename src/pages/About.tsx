import aboutImage from "@/assets/about-fighters.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => (
  <div className="pt-20">
    {/* Hero banner */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={aboutImage} alt="MMA fighters competing" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={720} />
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        <div className="red-accent-line mx-auto mb-4" />
        <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground">About Us</h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto space-y-16">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Who We Are</h2>
          <div className="red-accent-line mb-6" />
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              The Swiss MMA Federation (SMMAF) is the official governing body for Mixed Martial Arts in Switzerland, responsible for the development, regulation, and promotion of the sport nationwide.
            </p>
            <p>
              We bring together athletes, coaches, referees, and MMA clubs under one unified and professional organization, creating a strong national platform for the growth of amateur and elite MMA in Switzerland.
            </p>
            <p>
              From grassroots development to international competition, SMMAF is committed to building the future of Swiss MMA and representing Switzerland on the global stage.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Mission & Vision</h2>
          <div className="red-accent-line mb-6" />

          <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">Our Mission</h3>
          <p className="font-body text-muted-foreground leading-relaxed mb-3">
            To develop and elevate Mixed Martial Arts in Switzerland to international standards by:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 font-body text-muted-foreground leading-relaxed">
            <li>nurturing talent at all levels</li>
            <li>ensuring athlete safety and fair competition</li>
            <li>organizing structured MMA events and national programs</li>
          </ul>

          <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">Our Vision</h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            To establish MMA as a recognized and respected sport in Switzerland, with Swiss athletes competing — and winning — at the highest levels of international MMA competition, including European and World Championships.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">IMMAF Affiliation</h2>
          <div className="red-accent-line mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            The Swiss MMA Federation (SMMAF) is officially affiliated with the International Mixed Martial Arts Federation (IMMAF) — the global governing body for amateur MMA.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-3">
            Through this partnership, Swiss athletes gain access to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body text-muted-foreground leading-relaxed">
            <li>IMMAF World Championships</li>
            <li>European Championships</li>
            <li>International competition pathways</li>
          </ul>
          <p className="font-body text-muted-foreground leading-relaxed">
            Representing Switzerland on the world stage, our fighters compete among the best amateur MMA athletes globally.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Developing MMA in Switzerland</h2>
          <div className="red-accent-line mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            SMMAF works closely with MMA gyms, coaches, and regional organizations to build a structured and sustainable ecosystem for the sport.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-3">We provide:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body text-muted-foreground leading-relaxed">
            <li>youth development programs</li>
            <li>national competitions</li>
            <li>athlete selection for the Swiss national team</li>
          </ul>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our goal is to create a clear pathway for every athlete — from beginner to elite — and to establish Switzerland as a strong and competitive nation in international MMA.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
