import AnimatedSection from "@/components/AnimatedSection";
import { User, ChevronRight } from "lucide-react";
import swissFlag from "@/assets/swiss-flag.png";
import amirNefzi from "@/assets/fighter-amir-nefzi.jpeg";
import viktorKyshko from "@/assets/fighter-viktor-kyshko.png";

import vincentYerly from "@/assets/fighter-vincent-yerly.png";
import ruslanStalchenko from "@/assets/fighter-ruslan-stalchenko.jpg";
import luigiPerillo from "@/assets/board-luigi-perillo.png";
import donovanNtumba from "@/assets/fighter-donovan-ntumba.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Fighter = {
  name: string;
  results: string;
  flag: string;
  level: "Amateur" | "Elite" | "Professional";
  age: "Youth" | "Junior" | "Senior";
  photo?: string;
  photoPosition?: string;
};

const fighters: Fighter[] = [
  { name: "Vincent Yerly", results: "World and European champion", flag: "🇨🇭", level: "Elite", age: "Senior", photo: vincentYerly },
  { name: "Ruslan Stalchenko", results: "Vice-European champion", flag: "🇨🇭", level: "Elite", age: "Senior", photo: ruslanStalchenko, photoPosition: "center 15%" },
  { name: "Adrian Aliu", results: "Bronze medalist", flag: "🇨🇭", level: "Elite", age: "Senior" },
  { name: "George Gadelkarim", results: "First IMMAF male participant from Switzerland", flag: "🇨🇭", level: "Elite", age: "Senior" },
  { name: "Viktor Kyshko", results: "Category Youth", flag: "🇨🇭", level: "Amateur", age: "Youth", photo: viktorKyshko },
  { name: "Yanis Verissimo", results: "Category Senior", flag: "🇨🇭", level: "Amateur", age: "Senior" },
  { name: "Donovan Ntumba", results: "Category Senior", flag: "🇨🇭", level: "Amateur", age: "Senior", photo: donovanNtumba },
  { name: "Amir Nefzi", results: "Category Senior", flag: "🇨🇭", level: "Amateur", age: "Senior", photo: amirNefzi },
];

const leadership = [
  { name: "Luigi Perillo", role: "President", photo: luigiPerillo as string | undefined, photoPosition: "30% 25%" },
];

const pathway = ["Youth", "Amateur", "Elite", "National Team", "International Competition"];

const FighterCard = ({ fighter, i }: { fighter: Fighter; i: number }) => (
  <AnimatedSection delay={i * 0.05}>
    <div className="border border-border overflow-hidden hover-lift group">
      <div className="h-64 bg-muted flex items-center justify-center relative overflow-hidden">
        {fighter.photo ? (
          <img src={fighter.photo} alt={fighter.name} className="w-full h-full object-cover" style={{ objectPosition: fighter.photoPosition || (fighter.name === "Amir Nefzi" ? "center 30%" : "center") }} />
        ) : (
          <User size={48} className="text-muted-foreground" />
        )}
        <img src={swissFlag} alt="Swiss flag" className="absolute top-3 right-3 w-8 h-8 object-contain" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl text-foreground">{fighter.name}</h3>
        {fighter.results && <p className="font-body text-sm text-foreground mt-3">{fighter.results}</p>}
      </div>
    </div>
  </AnimatedSection>
);

const Group = ({ title, list }: { title: string; list: Fighter[] }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="red-accent-line" />
      <h3 className="font-heading text-2xl text-foreground uppercase tracking-wide">{title}</h3>
      <span className="font-body text-sm text-muted-foreground">({list.length})</span>
    </div>
    {list.length > 0 ? (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((f, i) => <FighterCard key={f.name} fighter={f} i={i} />)}
      </div>
    ) : (
      <p className="font-body text-sm text-muted-foreground italic">No athletes in this category yet.</p>
    )}
  </div>
);

const Fighters = () => {
  const byLevel = (l: Fighter["level"]) => fighters.filter(f => f.level === l);
  const byAge = (a: Fighter["age"]) => fighters.filter(f => f.age === a);

  return (
    <div className="pt-20">
      <section className="bg-accent text-accent-foreground section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="red-accent-line mx-auto mb-4" />
          <h1 className="font-heading text-5xl md:text-7xl">National Team</h1>
          <p className="font-body text-accent-foreground/60 mt-4 max-w-xl mx-auto">
            Elite athletes representing Switzerland in international MMA competition.
          </p>
        </div>
      </section>

      {/* Pathway */}
      <section className="section-padding bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="red-accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Pathway to National Team</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {pathway.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <div className="border border-border bg-card px-4 py-3 md:px-6 md:py-4">
                  <span className="font-heading text-sm md:text-base uppercase tracking-wider text-foreground">{step}</span>
                </div>
                {i < pathway.length - 1 && <ChevronRight className="text-primary" size={20} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="red-accent-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Leadership</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {leadership.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className="border border-border bg-card overflow-hidden hover-lift">
                  {p.photo && (
                    <div className="h-64 bg-muted overflow-hidden">
                      <img src={p.photo} alt={p.name} className="w-full h-full object-cover" style={{ objectPosition: p.photoPosition }} />
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <p className="font-body text-xs uppercase tracking-widest text-primary mb-2 whitespace-pre-line">{p.role}</p>
                    <h3 className="font-heading text-xl text-foreground">{p.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized fighters */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="level" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList>
                <TabsTrigger value="level">By Level</TabsTrigger>
                <TabsTrigger value="age">By Age</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="level">
              <Group title="Amateur" list={byLevel("Amateur")} />
              <Group title="Elite" list={byLevel("Elite")} />
              <Group title="Professional" list={byLevel("Professional")} />
            </TabsContent>

            <TabsContent value="age">
              <Group title="Youth" list={byAge("Youth")} />
              <Group title="Junior" list={byAge("Junior")} />
              <Group title="Senior" list={byAge("Senior")} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Fighters;
