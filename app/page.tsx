export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#211f1a]">
      {/* Header */}
      <header className="border-b border-[#d8d0c0] bg-[#f7f3ea]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-[0.25em]">
            BABYLON
          </h1>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#" className="hover:text-[#8a642f]">
              Home
            </a>
            <a href="#" className="hover:text-[#8a642f]">
              Topics
            </a>
            <a href="#" className="hover:text-[#8a642f]">
              Library
            </a>
            <a href="#" className="hover:text-[#8a642f]">
              About
            </a>
          </nav>

          <button className="rounded-full border border-[#211f1a] px-4 py-2 text-sm md:hidden">
            Menu
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#8a642f]">
          Knowledge • History • Culture
        </p>

        <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Discover Babylon
        </h2><img
  src="/babylon.jpg"
  alt="Babylon"
  className="mx-auto mt-8 w-full max-w-4xl rounded-2xl"
/>


        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#625d53]">
          Explore stories, knowledge, history and ideas through a carefully
          curated digital library.
        </p>

        <button className="mt-10 rounded-full bg-[#211f1a] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#8a642f]">
          Explore Babylon
        </button>
      </section>

      {/* Topics */}
      <section className="border-y border-[#d8d0c0] bg-[#eee8dc]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8a642f]">
              Explore
            </p>
            <h3 className="mt-2 text-3xl font-semibold">
              Featured Topics
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["History", "Discover civilizations, people and events."],
              ["Knowledge", "Learn through carefully organized resources."],
              ["Library", "Browse articles, books and references."],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-2xl border border-[#d8d0c0] bg-[#f7f3ea] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="mt-3 leading-7 text-[#625d53]">
                  {description}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block text-sm font-medium text-[#8a642f]"
                >
                  Explore →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-[#8a642f]">
          From Babylon
        </p>

        <h3 className="mt-2 text-3xl font-semibold">
          Latest Articles
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((article) => (
            <article
              key={article}
              className="border-b border-[#d8d0c0] pb-6"
            >
              <p className="text-xs uppercase tracking-widest text-[#8a642f]">
                Article
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                The Story of Ancient Knowledge
              </h4>

              <p className="mt-3 text-sm leading-6 text-[#625d53]">
                A glimpse into the people, ideas and history that shaped
                civilizations.
              </p>

              <a
                href="#"
                className="mt-5 inline-block text-sm font-medium"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d8d0c0] bg-[#211f1a] px-6 py-10 text-center text-sm text-white">
        <p>© 2026 Babylon. Knowledge preserved for the future.</p>
      </footer>
    </main>
  );
}
