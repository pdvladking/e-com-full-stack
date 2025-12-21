'use client';
import Image from 'next/image';
import Link from 'next/link';
import { stories } from '../../lib/storiesData';

export default function CraftedStories() {
  return (
    <section className="bg-neutral-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-6">Crafted Stories</h2>
        <p className="text-center mb-16 text-lg max-w-2xl mx-auto">
          A curated collection of insights, inspirations, and narratives behind leather
          craftsmanship.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(stories).map(([slug, story]) => (
            <div
              key={slug}
              className="space-y-4 hover:translate-y-1 hover:shadow-xl transition-transform duration-300"
            >
              <Image
                src={story.image}
                alt={story.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <span className="text-sm font-mono uppercase tracking-wide">{story.category}</span>
              <h3 className="text-xl md:text-2xl font-serif">{story.title}</h3>
              <p className="text-base">{story.excerpt}</p>
              <Link href={`/stories/${slug}`} className="text-sm underline hover:opacity-70">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
