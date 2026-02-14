export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-foreground">
              Buniaga Hidroponik
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Produksi sayur hidroponik berbasis kontrak dengan lahan khusus
              untuk kebutuhan bisnis Anda. Supply stabil, kualitas konsisten.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-foreground">Kontak</p>
            <a
              href="https://wa.me/6285720736221?text=Halo%20saya%20dari%20website%20buniaga-hidroponik%20ingin%20berkonsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-primary"
            >
              WhatsApp: +62 857-2073-6221
            </a>
            <a
              href="mailto:info@buniaga-hidroponik.my.id"
              className="text-sm text-gray-600 transition-colors hover:text-primary"
            >
              Email: info@buniaga-hidroponik.my.id
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Buniaga Hidroponik. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
