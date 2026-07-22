import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.webp";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/our-model", label: "Our Model" },
    { href: "/impact", label: "Our Impact" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center z-50">
              <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm">
                <img src={logo} alt="Umucyo Women Cooperative" className="h-9 w-auto" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    isScrolled
                      ? location === link.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant={isScrolled ? "default" : "secondary"} className="rounded-full px-6">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </nav>

            {/* Mobile Nav Toggle */}
            <button
              className={`md:hidden z-50 ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-serif font-bold ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-8 mx-auto rounded-full w-full max-w-sm">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
          </Button>
        </nav>
      </div>

      <main className="flex-1">{children}</main>

      <footer className="bg-primary text-white pt-20 pb-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="inline-flex items-center mb-6">
                <div className="bg-white rounded-lg px-4 py-2">
                  <img src={logo} alt="Umucyo Women Cooperative" className="h-12 w-auto" />
                </div>
              </Link>
              <p className="text-white/80 max-w-md text-lg mb-8 font-serif italic">
                A workforce and livelihoods partner creating decent jobs for women and youth across Rwanda's agricultural value chains — and rewarding the women who protect the land.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <ArrowRight size={14} /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="shrink-0 mt-1 text-secondary" />
                  <span>NAEB (National Agricultural Export Development Board), Kigali, Rwanda</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0 text-secondary" />
                  <a href="mailto:uwomencooperative@gmail.com" className="hover:text-white transition-colors">uwomencooperative@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="shrink-0 mt-1 text-secondary" />
                  <div>
                    <div>+250 783 153 232</div>
                    <div>+250 789 052 447</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Umucyo Women Cooperative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
