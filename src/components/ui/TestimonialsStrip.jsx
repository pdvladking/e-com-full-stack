"use client";

const testimonials = [
  {
    quote: "Absolutel love the quality. Every detail feels like it was made just for me.",
    name: "Aanya R.",
  },
  {
    quote: "Absolutel love the quality. Every detail feels like it was made just for me.",
    name: "Aanya R.",
  },
  {
    quote: "Absolutel love the quality. Every detail feels like it was made just for me.",
    name: "Aanya R.",
  },
];

export default function TestimonialStrip() {
  return (
    <section className="w-full py-24 px-6 md:px-16">
      <div className="max-w-screen-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonials grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
            key={index}
            className="text-left p-6 rounded-lg shadow-sm hover:shadow-md bg-neutral-50"
            >
              <p className="italic text-neutral-700 mb-4">
                "{t.quote}"
              </p>
              <p className="text-sm font-semibold">
                - {t.name}
              </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}