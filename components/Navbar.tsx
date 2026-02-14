"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-sm transition-shadow duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Buniaga Hidroponik
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-8 md:flex">
            <button
              type="button"
              onClick={() => scrollTo("problem")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              Masalah
            </button>
            <button
              type="button"
              onClick={() => scrollTo("solution")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              Solusi
            </button>
            <button
              type="button"
              onClick={() => scrollTo("how-it-works")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              Cara Kerja
            </button>
            <button
              type="button"
              onClick={() => scrollTo("target")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              Untuk Siapa
            </button>
            <button
              type="button"
              onClick={() => scrollTo("why")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              Mengapa Kami
            </button>
          </div>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("cta");
            }}
            className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md"
          >
            Konsultasi
          </a>
        </div>
      </nav>
    </header>
  );
}
