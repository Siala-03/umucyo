import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Leaf, Sprout, Lightbulb, Users, BarChart3, Globe } from "lucide-react";

import coffeeImg from "@/assets/hero-coffee.png";
import hortImg from "@/assets/horticulture.png";

const services = [
  {
    icon: Coffee,
    title: "Coffee Production and Sourcing",
    desc: "Cultivation of high-quality Arabica utilizing Good Agricultural Practices (GAP). We ensure complete traceability from field to cup.",
    img: coffeeImg
  },
  {
    icon: Leaf,
    title: "Coffee Processing and Value Addition",
    desc: "Comprehensive processing including washing, meticulous sorting, grading, roasting, grinding, and professional packaging.",
    img: coffeeImg
  },
  {
    icon: Sprout,
    title: "Horticulture Production",
    desc: "Year-round production of premium fruits and vegetables meeting stringent international safety and quality standards.",
    img: hortImg
  },
  {
    icon: Lightbulb,
    title: "Farmer Training & Capacity Building",
    desc: "Equipping our members with modern farming techniques, climate-smart agriculture strategies, and essential financial literacy.",
    img: hortImg
  },
  {
    icon: Users,
    title: "Women's Economic Empowerment",
    desc: "Dedicated programs fostering female leadership, entrepreneurship, and comprehensive skills development in rural areas.",
    img: coffeeImg
  },
  {
    icon: BarChart3,
    title: "Agricultural Extension Services",
    desc: "Providing hands-on field visits, practical demonstrations, and advisory on improved agricultural technologies.",
    img: hortImg
  },
  {
    icon: Globe,
    title: "Market Linkages & Export",
    desc: "Bridging the gap between our farmers and international buyers while navigating complex export compliance requirements.",
    img: coffeeImg
  }
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-40 pb-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Our Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 font-light"
          >
            Delivering excellence across the entire agricultural value chain—from resilient farming practices to premium export readiness.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`group flex flex-col md:flex-row bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 ${i === services.length - 1 && services.length % 2 !== 0 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <service.icon className="w-10 h-10 text-secondary mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Looking for premium produce?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            We are actively expanding our network of international buyers and roasting partners. Contact us to request samples or discuss supply agreements.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg">
            <Link href="/contact" className="flex items-center gap-2">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
