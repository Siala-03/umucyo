import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Coffee, Leaf, Sprout, Lightbulb, Users,
  Globe, CheckCircle2, Award, TrendingUp,
  Package, FlaskConical, Sun, BookOpen, ShieldCheck, TreePine, Handshake
} from "lucide-react";

import coffeeImg from "@/assets/hero-coffee.webp";
import processingImg from "@/assets/coffee-processing.webp";
import hortImg from "@/assets/horticulture.webp";
import womenImg from "@/assets/women-farmers.webp";
import meetingImg from "@/assets/coop-meeting.webp";
import rwandaImg from "@/assets/rwanda-landscape.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Services() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[560px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={coffeeImg} alt="Women sorting coffee" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
              From the sorting table to the agroforestry plot — Umucyo Women Cooperative organizes, trains, and coordinates skilled women who create value across Rwanda's agricultural value chains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service overview stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-2 md:divide-y-0 md:divide-x divide-border">
            {[
              { value: "7", label: "Core Service Areas" },
              { value: "30+", label: "Training Programs Annually" },
              { value: "90%", label: "Women-Led Workforce" },
              { value: "2,000+", label: "Women Employed" },
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

      {/* Service 1 — Coffee Sorting & Grading */}
      <section className="py-24 bg-background" id="coffee-sorting">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 01</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Coffee Sorting & Grading
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Coffee sorting is one of our largest sources of direct employment. Coffee processors require meticulous hand-sorting and grading to maintain the quality standards their business depends on — work that is skilled, essential, and too often treated as invisible labor.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Umucyo organizes women into trained, accountable sorting teams that processors and washing stations can rely on — with fair, formal pay for work that has always mattered.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3 mb-10">
                {[
                  "Trained, organized sorting and grading teams",
                  "Defect removal and density separation to grade standard",
                  "Fair, formal wages for skilled hand-sorting work",
                  "Mobilized reliably around seasonal processing peaks",
                  "Quality documentation supporting processors' certifications",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["Trained workforce", "Fair wages", "Quality-focused", "Seasonal & year-round"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{tag}</span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={coffeeImg} alt="Women sorting coffee" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <p className="text-white font-serif italic text-lg">
                  "Sorting is skilled work. Every bean a woman inspects is a decision that protects a processor's quality — and it deserves to be paid like the skill it is."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2 — Strengthening Agricultural Businesses */}
      <section className="py-24 bg-card" id="business-partnership">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[580px] rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first"
            >
              <img src={processingImg} alt="Organized workforce at a processing facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 02</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Strengthening Agricultural Businesses
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Agricultural businesses thrive when they can rely on skilled people. Seasonal peaks often demand organized labour that can be mobilized efficiently without compromising quality — a need many businesses struggle to meet on their own.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Rather than replacing cooperatives, processors, or washing stations, Umucyo works alongside them — making quality labour more accessible so businesses can focus on what they do best.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Package, label: "Sorting & Grading", desc: "Organized teams for hand-sorting and density separation" },
                  { icon: Sprout, label: "Field Operations", desc: "Disciplined support for horticulture production cycles" },
                  { icon: Users, label: "Seasonal Mobilization", desc: "Reliable workforce scaling around harvest peaks" },
                  { icon: ShieldCheck, label: "Accountability", desc: "Trained, supervised, and quality-focused teams" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-background rounded-2xl p-5 border border-border">
                    <item.icon className="w-6 h-6 text-secondary mb-3" />
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.label}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button asChild className="rounded-full h-12 px-8">
                  <Link href="/our-model">See Our Model <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 3 — Horticulture Livelihoods */}
      <section className="py-24 bg-background" id="horticulture">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 03</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Horticulture Livelihoods
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Agricultural households are often vulnerable when income depends on a single crop or harvest season. Alongside coffee, our members build a second income stream in horticulture — diversifying earnings and reducing exposure to seasonal fluctuations.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Diversification does more than increase income. It enables families to plan for the future with greater confidence, improving food security and household resilience.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3 mb-10">
                {[
                  "Year-round income diversification for member households",
                  "Field operations support for horticulture producers",
                  "Post-harvest handling: cleaning, grading, and packing",
                  "Good Agricultural Practice (GAP) skills training",
                  "Reduced dependence on a single crop or season",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={hortImg} alt="Horticulture livelihoods" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 4 — Training */}
      <section className="py-24 bg-primary text-white" id="training">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[560px] rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first"
            >
              <img src={meetingImg} alt="Training and capacity building" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 04</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Training & Capacity Building
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/80 mb-6 leading-relaxed">
                Employment alone is not enough. Long-term prosperity depends on giving people the skills, confidence, and opportunities to keep growing throughout their careers. We invest heavily in continuous learning — running over 30 structured training programs per year.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: ShieldCheck, title: "Workplace Professionalism", desc: "Quality standards, accountability, and occupational safety." },
                  { icon: Sun, title: "Climate-Smart Agriculture", desc: "Agroforestry, soil conservation, and sustainable land management." },
                  { icon: TrendingUp, title: "Financial Literacy", desc: "Record keeping, savings mobilization, and cooperative finance." },
                  { icon: BookOpen, title: "Cooperative Governance", desc: "Leadership training, democratic management, and cooperative law." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <item.icon className="w-5 h-5 text-secondary mb-2" />
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/70 text-sm italic">
                These investments turn seasonal work into a durable career — and a cooperative role into real leadership.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 5 — Women's Empowerment */}
      <section className="py-24 bg-card" id="empowerment">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 05</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Women's Economic Empowerment
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Empowering women is not one service among many — it is the foundational purpose of everything we do. With 90% women membership, Umucyo is structured to ensure that women are not merely participants in agriculture but skilled professionals, leaders, and beneficiaries of the value they create.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our empowerment programs go beyond employment to address the structural barriers that prevent women from accessing leadership roles, financial services, and career progression.
              </motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-10">
                {[
                  { title: "Leadership Development", desc: "Structured mentorship and training for women aspiring to cooperative leadership and management roles." },
                  { title: "Financial Inclusion", desc: "Savings groups (VSLAs), linkages to microfinance institutions, and mobile banking adoption." },
                  { title: "Youth Employment", desc: "Structured entry pathways and apprenticeships for young women into agricultural value chains." },
                  { title: "Skills Development", desc: "Vocational training in quality control, bookkeeping, and cooperative administration." },
                  { title: "Rights & Advocacy", desc: "Land rights education, gender-based violence awareness, and women's rights in cooperative governance." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[680px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={womenImg} alt="Women farmers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-5xl font-serif font-bold text-secondary mb-2">90%</div>
                <p className="text-white/90 font-semibold">of our cooperative is composed of women — across membership, leadership, and ownership.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 6 — Agroforestry & Climate Action */}
      <section className="py-24 bg-background" id="climate-action">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[540px] rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first"
            >
              <img src={rwandaImg} alt="Agroforestry and land stewardship" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 06</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Agroforestry & Climate Action
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Agriculture depends on healthy landscapes, and healthy landscapes depend on responsible stewardship. Across member farms, we integrate agroforestry — shade trees, soil-conserving cover crops, and sustainable land management — into everyday coffee and horticulture production.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Healthier soil and water systems aren't a side effect of our work; they are the foundation the next generation of jobs depends on.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
                {[
                  { icon: TreePine, title: "Agroforestry", desc: "Shade trees integrated into coffee and horticulture plots." },
                  { icon: Leaf, title: "Soil Conservation", desc: "Cover crops and composting to protect soil health." },
                  { icon: Sun, title: "Water Stewardship", desc: "Practices that protect the watersheds farms depend on." },
                  { icon: ShieldCheck, title: "Climate Adaptation", desc: "Training that prepares members for a changing climate." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-card rounded-2xl p-5 border border-border">
                    <item.icon className="w-5 h-5 text-secondary mb-2" />
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 7 — Environmental Stewardship, Rewarded */}
      <section className="py-24 bg-primary text-white" id="stewardship">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 07</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                Environmental Stewardship, Rewarded
              </motion.h2>
              <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-secondary px-3 py-1 rounded-full mb-6">
                Commitment in progress
              </motion.span>
              <motion.p variants={fadeUp} className="text-lg text-white/80 mb-6 leading-relaxed">
                Rwanda's women farmers are already among its most consistent environmental stewards — planting trees, conserving soil, protecting water sources — and rarely its most compensated.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed">
                We are actively designing a model to change that: rewarding the women who do this conservation work directly, rather than treating stewardship as an unpaid obligation layered on top of farming. It's a direction we're building toward, and one we're seeking the right partners to help us shape.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work — Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">How We Work</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
              An integrated, end-to-end approach.
            </h3>
            <p className="text-muted-foreground text-lg">
              Our services are not siloed — they work together to turn essential agricultural work into decent, lasting employment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: Users, title: "Organize", desc: "We recruit and organize women into a trained, accountable, professional workforce." },
              { step: "02", icon: BookOpen, title: "Train", desc: "Members build technical, financial, and leadership skills through continuous learning programs." },
              { step: "03", icon: Handshake, title: "Deploy", desc: "Trained teams are mobilized to support coffee sorting, horticulture, and agroforestry work." },
              { step: "04", icon: Award, title: "Reward", desc: "Members earn fair, formal pay — with stewardship work recognized as the next frontier." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-background rounded-3xl p-8 border border-border relative"
              >
                <div className="text-7xl font-serif font-bold text-primary/5 absolute top-4 right-6 leading-none select-none">{step.step}</div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-xl text-primary mb-3">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto bg-primary rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Work With Us</h2>
                <h3 className="text-4xl font-serif font-bold text-white mb-6">
                  Ready for a workforce you can rely on?
                </h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Whether you are an exporter, a processor, a development organization, or a government institution — we have services designed to create value for you while creating dignified jobs and income for our women and youth members.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full bg-secondary text-primary hover:bg-white h-12 px-8 font-semibold">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white hover:text-primary h-12 px-8 transition-colors">
                    <Link href="/our-model">See Our Model <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img src={womenImg} alt="Cooperative members" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
