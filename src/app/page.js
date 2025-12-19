"use client";
import Hero from "@/components/ui/Hero";
import FeaturedDrop from "@/components/ui/FeaturedCollection";
import TestimonialStrip from "@/components/ui/TestimonialsStrip";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import ShopTheLook from "@/components/ui/ShopTheLook";


export default function Homepage() {
  return (
    <>
    <Hero />
    <FeaturedDrop />
    <TestimonialStrip />
    <NewsletterSignup />
    <ShopTheLook />
    </>
  )
}