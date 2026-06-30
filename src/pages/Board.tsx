import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import luigiPerillo from "@/assets/board-luigi-perillo.png";
import isaUsupov from "@/assets/board-isa-usupov.png";
import georgeGadelkarim from "@/assets/board-george-gadelkarim.jpeg";
import ivanMusardoGracco from "@/assets/board-ivan-musardo-gracco.jpeg";
import albertoBastianelli from "@/assets/board-alberto-bastianelli.jpeg";
import giovanniParisi from "@/assets/board-giovanni-parisi.jpeg";
import annaRepchuk from "@/assets/board-anna-repchuk.jpeg";

type Member = {
  name: string;
  role: string;
  photo?: string;
  objectPosition?: string;
};

const members: Member[] = [
  { name: "Isa Usupov", role: "Vice-President", photo: isaUsupov, objectPosition: "center top" },
  { name: "Ivan Musardo Gracco", role: "Director of the German-speaking Switzerland Region", photo: ivanMusardoGracco, objectPosition: "center top" },
  { name: "Marcos Simões", role: "Director of the French-speaking Switzerland Region", photo: "/Маркос.jpeg", objectPosition: "center top" },
  { name: "Maurizio Niceta", role: "Director of the Italian-speaking Switzerland Region", photo: "/Мауризио Нисета.jpeg", objectPosition: "center top" },
  { name: "George Gadelkarim", role: "Head Coach", photo: georgeGadelkarim, objectPosition: "center top" },
  { name: "Jordan Aigner", role: "Technical Director" },
  { name: "Alberto Bastianelli", role: "Member of the Ethics Commission", photo: albertoBastianelli, objectPosition: "center top" },
  { name: "Marilson Paulo Da Silva", role: "Member of National Technical Commission and Events and Competitions Commission", photo: "/Marilson Paulo Da Silva.jpeg", objectPosition: "center top" },
  { name: "Giovanni Tommaso Parisi", role: "Treasurer", photo: giovanniParisi, objectPosition: "center top" },
  { name: "Anna Repchuk", role: "General Secretary", photo: annaRepchuk, objectPosition: "center top" },
];

const commissions = [
  {
    name: "National Technical Commission",
    members: ["Marilson Paulo Da Silva", "Tbc"],
  },
  {
    name: "National Referees and Judges Commission",
    members: ["Tbc", "Tbc"],
  },
  {
    name: "Medical Commission",
    members: ["Tbc", "Tbc"],
  },
  {
    name: "Ethics and Disciplinary Commission",
    members: ["Alberto Bastianelli", "Tbc"],
  },
  {
    name: "Anti-Doping and Integrity Commission",
    members: ["Tbc", "Tbc"],
  },
  {
    name: "Development and Education Commission",
    members: ["Tbc", "Tbc"],
  },
  {
    name: "Events and Competitions Commission",
    members: ["Marilson Paulo Da Silva", "Tbc"],
  },
  {
    name: "Marketing, Media and Sponsorship Commission",
    members: ["Tbc", "Tbc"],
  },
  {
    name: "Athletes' Commission",
    members: ["George Gadelkarim", "Tbc"],
  },
  {
    name: "Electoral and Nominations Commission",
    members: ["Tbc", "Tbc"],
  },
  {
    name: "Finance and Audit Commission",
    members: ["Tbc", "Tbc"],
  },
];

const Board = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pt-20">
      <section className="bg-accent text-accent-foreground section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="red-accent-line mx-auto mb-4" />
          <h1 className="font-heading text-5xl md:text-7xl">Board Members</h1>
          <p className="font-body text-accent-foreground/60 mt-4 max-w-xl mx-auto">
            The leadership team driving Swiss MMA forward.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* President – full-width float card */}
          <AnimatedSection>
            <div className="border border-border p-8 lg:p-12 overflow-hidden">
              <img
                src={luigiPerillo}
                alt="Luigi Perillo"
                className="float-left w-52 h-52 md:w-72 md:h-72 object-cover mr-8 mb-4"
                style={{ objectPosition: "50% 25%" }}
              />
              <p className="font-body text-primary text-sm font-semibold uppercase tracking-wider mb-2">President</p>
              <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-6">Luigi Perillo</h2>

              <div className="font-body text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>Luigi Perillo is the Founder and President of the Swiss Mixed Martial Arts Federation (SMMAF), the national governing body for amateur Mixed Martial Arts in Switzerland and the organization affiliated with the International Mixed Martial Arts Federation (IMMAF).</p>
                <p>As President of SMMAF and IMMAF Switzerland, he leads the development, governance, and international representation of amateur MMA throughout the country, working closely with clubs, athletes, coaches, officials, and international stakeholders. Under his leadership, SMMAF has established itself as the central organization for MMA in Switzerland, bringing together previously fragmented regional MMA communities into a unified national structure.</p>

                <div
                  className="space-y-4 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: expanded ? "2000px" : "0px", opacity: expanded ? 1 : 0 }}
                >
                  <p>His contribution to the sport includes the creation of a comprehensive national framework for amateur MMA, the implementation of governance standards, athlete development pathways, educational programs, officiating structures, and the coordination of relationships between Swiss MMA clubs and international governing bodies. Through this work, SMMAF has strengthened Switzerland's presence within the global MMA ecosystem and increased opportunities for Swiss athletes to compete at the highest international amateur level.</p>
                  <p>One of Luigi Perillo's most significant strategic achievements was recognizing the importance of bringing the International Mixed Martial Arts Federation (IMMAF) to Switzerland and integrating the Swiss MMA movement into the international amateur MMA system. Through his vision and leadership, Switzerland now benefits from a nationally organized federation affiliated with IMMAF and recognized within the international MMA community. This achievement represented a major milestone in the institutional development of MMA in Switzerland and helped establish the Swiss MMA Federation as the official reference point for the sport throughout the country.</p>
                  <p>Beyond his sporting responsibilities, Professor Luigi Perillo is a Chartered Accountant, international business executive, and academic. He serves as a Full Professor holding a Chair in International Tax Law at university level, specializing in international taxation, corporate governance, regulatory compliance, and cross-border business operations.</p>
                  <p>He is also the Chief Operating Officer (COO) of BKFC Italy, the Italian division of the world's leading bare-knuckle fighting organization, where he oversees strategic development, operations, institutional relations, and major event management.</p>
                  <p>In the corporate sector, he serves as Senior Manager of Gabriel & Spirits Sagl, an international company active in premium beverages, licensing, and global commercial development, and as President of Icon Holding SA, a Swiss holding company operating in investment, strategic development, sports, entertainment, and international business ventures.</p>
                  <p>Since 2016, he has served as President of Superbia Management, an international athlete management company. He is also the Founder and Owner of The Golden Cage, a pioneering MMA event platform that has played a significant role in the international growth of Italian MMA. Through The Golden Cage, he was instrumental in securing event distribution on UFC Fight Pass and in bringing major international MMA organizations to Italy, including the BRAVE Combat Federation.</p>
                  <p>At the international governance level, Luigi Perillo serves as a member of the IMMAF Audit and Finance Committees and was elected in 2026 to the Board of Directors of the European MMA Federation (EMMAF), the continental body responsible for coordinating and developing amateur MMA throughout Europe.</p>
                  <p>Throughout his career, Luigi Perillo has combined expertise in sports governance, international business, taxation, regulatory affairs, and organizational development. His work has focused on creating sustainable structures, strengthening institutional credibility, fostering international cooperation, and building pathways for athletes and organizations to operate within recognized and transparent frameworks.</p>
                  <p>Today, he continues to play a direct operational role in strengthening the Swiss MMA Federation, expanding its international recognition, promoting cooperation between national and international sports organizations, and positioning Switzerland among the leading European hubs for organized amateur mixed martial arts. At the same time, he remains actively involved in the development of combat sports, international business ventures, sports governance initiatives, and strategic projects across Europe and beyond, consolidating his reputation as one of the leading figures in the European MMA and sports management landscape.</p>
                </div>
              </div>

              <div className="clear-both mt-6">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary tracking-widest uppercase hover:opacity-70 transition-opacity"
                >
                  {expanded ? (<>Show Less <ChevronUp size={16} /></>) : (<>Read More <ChevronDown size={16} /></>)}
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Board members grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <div className="border border-border p-6 hover-lift group text-center h-full">
                  <div className="w-24 h-24 bg-muted flex items-center justify-center mb-5 mx-auto overflow-hidden rounded-full">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: member.objectPosition || "center top" }}
                      />
                    ) : (
                      <User size={28} className="text-muted-foreground" />
                    )}
                  </div>
                  <p className="font-body text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Commissions */}
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Commissions</h2>
            <div className="red-accent-line mb-6" />
            <Accordion type="multiple" className="border border-border divide-y divide-border">
              {commissions.map((commission) => (
                <AccordionItem key={commission.name} value={commission.name} className="border-0">
                  <AccordionTrigger className="px-6 font-heading text-lg text-foreground tracking-wide hover:no-underline hover:text-primary transition-colors">
                    {commission.name}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <ul className="space-y-2">
                      {commission.members.map((name, i) => (
                        <li key={i} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                          <span className="w-5 h-5 border border-border flex-shrink-0" />
                          <span className={name === "Tbc" ? "italic text-muted-foreground/50" : ""}>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
};

export default Board;
