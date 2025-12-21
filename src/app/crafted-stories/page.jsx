import Link from 'next/link';
import { stories } from '@/lib/storiesData';

export default function StoriesPage() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/crafted-stories/${story.slug}`} 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{story.title}</h2>
            <p className="text-gray-600">{story.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}