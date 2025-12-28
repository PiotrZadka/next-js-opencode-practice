export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl mx-auto bg-card border border-border p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-foreground">About This Project</h1>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            This application is a demonstration of modern web development practices using the Next.js App Router, React Server Components (RSC), and Tailwind CSS 4.
          </p>
          <p>
            Our goal is to build a fast, accessible, and maintainable codebase while exploring the latest advancements in the React ecosystem, such as enhanced data fetching patterns and simplified state management.
          </p>
          <p>
            The theme is inspired by the &quot;Stone&quot; palette, focusing on subtle contrasts and a clean, professional aesthetic that works across both light and dark modes.
          </p>
        </div>
      </div>
    </main>
  );
}
