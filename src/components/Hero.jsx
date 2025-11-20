import React from 'react'

export default function Hero({ hero, onShop }) {
  return (
    <section className="relative overflow-hidden bg-[#111] text-white">
      <div className="absolute inset-0 opacity-40" style={{background:'radial-gradient(circle at 20% 20%, #e91e63 0%, transparent 35%), radial-gradient(circle at 80% 0%, #ff9ec2 0%, transparent 30%)'}} />
      <div className="relative container mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{hero.title}</h1>
          <p className="mt-4 text-lg text-white/80">{hero.subtitle}</p>
          <button onClick={onShop} className="mt-8 inline-flex items-center gap-2 bg-[#e91e63] hover:bg-pink-600 text-white px-6 py-3 rounded-full transition">
            {hero.cta}
            <span className="text-white/80">→</span>
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <img src={hero.image} alt="Hero" className="w-full h-[360px] object-cover" />
        </div>
      </div>
    </section>
  )
}
