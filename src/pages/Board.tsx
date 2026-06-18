import AnimatedSection from "@/components/AnimatedSection";
import { User } from "lucide-react";

import luigiPerillo from "@/assets/board-luigi-perillo.png";

type Member = {
  name: string;
  role: string;
  photo?: string;
};

const members: Member[] = [
  {
    name: "Maurizio Niceta",
    role: "Director of the Ticino Region",
  },
  {
    name: "Ivan Musardo Gracco",
    role: "Director of the German-speaking Switzerland Region",
    photo: "/Director%20of%20the%20German-speaking%20Switzerland%20Region%20-%20Ivan%20Musardo%20Gracco.jpeg",
  },
  {
    name: "Alberto Bastianelli",
    role: "Member of the Ethics Commission",
    photo: "/Member%20of%20the%20Ethics%20Commission%20-%20Alberto%20Bastianelli.jpeg",
  },
  {
    name: "Giovanni Tommaso Parisi",
    role: "Treasurer",
    photo: "/Giovanni%20Tommaso%20Parisi%20-%20Treasurer.jpeg",
  },
];

const Board = () => (
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
            <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
              <p>Luigi Perillo is the Founder and President of the Swiss Mixed Martial Arts Federation (SMMAF), the national governing body for amateur Mixed Martial Arts in Switzerland and the organization affiliated with the International Mixed Martial Arts Federation (IMMAF).</p>
              <p>As President of SMMAF and IMMAF Switzerland, he leads the development, governance, and international representation of amateur MMA throughout the country, working closely with clubs, athletes, coaches, officials, and international stakeholders. Under his leadership, SMMAF has established itself as the central organization for MMA in Switzerland, bringing together previously fragmented regional MMA communities into a unified national structure.</p>
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
        </AnimatedSection>

        {/* Other board members – grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className="border border-border p-6 hover-lift group text-center h-full">
                <div className="w-24 h-24 bg-muted flex items-center justify-center mb-5 mx-auto overflow-hidden rounded-full">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
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
      </div>
    </section>
  </div>
);

export default Board;
