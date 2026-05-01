// @ts-nocheck
"use client"
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  ShieldCheck,
  HardHat,
  Settings,
  Wrench,
  Star,
  Ruler,
  CheckCircle2
} from "lucide-react";

const WA_NUMBER = "628xxxxxxxxxx"; // <-- GANTI DENGAN NOMOR ASLI ANDA NANTI

export default function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("las");

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = (text) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  const portfolioData = {
    las: [
      {
        title: "Pagar Minimalis Modern",
        img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Kanopi Baja Ringan",
        img: "https://images.unsplash.com/photo-1533088034057-a1622384a323?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Railing Tangga Custom",
        img: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop",
      },
    ],
    renovasi: [
      {
        title: "Renovasi Kamar",
        img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Perbaikan Fasad Rumah",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Finishing Interior",
        img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
      },
    ],
    motor: [
      {
        title: "Cat Body Motor",
        img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Custom Velg & Kaki-kaki",
        img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Modifikasi Tampilan",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop",
      },
    ],
  };

  const services = [
    {
      icon: ShieldCheck,
      title: "Pagar Besi",
      desc: "Pembuatan pagar kuat, aman, dan estetis untuk hunian Anda.",
    },
    {
      icon: HardHat,
      title: "Kanopi",
      desc: "Pemasangan kanopi kokoh untuk garasi, teras, & area parkir.",
    },
    {
      icon: Ruler,
      title: "Railing & Tangga",
      desc: "Desain presisi dengan hasil akhir yang modern dan rapi.",
    },
    {
      icon: Wrench,
      title: "Konstruksi Baja",
      desc: "Struktur baja kuat untuk keperluan bangunan besar/gudang.",
    },
    {
      icon: Settings,
      title: "Renovasi Rumah",
      desc: "Jasa perbaikan dan pembangunan skala ringan hingga menengah.",
    },
    {
      icon: Star,
      title: "Cat & Modif Motor",
      desc: "Repaint body, velg, dan restorasi tampilan motor kesayangan.",
    },
  ];

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen selection:bg-yellow-400 selection:text-black font-sans w-full overflow-x-hidden">
      
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#beranda" className="font-extrabold text-2xl tracking-tighter">
            YSP<span className="text-yellow-400">PROJECT</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#beranda" className="text-zinc-300 hover:text-yellow-400 transition-colors">Beranda</a>
            <a href="#layanan" className="text-zinc-300 hover:text-yellow-400 transition-colors">Layanan</a>
            <a href="#portfolio" className="text-zinc-300 hover:text-yellow-400 transition-colors">Portfolio</a>
            <a 
              href="#kontak" 
              className="bg-yellow-400 text-black px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-transform hover:scale-105 active:scale-95 font-semibold"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            className="md:hidden text-zinc-300 hover:text-white transition-colors focus:outline-none"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col px-6 gap-2">
            <a href="#beranda" onClick={() => setIsMobileOpen(false)} className="py-2.5 text-zinc-300 hover:text-yellow-400 border-b border-zinc-800/50">Beranda</a>
            <a href="#layanan" onClick={() => setIsMobileOpen(false)} className="py-2.5 text-zinc-300 hover:text-yellow-400 border-b border-zinc-800/50">Layanan</a>
            <a href="#portfolio" onClick={() => setIsMobileOpen(false)} className="py-2.5 text-zinc-300 hover:text-yellow-400 border-b border-zinc-800/50">Portfolio</a>
            <a href="#kontak" onClick={() => setIsMobileOpen(false)} className="py-2.5 text-yellow-400 font-semibold">Hubungi Kami</a>
          </div>
        </div>
      </nav>

      <main className="w-full">
        {/* ================= HERO ================= */}
        <section id="beranda" className="relative w-full min-h-screen flex items-center justify-center text-center px-6 pt-24 overflow-hidden">
          {/* Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm mb-8 font-medium">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Pabrikasi, Renovasi & Modifikasi
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Solusi Terbaik Untuk <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Konstruksi & Besi
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed mb-10">
              Dari pembuatan pagar & kanopi, renovasi rumah, hingga modifikasi visual motor Anda. Semua dikerjakan dengan rapi, presisi, dan profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a
                href={waLink("Halo admin YSP, saya ingin konsultasi terkait jasa yang ditawarkan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:-translate-y-1 active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center gap-2"
              >
                Konsultasi Gratis <ArrowRight size={18} />
              </a>

              <a 
                href="#portfolio" 
                className="bg-zinc-900 border border-zinc-700 px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 hover:border-zinc-500 transition-all flex items-center justify-center"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* ================= LAYANAN ================= */}
        <section id="layanan" className="py-24 w-full px-6 border-t border-zinc-900">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Kami menyediakan berbagai macam layanan yang ditangani langsung oleh tenaga ahli berpengalaman.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {services.map((item: any, i: number) => (
                <div 
                  key={i} 
                  className="bg-zinc-900/50 w-full p-8 rounded-2xl border border-zinc-800 hover:border-yellow-400/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className="bg-zinc-950 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-yellow-400 w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-zinc-100">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section id="portfolio" className="py-24 w-full px-6 bg-zinc-900/30 border-y border-zinc-900">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Proyek</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Beberapa hasil kerja nyata dari tim kami.</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: "las", label: "Pabrikasi Besi" }, 
                { id: "renovasi", label: "Renovasi Rumah" }, 
                { id: "motor", label: "Modifikasi Motor" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                    activeTab === tab.id
                      ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid - Key prop triggers re-render animation when tab changes */}
            <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
              {portfolioData[activeTab].map((item, i) => (
                <div key={i} className="relative w-full h-80 rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Gradient Overlay & Text Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="w-12 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="kontak" className="py-24 w-full px-6 relative">
          <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 md:p-16 text-center text-zinc-950 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 w-full flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Butuh Jasa Kami Segera?
              </h2>
              <p className="font-medium text-lg mb-10 max-w-2xl mx-auto text-zinc-900 leading-relaxed">
                Jangan ragu untuk menghubungi kami. Tim kami siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <a
                  href={waLink("Halo admin YSP, saya ingin konsultasi mengenai jasa Anda.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-950 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone size={20} className="text-yellow-400" /> Hubungi WhatsApp
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold text-zinc-900">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={18}/> Respon Cepat</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={18}/> Konsultasi Gratis</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-10 w-full px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold tracking-tighter">
            YSP<span className="text-yellow-400">PROJECT</span>
          </div>
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} YSP Project. Solusi Konstruksi & Fabrikasi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}