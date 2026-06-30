import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      acronym: "MINAGRI",
      name: "Ministry of Agriculture and Animal Resources",
      role: "Strategic partner in agricultural development, policy alignment, and overarching farmer capacity building.",
    },
    {
      acronym: "RAB",
      name: "Rwanda Agriculture and Animal Resources Development Board",
      role: "Providing essential technical support, agronomic research access, and specialized extension services.",
    },
    {
      acronym: "MINEMA",
      name: "Ministry in Charge of Emergency Management",
      role: "Collaborating on environmental resilience, risk mitigation, and climate adaptation strategies for our crops.",
    },
    {
      acronym: "NAEB",
      name: "National Agricultural Export Development Board",
      role: "Facilitating export logistics, ensuring compliance with international standards, and expanding market access.",
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary"
          >
            <Handshake size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6"
          >
            Our Institutional Partners
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Sustainable impact requires powerful alliances. We are proud to work alongside Rwanda's leading agricultural institutions.
          </motion.p>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 bg-background rounded-3xl border border-border shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="text-sm font-bold tracking-widest text-secondary mb-2 uppercase">
                  Institutional Partner
                </div>
                <h3 className="text-4xl font-serif font-bold text-primary mb-2">{partner.acronym}</h3>
                <div className="text-lg font-medium text-foreground mb-6 pb-6 border-b border-border">
                  {partner.name}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Partnership Philosophy</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
            "Growth in isolation is temporary. Growth through collaboration is sustainable."
          </h3>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Umucyo Women Cooperative operates with absolute transparency. We view our partners not just as facilitators, but as stakeholders in our mission to elevate Rwandan agriculture on the global stage. We welcome dialogue with international NGOs, buyers, and investors who share our commitment to quality and empowerment.
          </p>
        </div>
      </section>
    </div>
  );
}
