export default function Hero() {
  const whatsappUrl =
    "https://wa.me/6285720736221?text=" +
    encodeURIComponent("Halo saya dari website buniaga-hidroponik ingin berkonsultasi");
  const calendlyUrl = "https://calendly.com/uniqfadilah/new-meeting";

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Supply sayur stabil, langsung dari kebun khusus Anda.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Buniaga Hidroponik menyediakan produksi sayur hidroponik berbasis
          kontrak dengan lahan khusus untuk kebutuhan bisnis Anda.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-2xl bg-primary px-8 py-4 text-center text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-dark hover:shadow-lg sm:w-auto"
          >
            Jadwalkan Konsultasi Supply
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-2xl border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white sm:w-auto"
          >
            WhatsApp Kami
          </a>
        </div>
      </div>
    </section>
  );
}
