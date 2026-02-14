import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

const PROBLEM_ITEMS = [
  "Supply sayur tidak stabil",
  "Harga sering berubah",
  "Kualitas tidak konsisten",
  "Harus sering ganti supplier",
];

const SOLUTION_ITEMS = [
  "Produksi sesuai kebutuhan volume",
  "Jadwal panen terencana",
  "Kualitas konsisten",
  "Harga lebih predictable",
];

const STEPS = [
  { num: 1, label: "Konsultasi kebutuhan" },
  { num: 2, label: "Rancang kontrak supply" },
  { num: 3, label: "Lahan dialokasikan khusus" },
  { num: 4, label: "Panen rutin & pengiriman" },
];

const TARGET_BUSINESS = [
  "Restaurant & Cafe",
  "Hotel",
  "Catering Perusahaan",
  "Supermarket Premium",
  "Meal Prep Service",
];

const CALENDLY_URL = "https://calendly.com/uniqfadilah/new-meeting";

const WHY_ITEMS = [
  { title: "Dedicated Production", description: "Lahan dan produksi dialokasikan khusus untuk bisnis Anda, bukan sistem retail." },
  { title: "Supply Reliability", description: "Jadwal panen terencana dan pengiriman rutin untuk supply yang stabil." },
  { title: "Business-focused Pricing", description: "Harga lebih predictable dengan kontrak jangka menengah." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <Section id="problem" background="gray">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apakah bisnis Anda mengalami masalah ini?
          </h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-3 text-center text-gray-600">
            {PROBLEM_ITEMS.map((item) => (
              <li key={item} className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-foreground">
            Kami membangun sistem produksi khusus untuk menghilangkan masalah
            ini.
          </p>
        </Section>

        <Section id="solution" background="white">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kebun hidroponik khusus untuk bisnis Anda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Model produksi berbasis kontrak: kami mengalokasikan lahan dan
            jadwal panen sesuai kebutuhan Anda.
          </p>
          <ul className="mx-auto mt-10 max-w-xl space-y-3 text-center text-gray-600">
            {SOLUTION_ITEMS.map((item) => (
              <li key={item} className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="how-it-works" background="primary-soft">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cara Kerja
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl border border-gray-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white">
                  {step.num}
                </span>
                <p className="mt-4 font-medium text-foreground">{step.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="target" background="white">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cocok untuk bisnis seperti:
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TARGET_BUSINESS.map((name) => (
              <div
                key={name}
                className="rounded-3xl border border-gray-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <p className="font-semibold text-foreground">{name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="why" background="gray">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mengapa memilih Buniaga Hidroponik?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>

        <Section id="cta" background="primary-soft">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Siap mengamankan supply sayur bisnis Anda?
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl bg-primary px-8 py-4 text-center text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-dark hover:shadow-lg sm:w-auto"
              >
                Jadwalkan Konsultasi Supply
              </a>
              <a
                href="https://wa.me/6285720736221?text=Halo%20saya%20dari%20website%20buniaga-hidroponik%20ingin%20berkonsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-2xl border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white sm:w-auto"
              >
                Hubungi WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Konsultasi gratis tanpa komitmen.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
