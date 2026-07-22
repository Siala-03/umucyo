import { motion } from "framer-motion";
import coopImg from "@/assets/coop-meeting.webp";
import womenImg from "@/assets/women-farmers.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={coopImg} 
            alt="Women cooperative meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Some organizations begin with an idea. Umucyo began with a problem: the women who sustain Rwanda's agriculture deserved more than appreciation — they deserved opportunity.
          </motion.p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Origins</h2>
              <h3 className="text-4xl font-serif font-bold text-primary mb-6">Founded in 2022, named for the light of opportunity.</h3>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Across coffee-growing communities and horticultural landscapes, women were already doing essential work — sorting coffee with remarkable precision, cultivating crops that supported household incomes, and keeping agricultural value chains moving every season. Yet for many, this work remained informal, inconsistent, and undervalued. The challenge was never a lack of skill or commitment. It was the absence of structured pathways that could turn essential agricultural work into stable employment and long-term opportunity.
                </p>
                <p>
                  Recognizing this gap, a group of women came together in 2022 with a shared vision: to build a cooperative that would place women at the centre of agricultural development — not as beneficiaries of support, but as skilled professionals, leaders, and contributors to Rwanda's growing agricultural economy. That vision became Umucyo Women Cooperative. The name <em>Umucyo</em>, meaning "light" in Kinyarwanda, reflects more than optimism — it represents opportunity, dignity, and the belief that sustainable development begins when people are equipped to build better futures for themselves.
                </p>
                <p>
                  From the beginning, Umucyo chose a different path. Rather than becoming another agricultural producer, processor, or exporter, we positioned the cooperative as a <strong>workforce and livelihoods partner</strong> — an organization that strengthens existing agricultural value chains by investing in the people who sustain them. We do not compete with coffee exporters. We do not replace cooperatives or washing stations. We do not market agricultural commodities. Instead, we organize, train, and coordinate skilled women who contribute to quality, productivity, and responsible employment across the value chain.
                </p>
                <p>
                  Today, Umucyo is a cooperative of more than <strong>2,000 women</strong>, with approximately <strong>90% of its membership</strong> made up of women from across Rwanda's agricultural communities. This isn't just a statistic — it's our fundamental operational philosophy.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden"
            >
              <img src={womenImg} alt="Rwandan women farmers" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-serif font-bold mb-6 text-secondary">Our Mission</h3>
              <p className="text-lg leading-relaxed text-white/80">
                To create decent, dignified employment for women and youth across Rwanda's agricultural value chains — coffee, horticulture, and beyond — while investing in the skills, leadership, and environmental stewardship that make those livelihoods last.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-serif font-bold mb-6 text-secondary">Our Vision</h3>
              <p className="text-lg leading-relaxed text-white/80">
                A Rwanda where every woman and young person in agriculture has a dignified job, a fair wage, and a direct stake in the health of the land — with 10,000 women and youth in decent agricultural employment by 2030.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">The Umucyo Way</h2>
            <h3 className="text-4xl font-serif font-bold text-primary">Our Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Empowerment", desc: "We believe in the transformative power of women's leadership in agriculture." },
              { title: "Excellence", desc: "We compromise on nothing when it comes to the quality and professionalism of our workforce." },
              { title: "Stewardship", desc: "We treat the women who protect our soil, water, and forests as skilled professionals — and work to see them paid accordingly." },
              { title: "Integrity", desc: "We operate with total transparency toward our members, partners, and the businesses we work alongside." },
              { title: "Climate Resilience", desc: "We build agroforestry and climate-smart practices into every value chain we touch." },
              { title: "Community", desc: "Our success is measured by the prosperity we bring to our local communities." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-background rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-6 font-serif">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Structure</h2>
              <h3 className="text-4xl font-serif font-bold text-white mb-6">Democratic cooperative governance.</h3>
              <p className="text-white/80 text-lg mb-8">
                Umucyo operates under Rwanda's cooperative law with a democratic, member-driven governance structure. All strategic decisions are made collectively, with elected leadership accountable to the full membership.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "90%", label: "Women in leadership & membership" },
                { value: "Annual", label: "General Assembly for all members" },
                { value: "Elected", label: "Board accountable to members" },
                { value: "2,000+", label: "Women members across Rwanda" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-serif font-bold text-secondary mb-2">{item.value}</div>
                  <div className="text-white/70 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
