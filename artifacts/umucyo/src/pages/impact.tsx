import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Users, Leaf, TrendingUp, Globe2, Heart, BookOpen,
  ShieldCheck, Sun, ArrowRight, CheckCircle2, Target
} from "lucide-react";
import womenImg from "@/assets/women-farmers.webp";
import rwandaImg from "@/assets/rwanda-landscape.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const sdgs = [
  {
    number: "SDG 1",
    title: "No Poverty",
    color: "bg-red-600",
    desc: "Decent work is one of the most effective pathways out of poverty — expanding access to structured employment and income for women and their families."
  },
  {
    number: "SDG 5",
    title: "Gender Equality",
    color: "bg-orange-500",
    desc: "As a 90% women-led organization, we increase women's participation in the economy and strengthen leadership opportunities."
  },
  {
    number: "SDG 8",
    title: "Decent Work & Growth",
    color: "bg-rose-700",
    desc: "Creating decent work is our core mission — workforce development and skills training that support inclusive economic growth."
  },
  {
    number: "SDG 13",
    title: "Climate Action",
    color: "bg-green-700",
    desc: "Climate-smart agricultural practices and agroforestry that help farming communities adapt to changing environmental conditions."
  },
  {
    number: "SDG 15",
    title: "Life on Land",
    color: "bg-emerald-700",
    desc: "Responsible land stewardship, soil conservation, and sustainable farming practices that protect Rwanda's agricultural ecosystems."
  },
  {
    number: "SDG 17",
    title: "Partnerships",
    color: "bg-blue-700",
    desc: "Working alongside agricultural businesses, government, development agencies, and donors to build inclusive value chains."
  },
];

const impactAreas = [
  {
    icon: Users,
    label: "Decent Employment",
    desc: "Our primary mission is creating dignified employment opportunities for women and young people, through organized workforce services and continuous skills development."
  },
  {
    icon: Globe2,
    label: "Stronger Agricultural Value Chains",
    desc: "By providing trained workforce support to agricultural businesses, we contribute to quality, efficiency, and responsible employment practices — complementing the work of cooperatives, processors, and exporters."
  },
  {
    icon: Heart,
    label: "Women's Economic Empowerment",
    desc: "Beyond employment, members develop leadership skills, financial confidence, and greater participation in decision-making within their households, communities, and the cooperative itself."
  },
  {
    icon: Leaf,
    label: "Climate Resilience",
    desc: "Through climate-smart agriculture, agroforestry, and responsible land management, we encourage farming practices that protect natural resources while supporting long-term productivity."
  },
];

const fundingEnables = [
  {
    icon: BookOpen,
    title: "Workforce Training & Capacity Building",
    desc: "Structured skills programs, financial literacy workshops, and leadership development for women and youth."
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship Incentives",
    desc: "Piloting a model that rewards women directly for agroforestry, soil conservation, and watershed protection work."
  },
  {
    icon: Users,
    title: "Youth Employment Pathways",
    desc: "Structured entry pathways and apprenticeships for young women entering agricultural value chains."
  },
  {
    icon: ShieldCheck,
    title: "Workforce Safety & Equipment",
    desc: "Protective equipment, tools, and transport that keep sorting and field teams safe and productive."
  },
  {
    icon: Sun,
    title: "Agroforestry & Climate-Smart Inputs",
    desc: "Tree seedlings, soil-conservation materials, and water-stewardship tools for member farms."
  },
  {
    icon: TrendingUp,
    title: "Leadership & Financial Inclusion",
    desc: "Savings groups, microfinance linkages, and mentorship pathways into cooperative leadership."
  },
];

export default function Impact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={womenImg} alt="Umucyo women cooperative" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-semibold tracking-wide text-white">Measurable Change</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Impact
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Every job created, every training session, every tree planted — a step toward lasting change for women and communities across Rwanda.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Where We Are Today */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-2 md:divide-y-0 md:divide-x divide-border">
            {[
              { value: "90%", label: "Women-Led" },
              { value: "2022", label: "Established" },
              { value: <AnimatedCounter target={2000} suffix="+" />, label: "Women Employed" },
              { value: "10,000", label: "Jobs — Our 2030 Vision" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pt-8 md:pt-0 md:px-8 first:pl-0 last:pr-0 text-center md:text-left"
              >
                <div className="text-4xl font-serif font-bold text-primary mb-1">{s.value}</div>
                <div className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Where Impact Happens</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary">
              Four interconnected areas of change.
            </motion.h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-3xl flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">{item.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Theory of Change</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              How sustainable transformation happens.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-white/80 text-lg">
              Our model creates a self-reinforcing cycle: organized, trained women earn decent income, which strengthens households and communities, which deepens the skilled workforce agricultural businesses can rely on.
            </motion.p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-0 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Organize", desc: "Recruit and formalize women into a well-governed, professional cooperative workforce." },
              { step: "02", title: "Capacitate", desc: "Train members in workplace professionalism, quality standards, financial literacy, and leadership." },
              { step: "03", title: "Deploy", desc: "Mobilize trained teams to support coffee sorting, horticulture, and agroforestry work." },
              { step: "04", title: "Reward Fairly", desc: "Members earn decent, formal wages — with environmental stewardship as the next frontier of fair pay." },
              { step: "05", title: "Reinvest", desc: "Channel earnings back into training, leadership development, and community programs." },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1 flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-primary font-serif font-bold text-2xl flex items-center justify-center z-10 mb-4">
                  {stage.step}
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20 z-0" />
                )}
                <h4 className="font-bold text-lg text-white mb-2">{stage.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed px-2">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rwanda Policy Alignment */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={rwandaImg} alt="Rwanda highlands" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/80 italic font-serif text-lg">
                  "Rwanda's highlands — the birthplace of premium Arabica and the home of Umucyo."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">National Alignment</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl font-serif font-bold text-primary mb-6">
                Aligned with Rwanda's national development agenda.
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8">
                Our work directly advances Rwanda's strategic development priorities across multiple national frameworks.
              </motion.p>
              <motion.div variants={stagger} className="space-y-6">
                {[
                  { title: "NST1 — National Strategy for Transformation", desc: "Supporting agricultural transformation, export growth, and poverty reduction targets." },
                  { title: "Vision 2050", desc: "Contributing to Rwanda's upper-middle income country goals through agribusiness development." },
                  { title: "PSTA4 — Agriculture Transformation Strategy", desc: "Advancing value chain development, market access, and climate resilience in the agricultural sector." },
                  { title: "National Gender Policy", desc: "Embedding women's leadership, economic empowerment, and gender equity in cooperative governance." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Global Goals</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
              UN Sustainable Development Goals
            </h3>
            <p className="text-muted-foreground text-lg">
              Umucyo's activities directly contribute to six of the United Nations' Sustainable Development Goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((sdg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border overflow-hidden"
                data-testid={`card-sdg-${i}`}
              >
                <div className={`${sdg.color} px-6 py-4`}>
                  <span className="text-white font-bold text-sm tracking-wide">{sdg.number}</span>
                  <h4 className="text-white font-serif font-bold text-xl">{sdg.title}</h4>
                </div>
                <div className="p-6 bg-card">
                  <p className="text-muted-foreground">{sdg.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Support Enables */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">For Donors & Partners</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              What your support enables.
            </h3>
            <p className="text-white/80 text-lg">
              Targeted investment in Umucyo creates measurable, lasting impact across the cooperative's value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingEnables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                data-testid={`card-funding-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-bold text-lg text-white mb-3">{item.title}</h4>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-secondary text-primary hover:bg-white text-lg font-semibold">
              <Link href="/contact">
                Discuss a Partnership <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
