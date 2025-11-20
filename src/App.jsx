import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [hero, setHero] = useState({ title: 'Pride Fashion', subtitle: 'Bold. Modern. You.', cta: 'Shop Now', image: '' })
  const [trending, setTrending] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/api/home`).then(r => r.json()).then(data => {
      setHero(data.hero)
      setTrending(data.trending || [])
    }).catch(() => {})
  }, [])

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i._id === item._id)
      if (exists) {
        return prev.map(i => i._id === item._id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const affiliateClick = async (item) => {
    try {
      const res = await fetch(`${baseUrl}/api/affiliate/click/${item._id}`, { method: 'POST' })
      const data = await res.json()
      if (data.redirect) {
        window.open(data.redirect, '_blank')
      }
    } catch (e) {}
  }

  return (
    <div className="min-h-screen bg-[#fff]">
      <Navbar cartCount={cart.reduce((a,b)=>a+b.qty,0)} onLoginClick={() => alert('Login page coming soon')} />
      <Hero hero={hero} onShop={() => window.location.hash = '#trending'} />

      <section id="trending" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending</h2>
            <a className="text-sm text-[#e91e63]" href="#collections">View all</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trending.map(item => (
              <ProductCard key={item._id} item={item} onAddToCart={addToCart} onAffiliate={affiliateClick} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-[#111] text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-extrabold">About Pride Fashion</h3>
            <p className="mt-4 text-white/80">We blend modern silhouettes with bold color to celebrate individuality. Built with love in pink and black.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 ring-1 ring-white/10">
            <ul className="space-y-2 text-white/80 list-disc pl-5">
              <li>Owned and affiliate products</li>
              <li>Secure checkout</li>
              <li>Wishlist and user accounts</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-10 text-center bg-white">
        <p className="text-gray-600">© {new Date().getFullYear()} Pride Fashion</p>
      </footer>
    </div>
  )
}

export default App
