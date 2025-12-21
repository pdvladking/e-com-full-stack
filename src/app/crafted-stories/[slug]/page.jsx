import { stories } from '@/lib/storiesData';
import Image from 'next/image';

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({ params }) {
  const { slug } = await params;

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-3xl font-bold">Story not found</h1>
        <p className="mt-4 text-lg text-gray-600">Slug: {slug}</p>
      </section>
    );
  }

  return (
    <section className="bg-neutral-50 py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-5xl font-serif">{story.title}</h1>
        <Image
          src={story.image}
          alt={story.title}
          width={800}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
        <article
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
      </div>
    </section>
  );
}