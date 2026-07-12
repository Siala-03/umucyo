import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Package, Thermometer, Droplets,
  Mountain, Calendar
} from "lucide-react";
import coffeeImg from "@/assets/hero-coffee.webp";
import processingImg from "@/assets/coffee-processing.webp";
import hortImg from "@/assets/horticulture.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const coffeeSpecs = [
  { label: "Species", value: "Arabica (Coffea arabica)" },
  { label: "Varieties", value: "Bourbon, Jackson, Mayaguez" },
  { label: "Altitude", value: "1,500 – 2,000 m above sea level" },
  { label: "Screen Size", value: "14 – 18 (fully washed grades)" },
  { label: "Moisture Content", value: "≤ 11% (export grade)" },
  { label: "Processing", value: "Fully Washed / Natural" },
  { label: "Defects", value: "≤ 5 full defects per 300g (Grade A)" },
  { label: "Cup Score", value: "82 – 87 SCA points" },
  { label: "Flavor Notes", value: "Citrus, red berry, floral, caramel" },
  { label: "Minimum Order", value: "1 x 60kg bag (samples available)" },
  { label: "Packaging", value: "60 kg jute bags / GrainPro lined" },
  { label: "Market Access", value: "Delivered via our NAEB-licensed export partners" },
];

const harvestCalendar = [
  { month: "Jan", activity: "Main crop cherry ripening", level: 3 },
  { month: "Feb", activity: "Main crop peak harvest", level: 5 },
  { month: "Mar", activity: "Main crop harvest & processing", level: 5 },
  { month: "Apr", activity: "Processing & milling", level: 4 },
  { month: "May", activity: "Export preparation", level: 4 },
  { month: "Jun", activity: "Export shipments", level: 3 },
  { month: "Jul", activity: "Off season", level: 1 },
  { month: "Aug", activity: "Off season / land prep", level: 1 },
  { month: "Sep", activity: "Fly crop flowering", level: 2 },
  { month: "Oct", activity: "Fly crop development", level: 2 },
  { month: "Nov", activity: "Fly crop cherry ripening", level: 3 },
  { month: "Dec", activity: "Fly crop harvest begins", level: 3 },
];

const hortProducts = [
  { name: "Tomatoes", season: "Year-round", grade: "Grade A & B", market: "Local & Regional" },
  { name: "French Beans", season: "Year-round", grade: "Export Grade", market: "Export" },
  { name: "Chili Peppers", season: "Biannual", grade: "Grade A", market: "Local & Export" },
  { name: "Courgettes / Zucchini", season: "Year-round", grade: "Export Grade", market: "Export" },
  { name: "Passion Fruit", season: "Biannual", grade: "Grade A", market: "Local & Export" },
  { name: "Avocado", season: "Seasonal", grade: "Hass A", market: "Export" },
  { name: "Eggplant / Aubergine", season: "Year-round", grade: "Grade A & B", market: "Local & Regional" },
  { name: "Onions", season: "Biannual", grade: "Grade A", market: "Local & Regional" },
];

export default function Products() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={coffeeImg} alt="Rwandan coffee fields" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-semibold tracking-wide text-white">For Buyers & Exporters</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Products
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Premium Rwandan Arabica coffee and high-value horticultural produce — traceable, quality-assured, and export-ready.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="h-12 px-8 rounded-full bg-secondary text-primary hover:bg-white font-semibold">
                <a href="mailto:uwomencooperative@gmail.com?subject=Sample Request — Umucyo Cooperative">
                  Request a Sample
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/40 text-white hover:bg-white hover:text-primary transition-colors">
                <Link href="/contact">Sourcing Inquiry</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coffee Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Premium Arabica</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Rwanda Highland Coffee
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Grown at elevations of 1,500–2,000 metres in Rwanda's fertile volcanic highlands, our Arabica coffee develops a distinctive complexity — bright citrus acidity, floral aromatics, and a clean, lingering finish that scores consistently between 82–87 on the SCA scale.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every lot is processed at our cooperative's washing station and is traceable from individual farmer to export shipment. We supply green (unroasted) coffee and can arrange roasted/packaged coffee for select markets.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["Fully Washed", "Natural Process", "Export Grade", "Traceable by Lot", "SCA 82–87"].map((tag) => (
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
              <img src={processingImg} alt="Coffee processing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-3">
                  {[
                    { icon: Mountain, label: "1,500–2,000m altitude" },
                    { icon: Droplets, label: "Fully Washed" },
                    { icon: Thermometer, label: "≤11% moisture" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                      <item.icon className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-white text-xs font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coffee Specs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Technical Specifications</h2>
            <h3 className="text-4xl font-serif font-bold text-primary">Coffee Product Sheet</h3>
          </div>
          <div className="max-w-4xl mx-auto bg-background border border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-primary px-8 py-6">
              <h4 className="text-white font-serif font-bold text-xl">Rwanda Arabica — Fully Washed, Grade A</h4>
              <p className="text-white/70 text-sm">Umucyo Women Cooperative — Kigali, Rwanda</p>
            </div>
            <div className="divide-y divide-border">
              {coffeeSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="grid grid-cols-2 px-8 py-4 hover:bg-muted/40 transition-colors"
                  data-testid={`row-spec-${i}`}
                >
                  <span className="text-muted-foreground font-medium text-sm">{spec.label}</span>
                  <span className="font-semibold text-foreground text-sm">{spec.value}</span>
                </motion.div>
              ))}
            </div>
            <div className="px-8 py-6 bg-primary/5 border-t border-border flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <a href="mailto:uwomencooperative@gmail.com?subject=Coffee Inquiry — Umucyo Cooperative">
                  <Package className="mr-2 w-4 h-4" /> Inquire About Coffee
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="mailto:uwomencooperative@gmail.com?subject=Sample Request — Umucyo Coffee">
                  Request a Sample
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest Calendar */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Availability Planning</h2>
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Coffee Harvest Calendar</h3>
            <p className="text-muted-foreground text-lg">Rwanda's main crop runs February–May. A smaller fly crop is available October–January.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 max-w-5xl mx-auto">
            {harvestCalendar.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2"
                data-testid={`calendar-month-${i}`}
              >
                <span className="text-xs font-bold text-muted-foreground uppercase">{m.month}</span>
                <div className="w-full rounded-lg overflow-hidden h-20 flex flex-col-reverse">
                  <div
                    className="w-full bg-primary rounded-lg transition-all"
                    style={{ height: `${(m.level / 5) * 100}%` }}
                  />
                </div>
                <div className={`w-2 h-2 rounded-full ${m.level >= 4 ? "bg-secondary" : m.level >= 2 ? "bg-primary/50" : "bg-muted"}`} />
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-secondary" /><span className="text-sm text-muted-foreground">Peak harvest</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-primary/50" /><span className="text-sm text-muted-foreground">Active season</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-muted" /><span className="text-sm text-muted-foreground">Off season</span></div>
          </div>
        </div>
      </section>

      {/* Horticulture */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl order-last lg:order-first"
            >
              <img src={hortImg} alt="Horticulture crops" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Fresh Produce</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl font-serif font-bold text-primary mb-6">
                Horticultural Products
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our members cultivate a diverse range of fruits and vegetables using sustainable, GAP-compliant farming practices. We supply both local and regional markets, with selected crops meeting export requirements for European and regional buyers.
              </motion.p>
              <motion.div variants={fadeUp}>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="grid grid-cols-4 bg-primary text-white text-xs font-bold uppercase tracking-wide px-4 py-3">
                    <span>Product</span>
                    <span>Season</span>
                    <span>Grade</span>
                    <span>Market</span>
                  </div>
                  <div className="divide-y divide-border">
                    {hortProducts.map((p, i) => (
                      <div key={i} className="grid grid-cols-4 px-4 py-3 text-sm hover:bg-muted/30 transition-colors" data-testid={`row-hort-${i}`}>
                        <span className="font-semibold text-foreground">{p.name}</span>
                        <span className="text-muted-foreground">{p.season}</span>
                        <span className="text-muted-foreground">{p.grade}</span>
                        <span className={`font-medium ${p.market === "Export" ? "text-secondary" : "text-muted-foreground"}`}>{p.market}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90 h-12 px-8">
                  <a href="mailto:uwomencooperative@gmail.com?subject=Horticulture Inquiry — Umucyo Cooperative">
                    Inquire About Produce <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trade CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Work With Our Cooperative</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Ready to source premium Rwandan produce?
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Contact our team to discuss volumes, quality specifications, and sample requests. We work alongside NAEB-licensed exporters and trade partners to connect importers, roasters, wholesalers, and retail buyers worldwide with produce grown by our women and youth members.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="h-14 px-10 rounded-full bg-secondary text-primary hover:bg-white text-lg font-semibold">
                  <a href="mailto:uwomencooperative@gmail.com?subject=Sourcing Inquiry — Umucyo Cooperative">
                    Contact Our Team
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/40 text-white hover:bg-white hover:text-primary text-lg transition-colors">
                  <Link href="/contact">
                    <CheckCircle2 className="mr-2 w-5 h-5" /> View All Inquiries
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
