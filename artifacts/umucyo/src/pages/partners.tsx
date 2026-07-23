import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  CheckCircle2, ArrowRight, Handshake, Globe2, Users,
  TrendingUp, Shield, Leaf, Building2, FlaskConical,
  BookOpen, Target, Phone, Mail
} from "lucide-react";

import coffeeImg from "@/assets/hero-coffee.webp";
import womenImg from "@/assets/women-farmers.webp";
import rwandaImg from "@/assets/rwanda-landscape.webp";
import meetingImg from "@/assets/coop-meeting.webp";
import hortImg from "@/assets/horticulture.webp";

import logoMinagri from "@/assets/logo-minagri.webp";
import logoRab from "@/assets/logo-rab.webp";
import logoMinema from "@/assets/logo-minema.webp";
import logoNaeb from "@/assets/logo-naeb.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const partners = [
  {
    acronym: "MINAGRI",
    name: "Ministry of Agriculture and Animal Resources",
    color: "bg-green-700",
    mandate: "Rwanda's lead ministry for agricultural policy, rural employment, and agricultural sector transformation.",
    collaboration: [
      "Policy alignment with Rwanda's Agricultural Transformation Strategy (PSTA4)",
      "Alignment with national priorities on decent rural employment and women's economic participation",
      "Participation in government-led value chain development programs for coffee and horticulture",
      "Support for cooperative formalization and legal compliance under cooperative law",
      "Reporting and data sharing on workforce, employment, and livelihood outcomes",
    ],
    impact: "MINAGRI's support provides Umucyo with the policy framework and institutional backing needed to scale a workforce model that creates decent jobs across the agricultural sector.",
    img: coffeeImg,
    logo: logoMinagri,
  },
  {
    acronym: "RAB",
    name: "Rwanda Agriculture and Animal Resources Development Board",
    color: "bg-emerald-700",
    mandate: "Rwanda's technical arm for agricultural research, improved technology development, and extension services delivery.",
    collaboration: [
      "Technical curriculum and extension officer support for Umucyo's training programs",
      "Climate-smart agriculture and agroforestry technique transfer",
      "Soil health, water stewardship, and land management guidance",
      "Integrated pest and disease management (IPM) technical training",
      "Quality standards training for coffee sorting and grading teams",
    ],
    impact: "RAB's technical partnership equips our workforce with the latest agricultural research and hands-on advisory — strengthening the skills members bring to every job.",
    img: hortImg,
    logo: logoRab,
  },
  {
    acronym: "MINEMA",
    name: "Ministry in Charge of Emergency Management",
    color: "bg-teal-700",
    mandate: "The ministry responsible for disaster risk reduction, environmental resilience, and climate adaptation in Rwanda.",
    collaboration: [
      "Climate risk assessment and adaptation training for member communities",
      "Co-design partner for our environmental stewardship incentive model",
      "Environmental conservation programs including reforestation and soil erosion control",
      "Access to early warning systems for drought, flooding, and climate events",
      "Community resilience building integrated with our workforce programs",
    ],
    impact: "In a country where climate variability poses real risks to agricultural livelihoods, MINEMA's partnership helps ensure our members are prepared, protected, and equipped to adapt — and paves the way toward rewarding their stewardship work.",
    img: rwandaImg,
    logo: logoMinema,
  },
  {
    acronym: "NAEB",
    name: "National Agricultural Export Development Board",
    color: "bg-primary",
    mandate: "Rwanda's export promotion and trade facilitation agency for agricultural products, particularly coffee and horticulture.",
    collaboration: [
      "Host institution support and institutional backing",
      "Connections to exporters and processors who need trained sorting and grading teams",
      "Quality and standards awareness aligned with international market requirements",
      "Visibility within Rwanda's export ecosystem as a trusted workforce partner",
      "Capacity building on quality compliance and traceability documentation",
    ],
    impact: "As our host institution, NAEB connects Umucyo's trained workforce to the exporters and processors who need it — without Umucyo ever needing to become an exporter itself.",
    img: meetingImg,
    logo: logoNaeb,
  },
];

const partnershipTypes = [
  {
    icon: Building2,
    title: "Exporters & Agricultural Businesses",
    desc: "Coffee processors, horticultural enterprises, and licensed exporters seeking a dependable, organized, and professionally trained workforce for labor-intensive operations.",
    offers: ["Coffee sorting & grading teams", "Horticulture field operations support", "Seasonal workforce mobilization", "Trained, accountable teams"],
  },
  {
    icon: Shield,
    title: "Government Institutions",
    desc: "Ministries and public institutions advancing decent work, women's economic participation, youth employment, and climate resilience as national development priorities.",
    offers: ["Rural employment strategy alignment", "Women's economic empowerment programs", "Climate & agroforestry collaboration", "Workforce outcome data sharing"],
  },
  {
    icon: Globe2,
    title: "Development Partners",
    desc: "NGOs, foundations, and multilateral agencies looking to co-implement programs on workforce development, gender equality, or climate resilience in Rwanda.",
    offers: ["Program co-implementation", "Technical assistance partnerships", "Grant-funded project delivery", "Monitoring & evaluation collaboration"],
  },
  {
    icon: TrendingUp,
    title: "Donors & Foundations",
    desc: "Impact-focused investors and philanthropic donors interested in financing workforce development, environmental stewardship incentives, and community resilience at scale.",
    offers: ["Decent-work program co-funding", "Stewardship incentive design", "Outcome-based funding programs", "SDG-aligned capital deployment"],
  },
  {
    icon: Leaf,
    title: "Corporate Sustainability & ESG Partners",
    desc: "Companies seeking to support inclusive workforce development, gender equality, and climate-smart agriculture within their supply chains.",
    offers: ["Responsible supply chain workforce", "Gender-equality program sponsorship", "Climate-smart agriculture investment", "Shared social & environmental value"],
  },
];

export default function Partners() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative h-[68vh] min-h-[540px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={meetingImg} alt="Partnership meeting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-semibold tracking-wide text-white">Institutional & Development Partnerships</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Partners
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Sustainable transformation in Rwanda's agricultural sector requires the alignment of government policy, technical expertise, market access, and community leadership. Umucyo works at the intersection of all four.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Institutional Logo Strip */}
      <section className="py-14 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-xs font-bold tracking-widest text-secondary uppercase mb-8">Trusted Institutional Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.acronym} logo`}
                  className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partnerships Matter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Partnership Philosophy</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                No cooperative transforms a sector alone.
              </motion.h3>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Umucyo Women Cooperative operates within a carefully cultivated ecosystem of institutional partners. We believe that the most durable agricultural transformation happens when cooperatives, government, research institutions, and markets work in aligned coordination — each bringing what the others cannot.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our partnerships are not symbolic. They translate directly into better training, better compliance, and better-paid work for our members. Every relationship we maintain is chosen for its practical, measurable contribution to the livelihoods of our members.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {[
                  "Policy alignment with Rwanda's national agricultural agenda",
                  "Technical support from Rwanda's leading research institution",
                  "Workforce connections to exporters, facilitated by Rwanda's trade promotion authority",
                  "Climate resilience through emergency management collaboration",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={womenImg} alt="Cooperative members" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="font-serif italic text-xl mb-2">
                  "Growth in isolation is temporary. Growth through collaboration is sustainable."
                </div>
                <div className="text-white/60 text-sm">— Umucyo Partnership Ethos</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Individual Partner Deep Dives */}
      {partners.map((partner, i) => (
        <section
          key={i}
          className={`py-24 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
          id={partner.acronym.toLowerCase()}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={stagger}
                className={i % 2 !== 0 ? "lg:order-last" : ""}
              >
                <motion.div variants={fadeUp} className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-4 ${partner.color}`}>
                  Institutional Partner
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-2">
                  <div className="bg-white rounded-2xl p-3 shadow-sm shrink-0">
                    <img src={partner.logo} alt={`${partner.acronym} logo`} className="h-14 w-auto object-contain" />
                  </div>
                  <span className="text-4xl font-serif font-bold" style={{ color: "hsl(var(--primary))" }}>
                    {partner.acronym}
                  </span>
                </motion.div>
                <motion.h3 variants={fadeUp} className="text-2xl font-bold text-foreground mb-2">
                  {partner.name}
                </motion.h3>
                <motion.p variants={fadeUp} className="text-muted-foreground italic mb-6 pb-6 border-b border-border">
                  {partner.mandate}
                </motion.p>
                <motion.h4 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                  Our Collaboration
                </motion.h4>
                <motion.div variants={stagger} className="space-y-3 mb-8">
                  {partner.collaboration.map((item, j) => (
                    <motion.div key={j} variants={fadeUp} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5">
                  <h5 className="font-bold text-primary text-sm mb-2">Partnership Impact</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">{partner.impact}</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative h-[540px] rounded-3xl overflow-hidden shadow-xl ${i % 2 !== 0 ? "lg:order-first" : ""}`}
              >
                <img src={partner.img} alt={partner.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 bg-white rounded-xl p-2 shadow-sm">
                  <img src={partner.logo} alt={`${partner.acronym} logo`} className="h-10 w-auto object-contain" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-4xl font-serif font-bold text-white mb-1">{partner.acronym}</div>
                  <div className="text-white/70 text-sm">{partner.name}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Partnership Opportunities */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">New Partnerships</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Partnership opportunities we are actively seeking.
            </h3>
            <p className="text-white/80 text-lg">
              Umucyo is open to engagement with organizations that share our commitment to decent work, women's empowerment, and environmental stewardship in Rwanda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
                data-testid={`card-partnership-type-${i}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                  <type.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-bold text-xl text-white mb-3">{type.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{type.desc}</p>
                <div className="space-y-2">
                  {type.offers.map((offer, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="text-white/80 text-sm">{offer}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Bring to Partnerships */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">What We Offer</h2>
            <h3 className="text-4xl font-serif font-bold text-primary">
              What Umucyo brings to every partnership.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "2,000+ Organized Women", desc: "A structured, formally registered cooperative with audited governance and an active, engaged membership base." },
              { icon: Shield, title: "Regulatory Compliance", desc: "Registered cooperative compliant with Rwandan cooperative law, food safety standards, and workplace safety standards." },
              { icon: Globe2, title: "Workforce Network", desc: "Established relationships with processors, exporters, and cooperatives that need trained, reliable teams." },
              { icon: Leaf, title: "Sustainable Practices", desc: "Climate-smart agriculture, agroforestry, and a commitment to long-term land health." },
              { icon: BookOpen, title: "Training Capacity", desc: "In-house capability to deliver structured workforce training in professionalism, finance, and cooperative management." },
              { icon: Target, title: "Measurable Impact", desc: "A commitment to data collection, outcome measurement, and transparent reporting for accountability." },
              { icon: TrendingUp, title: "Growth Trajectory", desc: "An active pipeline toward 10,000 decent jobs by 2030, with expanding training and stewardship programs." },
              { icon: Handshake, title: "Strong Institutional Network", desc: "Embedded relationships with MINAGRI, RAB, MINEMA, and NAEB that facilitate rapid program implementation." },
              { icon: FlaskConical, title: "Quality Traceability", desc: "Full documentation from individual worker to finished lot, supporting our partners' quality and export certifications." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <Handshake className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Interested in partnering with Umucyo?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                We welcome dialogue with agricultural businesses, government institutions, development partners, donors, and corporate sustainability teams. Let us explore how we can create value together for Rwanda's women and communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <Button asChild size="lg" className="h-14 px-10 rounded-full bg-secondary text-primary hover:bg-white font-semibold text-lg">
                  <Link href="/contact">Start a Conversation <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 justify-center text-white/70">
                <a href="mailto:uwomencooperative@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> uwomencooperative@gmail.com
                </a>
                <a href="tel:+250783153232" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> +250 783 153 232
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
