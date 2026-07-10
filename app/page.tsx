export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] px-6 text-[#171715]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col">
        <header className="flex items-center justify-between py-7">
          <a href="#" className="text-xl font-semibold tracking-[-0.04em]">
            lynko
          </a>
          <span className="text-sm text-[#74746f]">Simple links, made shorter.</span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center pb-24 text-center">
          <div className="mb-6 rounded-full border border-[#deded8] bg-white px-3 py-1 text-xs font-medium text-[#65655f] shadow-sm">
            Fast. Clean. Free.
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl">
            Short links that get to the point.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-[#676762] sm:text-lg">
            Turn long, messy URLs into short links you can share anywhere.
          </p>

          <form className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-[#deded8] bg-white p-2 shadow-[0_12px_40px_rgba(28,28,24,0.08)] sm:flex-row">
            <label htmlFor="url" className="sr-only">
              Paste a long URL
            </label>
            <input
              id="url"
              name="url"
              type="url"
              inputMode="url"
              placeholder="Paste your long link here"
              className="min-w-0 flex-1 rounded-xl px-4 py-3.5 text-base outline-none placeholder:text-[#a4a49e] focus:ring-2 focus:ring-[#242420]/10"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#20201d] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#383833] focus:outline-none focus:ring-2 focus:ring-[#20201d] focus:ring-offset-2"
            >
              Shorten link
            </button>
          </form>

          <p className="mt-4 text-xs text-[#8a8a84]">
            No account needed. Paste, shorten, and share.
          </p>
        </section>

        <footer className="flex items-center justify-between border-t border-[#e3e3de] py-6 text-xs text-[#85857f]">
          <span>© 2026 Lynko</span>
          <span>Built for simpler sharing.</span>
        </footer>
      </div>
    </main>
  );
}
