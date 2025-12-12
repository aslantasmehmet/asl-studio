'use client';
 

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-3"></div>
          <span className="uppercase tracking-widest text-xs sm:text-sm opacity-80">Yenileniyor...</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Yapım Aşamasında</h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">Yeni deneyim üzerinde çalışıyoruz. Çok yakında buradayız.</p>
        <div className="mt-8 text-sm text-gray-400">hello@madebyasl.com</div>
      </div>
    </main>
  );
}
