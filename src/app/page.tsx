import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-3xl mx-auto bg-card border border-border p-8 rounded-lg shadow-sm mt-12">
        <div className="flex flex-col items-center sm:items-start gap-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />

          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Welcome to the Next.js Learning Lab
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Explore the power of React 19 and Next.js 15. This playground is
              designed to help you master modern web development with a focus on
              Server Components, clean architecture, and polished UI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              className="flex h-12 items-center justify-center rounded-full bg-orange-600 px-8 text-white transition-colors hover:bg-orange-700 font-semibold"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
