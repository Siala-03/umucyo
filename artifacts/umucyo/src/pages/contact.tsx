 import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin, Mail, Phone, Send, Clock, Coffee, Leaf, Users,
  TrendingUp, Globe2, BookOpen, CheckCircle2, ArrowRight
} from "lucide-react";
import { Link } from "wouter";

import rwandaImg from "@/assets/rwanda-landscape.webp";
import womenImg from "@/assets/women-farmers.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  country: z.string().min(2, "Country is required"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(20, "Please provide more detail — at least 20 characters"),
});

const inquiryCategories = [
  { value: "Coffee sorting & grading workforce", label: "Coffee Sorting & Grading Workforce" },
  { value: "Horticulture field workforce", label: "Horticulture Field Workforce" },
  { value: "Partnerships & collaboration", label: "Partnerships & Collaboration" },
  { value: "Climate action & environmental stewardship", label: "Climate Action & Environmental Stewardship" },
  { value: "Funding & investment", label: "Funding & Investment Opportunities" },
  { value: "Women's empowerment", label: "Women's Empowerment Programs" },
  { value: "Training programs", label: "Training & Capacity Building" },
  { value: "Government & policy", label: "Government & Policy Engagement" },
  { value: "Corporate sustainability & ESG", label: "Corporate Sustainability & ESG" },
  { value: "Media & communications", label: "Media & Communications" },
  { value: "Other", label: "Other Inquiry" },
];

const CONTACT_EMAIL = "uwomencooperative@gmail.com";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", organization: "", country: "", inquiryType: "", message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New inquiry from ${values.organization} (${values.inquiryType})`,
          Name: values.name,
          Email: values.email,
          Organization: values.organization,
          Country: values.country,
          "Inquiry Type": values.inquiryType,
          Message: values.message,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. Our team will respond within 48 business hours.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please try again, or email us directly at ${CONTACT_EMAIL}.`,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-full bg-background">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={rwandaImg} alt="Rwanda landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-semibold tracking-wide text-white">Kigali, Rwanda</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Whether you are an agricultural business, donor, government partner, or development organization — we welcome the opportunity to explore how we can work together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Audience Quick Nav */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-bold tracking-widest text-secondary uppercase mb-8">Who Are You?</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Coffee, label: "Agri-Business / Exporter" },
              { icon: Leaf, label: "Climate / ESG Partner" },
              { icon: TrendingUp, label: "Investor / Donor" },
              { icon: Globe2, label: "Development Partner" },
              { icon: Users, label: "Government" },
              { icon: BookOpen, label: "Researcher" },
            ].map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
                onClick={() => {
                  const el = document.getElementById("contact-form");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Work Together */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Partnership Pathways</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
              How we can work together.
            </h3>
            <p className="text-muted-foreground text-lg">
              Creating inclusive and resilient agricultural value chains requires more than good intentions — it requires collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Coffee, title: "Agricultural Exporters & Processors", desc: "Access organized, trained workforce support that contributes to quality, efficiency, and responsible employment practices across agricultural value chains." },
              { icon: Users, title: "Government Institutions", desc: "Collaborate on initiatives that advance national priorities in employment creation, women's economic empowerment, agricultural transformation, and rural development." },
              { icon: Globe2, title: "Development Partners & NGOs", desc: "Co-design programmes that strengthen livelihoods, expand workforce opportunities, build technical capacity, and promote inclusive agricultural growth." },
              { icon: TrendingUp, title: "Donors & Foundations", desc: "Invest in a locally led model that creates measurable social, economic, and environmental impact through decent work, skills development, and community resilience." },
              { icon: Leaf, title: "Corporate Sustainability Partners", desc: "Support inclusive supply chains and ESG commitments by investing in workforce development, gender equality, and sustainable agricultural communities." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6"
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

      {/* Contact Info + Form */}
      <section className="py-24" id="contact-form">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col lg:flex-row">

            {/* Info Panel */}
            <div className="lg:w-5/12 bg-primary text-white p-10 lg:p-14 flex flex-col">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Contact Information</h3>
                <p className="text-white/70 mb-10">Our team responds to all inquiries within 48 business hours.</p>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-xs text-secondary mb-1">Office Address</h4>
                      <p className="text-white/80 leading-relaxed">
                        NAEB (National Agricultural Export Development Board)<br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-xs text-secondary mb-1">Email</h4>
                      <a href="mailto:uwomencooperative@gmail.com" className="text-white/80 hover:text-white transition-colors">
                        uwomencooperative@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-xs text-secondary mb-1">Telephone</h4>
                      <div className="text-white/80 flex flex-col gap-1">
                        <a href="tel:+250783153232" className="hover:text-white transition-colors">+250 783 153 232</a>
                        <a href="tel:+250789052447" className="hover:text-white transition-colors">+250 789 052 447</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-xs text-secondary mb-1">Response Time</h4>
                      <p className="text-white/80">Within 48 business hours<br /><span className="text-xs text-white/50">Mon – Fri, 8am – 5pm (EAT)</span></p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h4 className="font-bold text-sm text-secondary uppercase tracking-wide mb-4">We Welcome Inquiries About</h4>
                  <div className="space-y-2">
                    {[
                      "Coffee sorting & grading workforce",
                      "Horticulture field workforce",
                      "Climate action & environmental stewardship",
                      "Women's empowerment initiatives",
                      "Training and capacity-building programs",
                      "Investment, donor & ESG partnerships",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-white/10">
                <p className="font-serif italic text-white/60 text-sm">
                  "We look forward to working with you to promote sustainable agriculture, empower women, and create lasting positive impact in Rwanda."
                </p>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:w-7/12 p-10 lg:p-14">
              <div className="mb-10">
                <h3 className="text-3xl font-serif font-bold text-primary mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground">Complete the form below and our team will get back to you promptly. Fields marked with * are required.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control} name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. John Smith" {...field} className="h-12" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control} name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="you@organization.org" {...field} className="h-12" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control} name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization / Company *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your organization name" {...field} className="h-12" data-testid="input-organization" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control} name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Germany, USA, Kenya" {...field} className="h-12" data-testid="input-country" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control} name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nature of Inquiry *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12" data-testid="select-inquiry-type">
                              <SelectValue placeholder="Select the purpose of your message" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {inquiryCategories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control} name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe your inquiry in detail — including volume requirements, timelines, program interests, or any specific questions."
                            className="min-h-[180px] resize-y"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center gap-4">
                    <Button type="submit" size="lg" className="h-13 px-8 rounded-full text-lg" data-testid="button-submit">
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground">We typically respond within 48 hours.</p>
                  </div>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Common Questions</h2>
            <h3 className="text-4xl font-serif font-bold text-primary">Frequently Asked Questions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "Do you sell coffee or produce directly?",
                a: "No. Umucyo does not buy, process, market, or export agricultural commodities — we do not compete with coffee exporters. We organize and train a professional workforce that supports coffee processors, horticultural enterprises, and licensed exporters. If you're sourcing coffee or produce, we can connect you with the businesses our workforce supports.",
              },
              {
                q: "How can agricultural businesses engage your workforce?",
                a: "Processors, horticultural enterprises, and exporters can partner with us for organized, trained teams — including coffee sorting and grading, and horticulture field operations support. Contact us to discuss your labor needs, timelines, and volumes.",
              },
              {
                q: "Are your workers trained and accountable?",
                a: "Yes. Members complete structured training in workplace professionalism, quality standards, and occupational safety, with ongoing capacity building — including financial literacy, cooperative leadership, and climate-smart agriculture — throughout their time with the cooperative.",
              },
              {
                q: "How can development organizations partner with you?",
                a: "We welcome partnerships with NGOs, foundations, and multilateral agencies for program co-implementation, technical assistance, and grant-funded initiatives. Please use the contact form specifying 'Partnerships & Collaboration' and our team will respond with a meeting proposal.",
              },
              {
                q: "How do you approach environmental stewardship?",
                a: "We integrate agroforestry and climate-smart practices into member farms today. We are also actively designing a model to pay women directly for conservation work — planting trees, protecting watersheds, conserving soil. That model is still being built, and we're seeking partners to help shape it.",
              },
              {
                q: "Do you offer site visits for partners?",
                a: "Yes. Qualified agricultural businesses, development partners, and researchers are welcome to arrange visits to see our workforce in action. We work with NAEB and our institutional partners to facilitate visits. Please contact us at least 3 weeks in advance.",
              },
              {
                q: "How can donors or corporate partners get involved?",
                a: "Donors, foundations, and corporate sustainability teams can support decent-work program funding, environmental stewardship incentive design, or workforce training and equipment. Use the contact form and specify your area of interest.",
              },
              {
                q: "What value chains do you work in?",
                a: "Coffee and horticulture today — coffee sorting and grading, and horticulture field operations — with an ambition to extend into other agricultural value chains as our members' skills and opportunities grow.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border"
                data-testid={`card-faq-${i}`}
              >
                <h4 className="font-bold text-primary mb-3 text-lg leading-snug">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">What to Expect</h2>
            <h3 className="text-4xl font-serif font-bold text-primary">After you contact us.</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-0 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Acknowledgement", time: "Within 24 hours", desc: "You will receive a confirmation email acknowledging receipt of your inquiry and confirming our team has been notified." },
              { step: "02", title: "Review & Assignment", time: "Within 48 hours", desc: "Your inquiry is reviewed and assigned to the appropriate team member — workforce, partnerships, programs, or leadership." },
              { step: "03", title: "Initial Response", time: "Within 48–72 hours", desc: "A team member contacts you by email or phone to discuss your inquiry, ask clarifying questions, and propose next steps." },
              { step: "04", title: "Next Steps", time: "As agreed", desc: "Depending on your inquiry: workforce proposal, partnership discussion, meeting scheduling, or program information package." },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex-1 bg-card border border-border rounded-3xl p-8 relative m-1"
              >
                <div className="text-7xl font-serif font-bold text-primary/5 absolute top-4 right-6 leading-none select-none">{stage.step}</div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-xl text-primary mb-1">{stage.title}</h4>
                <p className="text-secondary text-xs font-bold tracking-wide mb-3">{stage.time}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Together We Create Lasting Impact */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Together</h2>
            <p className="font-serif italic text-2xl text-primary leading-relaxed">
              Every partnership creates new opportunities. Every opportunity strengthens a family. Every strengthened family contributes to a more resilient community.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Ready to start a conversation?</h2>
              <p className="text-white/80 text-lg mb-8">
                We look forward to hearing from you — whether you need a trained agricultural workforce, are exploring a partnership, or seeking to invest in women's and youth's decent work and land stewardship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:uwomencooperative@gmail.com" className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors">
                  <Mail className="w-4 h-4" /> Email Us Directly
                </a>
                <a href="tel:+250783153232" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <img src={womenImg} alt="Umucyo women cooperative" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-white font-semibold">Responses within 48 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
