import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Send } from "lucide-react";

import rwandaImg from "@/assets/rwanda-landscape.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send an API request
    console.log(values);
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

  const inquiryCategories = [
    "Coffee sourcing & exports",
    "Horticultural products",
    "Partnerships",
    "Women's empowerment",
    "Training programs",
    "Investment opportunities"
  ];

  return (
    <div className="w-full bg-background">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={rwandaImg} 
            alt="Rwanda landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Whether you are a buyer, donor, or potential partner, we welcome the opportunity to collaborate.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative z-20 -mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Info Panel */}
            <div className="lg:w-1/3 bg-primary text-white p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-sm text-secondary mb-1">Headquarters</h4>
                      <p className="text-white/80 leading-relaxed">
                        NAEB (National Agricultural Export Development Board)<br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-sm text-secondary mb-1">Email</h4>
                      <a href="mailto:uwomencooperative@gmail.com" className="text-white/80 hover:text-white transition-colors">
                        uwomencooperative@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold tracking-wide uppercase text-sm text-secondary mb-1">Phone</h4>
                      <div className="text-white/80 flex flex-col gap-1">
                        <a href="tel:+250783153232" className="hover:text-white transition-colors">+250 783 153 232</a>
                        <a href="tel:+250789052447" className="hover:text-white transition-colors">+250 789 052 447</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="font-serif italic text-white/70">
                  "Empowering women, cultivating excellence, and fostering sustainable growth."
                </p>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:w-2/3 p-10 lg:p-14">
              <div className="mb-10">
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">Send us a message</h3>
                <p className="text-muted-foreground">Fill out the form below and our team will respond within 48 hours.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12 bg-background border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="h-12 bg-background border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Company or NGO Name" {...field} className="h-12 bg-background border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Inquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-background border-border">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {inquiryCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px] resize-y bg-background border-border" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-8 text-lg rounded-full">
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              </Form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
