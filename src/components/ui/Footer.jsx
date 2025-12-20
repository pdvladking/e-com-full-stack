"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/crafted-stories", label: "Crafted Stories" },
    { href: "/contact", label: "Contact" },
    { href: "/about-us", label: "About Us" },
  ];

  const contacts = [
    { icon: FaPhone, text: "+977-XXXXXXXXX", href: "tel:+XXXXXX", label: "Call Eden Tattoo Nepal" },
    { icon: FaEnvelope, text: "xyz@gmail.com", href: "mailto:edentattoo73@gmail.com", label: "Email Eden Tattoo Nepal" },
    { icon: FaWhatsapp, text: "WhatsApp", href: "https://wa.me/", label: "WhatsApp Eden Tattoo Nepal" },
  ];

  const socials = [
    { href: "https://www.facebook.com/profile.php?id=100076221092054", icon: FaFacebookF, label: "Facebook" },
    { href: "https://www.instagram.com/edentattoonepal/", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.tiktok.com/@edentattoonepal", icon: FaTiktok, label: "TikTok" },
  ];

  const studioHours = [
    { day: "Sun–Sat", time: "10:00 AM – 11:00 PM" },
  ];

  const policies = [
    "Goods once sold cannot b returned.",
    "Other policies.",
  ];

  return (
    <footer
      id="footer"
      className={`bg-neutral-50 text-neutral-800 py-20 px-6 transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 text-center md:text-left">
        
        {/* Left Column: Studio Info + Map */}
        <div className="space-y-6">
          <h2 className="font-playfair-display text-xl font-semibold tracking-wide">
            RAWHIDE LEATHERS
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-neutral-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.466894517778!2d85.3004296!3d27.702867200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1927c511fec9%3A0x347f008b65583ac4!2sRawhide%20Leathers!5e0!3m2!1sen!2snp!4v1766222969137!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing Eden Tattoo Nepal location"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Links + Other Info */}
        <div className="space-y-8">
          {/* Nav Links in Row */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-neutral-500 transition">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contacts */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-sm text-neutral-600">
            {contacts.map(({ icon: Icon, text, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="hover:text-neutral-500 transition flex items-center gap-2"
              >
                <Icon /> {text}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-6 text-xl text-neutral-600">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-neutral-500 transition transform hover:scale-110 hover:-translate-y-1"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Policies */}
          <ul className="space-y-2 text-xs text-neutral-600">
            {policies.map((rule, i) => <li key={i}>• {rule}</li>)}
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="w-full h-px bg-linear-to-r from-neutral-600/20 via-gray-600/10 to-neutral-500/20 my-10" />
      <div className="text-center space-y-2 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} RAWHIDE Nepal. All rights reserved.</p>
        <p>
          Built and designed by{" "}
          <a
            href="https://rajathapa.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-500 transition"
          >
            Rajthapa.com.np
          </a>
        </p>
      </div>
    </footer>
  );
}