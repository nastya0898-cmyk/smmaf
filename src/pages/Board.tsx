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
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="border border-border overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 lg:w-72 flex-shrink-0">
                <img
                  src={luigiPerillo}
                  alt="Luigi Perillo"
                  className="w-full h-72 md:h-full object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="font-body text-primary text-sm font-semibold uppercase tracking-wider mb-2">President</p>
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-6">Luigi Perillo</h2>
                <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
                  <p>Luigi Perillo is the Founder and President of the Swiss Mixed Martial Arts Federation (SMMAF), the first MMA federation in Switzerland officially recognized by governmental authorities.</p>
                  <p>He currently serves as President of SMMAF and IMMAF Switzerland, leading the national structure of amateur MMA in close alignment with the International Mixed Martial Arts Federation (IMMAF). Under his leadership, SMMAF operates as the central organization for MMA in Switzerland, uniting clubs, athletes, and coaches across all linguistic regions of the country.</p>
                  <p>His concrete contribution to SMMAF includes building a unified national system for amateur MMA, integrating previously fragmented regional communities into one coordinated federation structure. He established governance standards, athlete development pathways, and official communication between Swiss MMA clubs and international bodies.</p>
                  <p>Luigi Perillo continues to play a direct operational role in strengthening the federation's structure, expanding its international recognition, and positioning Switzerland as one of the key hubs for organized amateur MMA in Europe.</p>
                  <p>Alongside his work within SMMAF and IMMAF, Luigi is also the founder of Superbia Management SA and The Golden Cage, organizations that support athletes at every stage of their careers and help create pathways to the world's leading MMA promotions.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Board;
