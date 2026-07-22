import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Users, GraduationCap, Sprout, TreePine,
  Handshake, Ban
} from "lucide-react";

import coffeeImg from "@/assets/hero-coffee.webp";
import processingImg from "@/assets/coffee-processing.webp";
import hortImg from "@/assets/horticulture.webp";
import meetingImg from "@/assets/coop-meeting.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function OurModel() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={coffeeImg} alt="Women sorting coffee" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-semibold tracking-wide text-white">How We Create Value</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Model
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              We invest in people. By organizing women into a skilled, professional workforce and connecting them with meaningful opportunities across agricultural value chains, we help create value that is shared by businesses, communities, and development partners alike.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What we are / are not */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">A Different Role</h2>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
              A workforce and livelihoods partner — not a producer or exporter.
            </h3>
            <p className="text-muted-foreground text-lg">
              Rather than becoming another agricultural producer, processor, or exporter, Umucyo positioned itself as a workforce and livelihoods partner — an organization that strengthens existing agricultural value chains by investing in the people who sustain them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-bold text-foreground">What we don't do</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>We do not compete with coffee exporters.</li>
                <li>We do not replace cooperatives or washing stations.</li>
                <li>We do not buy, process, market, or export agricultural commodities.</li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-5 h-5 text-secondary" />
                <h4 className="font-bold text-foreground">What we do instead</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                We work alongside cooperatives, processors, exporters, and agricultural enterprises — organizing, training, and coordinating skilled women who contribute to quality, productivity, and responsible employment across the value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengthening Agricultural Businesses */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Model 01</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Strengthening Agricultural Businesses
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Agricultural businesses thrive when they can rely on skilled people. Coffee processors require meticulous sorting and grading to maintain quality standards. Horticultural enterprises depend on disciplined field operations and consistent production practices. Seasonal peaks often demand organized labour that can be mobilized efficiently without compromising quality.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Umucyo helps meet this need by developing a workforce that is trained, organized, and accountable — making quality labour more accessible to the businesses that need it.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["Coffee sorting & grading", "Field operations support", "Seasonal workforce mobilization", "Trained & accountable"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={processingImg} alt="Women sorting and grading coffee" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investing in Skills */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl order-last lg:order-first"
            >
              <img src={meetingImg} alt="Training and capacity building" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Model 02</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Investing in Skills, Not Just Jobs
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Employment alone is not enough. Long-term prosperity depends on giving people the skills, confidence, and opportunities to keep growing throughout their careers. Capacity development is embedded throughout our model.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {[
                  "Workplace professionalism and quality standards",
                  "Financial literacy and cooperative leadership",
                  "Climate-smart agriculture practices",
                  "Occupational safety and responsible environmental practices",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diversifying Rural Livelihoods */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">Model 03</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Diversifying Rural Livelihoods
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Agricultural households are often vulnerable when income depends on a single crop or harvest season. Umucyo encourages diversified livelihood opportunities that allow members to generate income throughout the year — alongside coffee, members engage in horticulture and other agricultural activities that strengthen household resilience and improve food security.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                Diversification does more than increase income. It enables families to plan for the future with greater confidence while reducing exposure to seasonal fluctuations.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={hortImg} alt="Horticulture livelihoods" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Climate and Livelihoods */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <TreePine className="w-5 h-5 text-secondary" />
              <span className="text-sm font-bold tracking-widest text-secondary uppercase">Model 04</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Climate and Livelihoods Go Hand in Hand
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              Agriculture depends on healthy landscapes. Healthy landscapes depend on responsible stewardship. Across Rwanda, women already play a central role in protecting soils, planting trees, managing water resources, and adopting sustainable farming practices — work that benefits entire communities, yet often goes unrecognized as economic contribution.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We believe environmental stewardship should be viewed as productive work that supports resilient agricultural systems. By promoting agroforestry, sustainable land management, and climate-smart agriculture, we help strengthen the natural resources upon which farming communities and agricultural businesses depend — and we are exploring partnership models that recognize and reward women for the environmental value they create through responsible land stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Creating Shared Value / CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Creating Shared Value</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              When women succeed, agricultural businesses become stronger.
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              We measure our success not by the volume of products we sell, but by the opportunities we create, the partnerships we strengthen, and the lasting impact we generate for people, businesses, and the environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-10 rounded-full bg-secondary text-primary hover:bg-white font-semibold text-lg">
                <Link href="/contact">Partner With Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-primary text-primary hover:bg-primary hover:text-white text-lg transition-colors">
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
