import Link from "next/link";
import Image from "next/image";
import { stories } from "@/lib/storiesData";

export default function StoriesPage() {
  return (
    <section className="bg-neutral-50 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Crafted Stories
        </h1>
        <div className="text-center py-3 mb-12">
          <p className="text-gray-600 text-lg">
            A curated collection of insights, inspirations, and the soul behind every stitch.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/crafted-stories/${story.slug}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-serif group-hover:text-neutral-600 transition">
                  {story.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}