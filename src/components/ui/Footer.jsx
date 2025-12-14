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
    { href: "/bookings", label: "Book" },
    { href: "/gallery", label: "Gallery" },
    { href: "/artists", label: "Artists" },
    { href: "/studio", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  const contacts = [
    { icon: FaPhone, text: "+977-9816245996", href: "tel:+9779816245996", label: "Call Eden Tattoo Nepal" },
    { icon: FaEnvelope, text: "edentattoo73@gmail.com", href: "mailto:edentattoo73@gmail.com", label: "Email Eden Tattoo Nepal" },
    { icon: FaWhatsapp, text: "WhatsApp", href: "https://wa.me/9779816245996", label: "WhatsApp Eden Tattoo Nepal" },
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
    "Clients must be 18 or older to get tattooed.",
    "Diabetic clients require medical clearance before booking.",
    "Drug and alcohol use is strictly prohibited on studio premises.",
    "Respectful behavior is mandatory at all times.",
  ];

  return (
    <footer
      id="footer"
      className={`bg-linear-to-tl from-neutral-50 to-sky-50 text-neutral-800 py-20 px-6 transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 text-center md:text-left">
        
        {/* Left Column: Studio Info + Map */}
        <div className="space-y-6">
          <h2 className="font-playfair-display text-xl font-semibold tracking-wide">
            Eden Tattoo Nepal
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-yellow-500/20">
            <iframe
              src="https://maps.google.com/maps?q=Eden%20Tattoo%20Studio%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
              <Link key={link.href} href={link.href} className="hover:text-yellow-500 transition">
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
                className="hover:text-yellow-500 transition flex items-center gap-2"
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
                className="hover:text-yellow-500 transition transform hover:scale-110 hover:-translate-y-1"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Studio Hours */}
          <div className="text-sm text-neutral-600">
            <h3 className="font-semibold mb-2">Studio Hours</h3>
            <ul className="space-y-1">
              {studioHours.map(({ day, time }, i) => (
                <li key={i}>{day}: {time}</li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <ul className="space-y-2 text-xs text-neutral-600">
            {policies.map((rule, i) => <li key={i}>• {rule}</li>)}
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="w-full h-px bg-linear-to-r from-yellow-600/20 via-gray-600/10 to-yellow-500/20 my-10" />
      <div className="text-center space-y-2 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Eden Tattoo Nepal. All rights reserved.</p>
        <p>
          Built and designed by{" "}
          <a
            href="https://rajathapa.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-500 transition"
          >
            Rajthapa.com.np
          </a>
        </p>
      </div>
    </footer>
  );
}