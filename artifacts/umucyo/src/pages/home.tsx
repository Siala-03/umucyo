import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Globe2 } from "lucide-react";

import heroImg from "@/assets/hero-coffee.png";
import womenImg from "@/assets/women-farmers.png";
import rwandaImg from "@/assets/rwanda-landscape.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Rwandan coffee fields" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-white">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-sm font-semibold tracking-wide text-white">Rwanda's Premium Cooperative</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-white">
              Cultivating Quality.<br />
              <span className="text-secondary italic">Empowering Women.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light">
              We are a 90% women-led agricultural cooperative driving sustainable growth in premium Arabica coffee and horticulture across Rwanda's fertile highlands.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-secondary text-primary hover:bg-white transition-colors">
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/30 text-primary bg-white hover:bg-transparent hover:text-white transition-colors">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-card relative z-20 -mt-10 mx-6 lg:mx-12 rounded-3xl shadow-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { label: "Women Leadership", value: "90%", icon: Users },
              { label: "Established", value: "2022", icon: TrendingUp },
              { label: "Core Sectors", value: "Coffee & Agri", icon: CheckCircle2 },
              { label: "Global Reach", value: "Export Ready", icon: Globe2 },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="pt-8 md:pt-0 md:px-8 first:pl-0 last:pr-0 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <stat.icon className="w-10 h-10 text-secondary mb-4" />
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Snapshot */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Mission</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Rooted in Rwandan soil. Driven by sustainable impact.
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Umucyo Women Cooperative was founded on the belief that empowering women in agriculture transforms communities. By focusing on premium Arabica coffee and high-value horticulture, we create sustainable livelihoods.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Promoting climate-smart agricultural practices",
                  "Facilitating direct market linkages for fair pricing",
                  "Building capacity through continuous farmer training"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="px-0 text-primary hover:text-secondary text-lg group">
                <Link href="/about" className="flex items-center gap-2">
                  Read our full story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={womenImg} alt="Rwandan women cooperative members" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">What We Do</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Excellence across the agricultural value chain.
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="outline" className="rounded-full bg-white text-primary border-transparent hover:bg-secondary hover:text-primary transition-colors">
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Premium Coffee Production",
                desc: "Cultivating high-quality Arabica with full traceability and good agricultural practices.",
                img: heroImg
              },
              {
                title: "Horticulture Excellence",
                desc: "Year-round production of fruits and vegetables meeting international standards.",
                img: rwandaImg
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-2xl font-serif font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-white/80 line-clamp-2">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
