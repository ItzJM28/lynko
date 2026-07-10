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

          <form className="mt-10 w-full max-w-2xl rounded-2xl border border-[#deded8] bg-white p-2 text-left shadow-[0_12px_40px_rgba(28,28,24,0.08)]">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="url" className="sr-only">
                Paste a long URL
              </label>
              <input
                id="url"
                name="url"
                type="url"
                inputMode="url"
                required
                placeholder="Paste your long link here"
                className="min-w-0 flex-1 rounded-xl bg-[#f7f7f5] px-4 py-3.5 text-base outline-none placeholder:text-[#a4a49e] focus:ring-2 focus:ring-[#242420]/10"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#20201d] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#383833] focus:outline-none focus:ring-2 focus:ring-[#20201d] focus:ring-offset-2"
              >
                Shorten link
              </button>
            </div>

            <details className="group mt-1 border-t border-[#ecece7] px-2 pt-1">
              <summary className="flex cursor-pointer list-none items-center justify-center gap-2 py-3 text-sm font-medium text-[#686862] outline-none transition hover:text-[#20201d] focus-visible:ring-2 focus-visible:ring-[#20201d]/15 [&::-webkit-details-marker]:hidden">
                <span className="transition-transform group-open:rotate-45">+</span>
                Customize link
              </summary>

              <div className="grid gap-4 px-1 pb-3 pt-2 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="alias" className="mb-1.5 block text-xs font-medium text-[#555550]">
                    Custom URL
                  </label>
                  <div className="flex items-center rounded-xl border border-[#deded8] bg-[#f7f7f5] focus-within:ring-2 focus-within:ring-[#242420]/10">
                    <span className="pl-3 text-sm text-[#8a8a84]">lynko.link/</span>
                    <input
                      id="alias"
                      name="alias"
                      type="text"
                      autoComplete="off"
                      spellCheck="false"
                      pattern="[a-zA-Z0-9-_]+"
                      title="Use letters, numbers, hyphens, or underscores"
                      placeholder="your-custom-link"
                      className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-[#aaa9a3]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-[#555550]">
                    Password <span className="font-normal text-[#9a9a94]">optional</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Protect this link"
                    className="w-full rounded-xl border border-[#deded8] bg-[#f7f7f5] px-3 py-3 text-sm outline-none placeholder:text-[#aaa9a3] focus:ring-2 focus:ring-[#242420]/10"
                  />
                </div>

                <div>
                  <label htmlFor="expiration" className="mb-1.5 block text-xs font-medium text-[#555550]">
                    Expiration <span className="font-normal text-[#9a9a94]">optional</span>
                  </label>
                  <input
                    id="expiration"
                    name="expiration"
                    type="datetime-local"
                    className="w-full rounded-xl border border-[#deded8] bg-[#f7f7f5] px-3 py-3 text-sm text-[#777771] outline-none focus:ring-2 focus:ring-[#242420]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="description" className="mb-1.5 block text-xs font-medium text-[#555550]">
                    Description <span className="font-normal text-[#9a9a94]">optional</span>
                  </label>
                  <input
                    id="description"
                    name="description"
                    type="text"
                    maxLength={120}
                    placeholder="What is this link for?"
                    className="w-full rounded-xl border border-[#deded8] bg-[#f7f7f5] px-3 py-3 text-sm outline-none placeholder:text-[#aaa9a3] focus:ring-2 focus:ring-[#242420]/10"
                  />
                </div>
              </div>
            </details>
          </form>

          <p className="mt-4 text-xs text-[#8a8a84]">
            No account needed. Paste, shorten, and share.
          </p>
        </section>

        <footer className="flex items-center justify-between border-t border-[#e3e3de] py-6 text-xs text-[#85857f]">
          <span>&copy; 2026 Lynko</span>
          <span>Built for simpler sharing.</span>
        </footer>
      </div>
    </main>
  );
}
