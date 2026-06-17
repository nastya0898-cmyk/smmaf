import AnimatedSection from "@/components/AnimatedSection";
import { User } from "lucide-react";

import luigiPerillo from "@/assets/board-luigi-perillo.png";

type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  photoPosition?: string;
};

const boardMembers: Member[] = [
  { name: "Luigi Perillo", role: "President", bio: "Luigi Perillo is the Founder and President of the Swiss Mixed Martial Arts Federation (SMMAF), the national governing body for amateur Mixed Martial Arts in Switzerland and the organization affiliated with the International Mixed Martial Arts Federation (IMMAF).\n\nAs President of SMMAF and IMMAF Switzerland, he leads the development, governance, and international representation of amateur MMA throughout the country, working closely with clubs, athletes, coaches, officials, and international stakeholders. Under his leadership, SMMAF has established itself as the central organization for MMA in Switzerland, bringing together previously fragmented regional MMA communities into a unified national structure.\n\nHis contribution to the sport includes the creation of a comprehensive national framework for amateur MMA, the implementation of governance standards, athlete development pathways, educational programs, officiating structures, and the coordination of relationships between Swiss MMA clubs and international governing bodies. Through this work, SMMAF has strengthened Switzerland's presence within the global MMA ecosystem and increased opportunities for Swiss athletes to compete at the highest international amateur level.\n\nOne of Luigi Perillo's most significant strategic achievements was recognizing the importance of bringing the International Mixed Martial Arts Federation (IMMAF) to Switzerland and integrating the Swiss MMA movement into the international amateur MMA system. Through his vision and leadership, Switzerland now benefits from a nationally organized federation affiliated with IMMAF and recognized within the international MMA community. This achievement represented a major milestone in the institutional development of MMA in Switzerland and helped establish the Swiss MMA Federation as the official reference point for the sport throughout the country.\n\nBeyond his sporting responsibilities, Professor Luigi Perillo is a Chartered Accountant, international business executive, and academic. He serves as a Full Professor holding a Chair in International Tax Law at university level, specializing in international taxation, corporate governance, regulatory compliance, and cross-border business operations.\n\nHe is also the Chief Operating Officer (COO) of BKFC Italy, the Italian division of the world's leading bare-knuckle fighting organization, where he oversees strategic development, operations, institutional relations, and major event management.\n\nIn the corporate sector, he serves as Senior Manager of Gabriel & Spirits Sagl, an international company active in premium beverages, licensing, and global commercial development, and as President of Icon Holding SA, a Swiss holding company operating in investment, strategic development, sports, entertainment, and international business ventures.\n\nSince 2016, he has served as President of Superbia Management, an international athlete management company. He is also the Founder and Owner of The Golden Cage, a pioneering MMA event platform that has played a significant role in the international growth of Italian MMA. Through The Golden Cage, he was instrumental in securing event distribution on UFC Fight Pass and in bringing major international MMA organizations to Italy, including the BRAVE Combat Federation.\n\nAt the international governance level, Luigi Perillo serves as a member of the IMMAF Audit and Finance Committees and was elected in 2026 to the Board of Directors of the European MMA Federation (EMMAF), the continental body responsible for coordinating and developing amateur MMA throughout Europe.\n\nThroughout his career, Luigi Perillo has combined expertise in sports governance, international business, taxation, regulatory affairs, and organizational development. His work has focused on creating sustainable structures, strengthening institutional credibility, fostering international cooperation, and building pathways for athletes and organizations to operate within recognized and transparent frameworks.\n\nToday, he continues to play a direct operational role in strengthening the Swiss MMA Federation, expanding its international recognition, promoting cooperation between national and international sports organizations, and positioning Switzerland among the leading European hubs for organized amateur mixed martial arts. At the same time, he remains actively involved in the development of combat sports, international business ventures, sports governance initiatives, and strategic projects across Europe and beyond, consolidating his reputation as one of the leading figures in the European MMA and sports management landscape.", photo: luigiPerillo, photoPosition: "50% 25%" },
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="border border-border p-8 hover-lift group">
              <div className="w-28 h-28 bg-muted flex items-center justify-center mb-6 mx-auto overflow-hidden rounded-full">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: member.photoPosition || "center" }} />
                ) : (
                  <User size={32} className="text-muted-foreground" />
                )}
              </div>
              <div className="text-center">
                <h3 className="font-heading text-2xl text-foreground">{member.name}</h3>
                <p className="font-body text-primary text-sm font-semibold uppercase tracking-wider mt-1 mb-4 whitespace-pre-line">
                  {member.role}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default Board;
