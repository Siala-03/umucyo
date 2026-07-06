import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Coffee, Leaf, Sprout, Lightbulb, Users,
  BarChart3, Globe, CheckCircle2, Clock, Award, TrendingUp,
  Package, FlaskConical, Droplets, Sun, BookOpen, ShieldCheck
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
          <img src={coffeeImg} alt="Coffee production" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
              From seed to cup, from field to market — Umucyo Women Cooperative delivers integrated agricultural and business development services that create lasting value for our members and partners.
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
              { value: "5+", label: "Export Markets Served" },
              { value: "250+", label: "Farmers Supported" },
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

      {/* Service 1 — Coffee Production */}
      <section className="py-24 bg-background" id="coffee-production">
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
                Coffee Production & Sourcing
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We work with smallholder coffee farmers to produce and source high-quality Arabica coffee grown in Rwanda's fertile highlands at 1,500–2,000 metres above sea level. Our cooperative promotes rigorous Good Agricultural Practices (GAP) that protect soil health, conserve water, and maximize yield quality.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each lot is documented with full traceability — from the individual farmer and their plot, through harvesting and processing, to the export shipment — giving international buyers the assurance they need to meet their sourcing standards.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3 mb-10">
                {[
                  "Certified seed supply and seedling distribution to members",
                  "Soil fertility management and composting programs",
                  "Shade-grown and climate-adapted variety selection",
                  "Integrated pest and disease management (IPM)",
                  "Plot-level GPS mapping and yield tracking",
                  "Pre-harvest quality checks and cherry ripeness management",
                  "Full lot-level traceability from farmer to export",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["Arabica", "Grade A", "Traceable by lot", "GAP Compliant", "1,500–2,000m"].map(tag => (
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
              <img src={coffeeImg} alt="Coffee production" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <p className="text-white font-serif italic text-lg">
                  "Our Arabica consistently cups between 82–87 on the SCA scale — a direct result of altitude, variety selection, and the care our farmers bring to every cherry."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2 — Coffee Processing */}
      <section className="py-24 bg-card" id="coffee-processing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[580px] rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first"
            >
              <img src={processingImg} alt="Coffee processing" className="w-full h-full object-cover" />
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
                Coffee Processing & Value Addition
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Raw coffee cherries carry only a fraction of their eventual value. Through our cooperative's processing operations, we transform fresh cherry into export-grade green coffee — and increasingly into finished roasted and packaged products for domestic and regional markets.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Value addition at cooperative level means farmers receive a greater share of the final price. Instead of selling unprocessed cherry at the farm gate, members benefit from processing premiums that can double or triple their income per kilogram.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Droplets, label: "Wet Processing", desc: "Fully washed method for bright, clean cup profiles" },
                  { icon: Sun, label: "Natural/Dry Process", desc: "Sun-dried naturals for fruited, complex flavors" },
                  { icon: Package, label: "Sorting & Grading", desc: "Hand-sorting and density separation to Grade A" },
                  { icon: Coffee, label: "Roasting & Packaging", desc: "Small-batch roasting for domestic and niche export" },
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
                  <Link href="/products">View Product Specifications <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 3 — Horticulture */}
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
                Horticulture Production
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Alongside coffee, our members cultivate a diverse portfolio of high-value horticultural crops — from export-grade French beans and courgettes to passion fruit, avocado, tomatoes, and chili peppers. Our horticulture program ensures year-round income diversification for member households.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Production follows Good Agricultural Practices (GAP) and GlobalGAP-aligned standards, ensuring that fresh produce meets the food safety and quality requirements of domestic supermarkets, regional markets, and European importers.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3 mb-10">
                {[
                  "Year-round production planning and crop scheduling",
                  "GAP and GlobalGAP-aligned farming protocols",
                  "Post-harvest handling: cooling, cleaning, grading, packing",
                  "Aggregation of produce from multiple member farms",
                  "Cold chain management from farm to market",
                  "Food safety audits and traceability documentation",
                  "Market-linkage to supermarkets, exporters, and regional buyers",
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
              <img src={hortImg} alt="Horticulture production" className="w-full h-full object-cover" />
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
              <img src={meetingImg} alt="Farmer training" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 04</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Farmer Training & Capacity Building
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/80 mb-6 leading-relaxed">
                Productive, profitable, and resilient farmers are the foundation of Umucyo's cooperative model. We invest heavily in continuous learning — running over 30 structured training programs per year that cover every dimension of modern agribusiness.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Leaf, title: "Modern Agronomy", desc: "Soil management, irrigation, integrated pest management, and variety selection." },
                  { icon: Sun, title: "Climate-Smart Agriculture", desc: "Drought-resistant varieties, water harvesting, and carbon sequestration practices." },
                  { icon: Package, title: "Post-Harvest Handling", desc: "Reducing losses through proper storage, grading, and cold chain management." },
                  { icon: TrendingUp, title: "Financial Literacy", desc: "Record keeping, savings mobilization, credit access, and cooperative finance." },
                  { icon: BookOpen, title: "Cooperative Governance", desc: "Leadership training, democratic management, and cooperative law." },
                  { icon: Award, title: "Agribusiness Development", desc: "Business planning, market analysis, and value chain participation." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <item.icon className="w-5 h-5 text-secondary mb-2" />
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/70 text-sm italic">
                Training is delivered through field demonstrations, group workshops, farm visits, and partnerships with RAB extension officers.
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
                Empowering women is not one service among many — it is the foundational purpose of everything we do. With 90% women membership, Umucyo is structured to ensure that women are not merely participants in agriculture but owners, leaders, and beneficiaries of the value they create.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our empowerment programs go beyond farming to address the structural barriers that prevent women from accessing leadership roles, financial services, and business opportunities.
              </motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-10">
                {[
                  { title: "Leadership Development", desc: "Structured mentorship and training for women aspiring to cooperative leadership and management roles." },
                  { title: "Entrepreneurship Programs", desc: "Business planning support, market access facilitation, and incubation for women-led agribusinesses." },
                  { title: "Financial Inclusion", desc: "Savings groups (VSLAs), linkages to microfinance institutions, and mobile banking adoption." },
                  { title: "Youth Employment", desc: "Internships, apprenticeships, and structured entry pathways for young women into the agricultural sector." },
                  { title: "Skills Development", desc: "Vocational training in food processing, quality control, bookkeeping, and cooperative administration." },
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

      {/* Service 6 — Extension */}
      <section className="py-24 bg-background" id="extension">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[540px] rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first"
            >
              <img src={rwandaImg} alt="Agricultural extension" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 06</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Agricultural Extension Services
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our extension services bridge the gap between agricultural research and on-farm application. Working in partnership with RAB (Rwanda Agriculture and Animal Resources Development Board), we deploy field extension officers who visit member farms regularly to provide hands-on technical support.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Extension services ensure that improved technologies, new varieties, and best practices developed at research stations are adopted rapidly and correctly by our member farmers.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: "Farm Visits", desc: "Regular on-farm visits and individual advisory sessions." },
                  { icon: Lightbulb, title: "Demonstrations", desc: "Field demonstrations of new techniques and technologies." },
                  { icon: BookOpen, title: "Technology Access", desc: "Access to improved seeds, inputs, and equipment." },
                  { icon: TrendingUp, title: "Productivity Monitoring", desc: "Yield tracking and data collection per plot." },
                  { icon: Leaf, title: "Env. Compliance", desc: "Environmental audits and sustainable farming guidance." },
                  { icon: Clock, title: "Seasonal Planning", desc: "Crop calendars, input planning, and risk management." },
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

      {/* Service 7 — Market Linkages */}
      <section className="py-24 bg-primary text-white" id="market-linkages">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Service 07</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Market Linkages & Export Facilitation
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/80 mb-6 leading-relaxed">
                Access to profitable, stable markets is the critical final step in value chain development. Umucyo actively connects member farmers with verified domestic and international buyers — ensuring that quality produce finds the buyers who will pay fair prices for it.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-white/80 mb-8 leading-relaxed">
                Our market linkage services include export compliance, contract negotiation support, quality documentation, and long-term buyer relationship management. We participate in international trade fairs and agribusiness forums to build Umucyo's visibility as a reliable supply partner.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3 mb-10">
                {[
                  "NAEB export license and full regulatory compliance",
                  "International buyer identification and qualification",
                  "Contract facilitation and supply agreement negotiation",
                  "Quality documentation, phytosanitary certificates, and COOs",
                  "Export logistics coordination: FOB, CIF, and DDP terms",
                  "Domestic supermarket and hospitality sector linkages",
                  "Participation in trade fairs and buyer showcases",
                  "Long-term commercial partnership development",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-white/85">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-secondary text-primary hover:bg-white h-12 px-8 font-semibold">
                  <Link href="/products">View Our Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white hover:text-primary h-12 px-8 transition-colors">
                  <Link href="/contact">Start a Trade Inquiry</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Countries Reached", value: "5+", sub: "Export markets for coffee" },
                { label: "Export Ready", value: "NAEB", sub: "Licensed & regulated exporter" },
                { label: "Market Types", value: "Local & Intl", sub: "Domestic, regional, and global" },
                { label: "Supply Terms", value: "FOB / CIF", sub: "Flexible Incoterms for buyers" },
                { label: "MOQ", value: "1 Bag", sub: "Minimum 60kg, samples available" },
                { label: "Buyer Types", value: "All", sub: "Roasters, importers, retailers" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-2xl font-serif font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-white/50 text-xs">{stat.sub}</div>
                </motion.div>
              ))}
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
              Our services are not siloed — they work together across the full agricultural value chain to create compounding impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: Leaf, title: "Organize & Train", desc: "We begin by building the capacity of our member farmers — providing training, inputs, and technical advisory before the season starts." },
              { step: "02", icon: Sprout, title: "Produce & Process", desc: "Members farm following GAP standards while our extension officers monitor quality at every growth stage, from flowering to harvest." },
              { step: "03", icon: Award, title: "Aggregate & Grade", desc: "Produce is aggregated at collection centers, processed, sorted, graded, and documented for quality assurance and traceability." },
              { step: "04", icon: Globe, title: "Connect to Market", desc: "Graded, compliant produce is linked to verified buyers — locally, regionally, or internationally — at prices that reward quality." },
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
                  Ready to source premium Rwandan produce?
                </h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Whether you are an international buyer, a development organization, or a government institution — we have services designed to create value for you and our farmer members.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full bg-secondary text-primary hover:bg-white h-12 px-8 font-semibold">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white hover:text-primary h-12 px-8 transition-colors">
                    <Link href="/products">View Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
