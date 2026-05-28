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
  { name: "Luigi Perillo", role: "President", bio: "Entrepreneur, sports manager, and consultant known for his impact on MMA and combat sports in Europe. He is Co-President of Bare Knuckle Fighting Championship Italy and President of Icon Holding SA.", photo: luigiPerillo, photoPosition: "50% 25%" },
  { name: "Isa Usupov", role: "Vice President\nHead Coach", bio: "Sports management professional with extensive experience in athlete development programs." },
  { name: "Marco Keller", role: "Technical Director", bio: "Black belt in Brazilian Jiu-Jitsu and certified MMA coach. Oversees training standards and competition rules." },
  { name: "Sophie Brunner", role: "Secretary General", bio: "Legal and administrative expert ensuring compliance with Swiss sports law and IMMAF regulations." },
  { name: "David Fischer", role: "Head of Events", bio: "Event management specialist responsible for organizing national championships and international team logistics." },
  { name: "Elena Roth", role: "Athlete Representative", bio: "Active national team fighter advocating for athlete welfare, anti-doping protocols, and fair competition standards." },
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
