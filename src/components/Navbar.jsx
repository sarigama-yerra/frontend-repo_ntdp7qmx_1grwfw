import React from 'react'

export default function Navbar({ cartCount, onLoginClick }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl"><span className="text-[#e91e63]">Pride</span> Fashion</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#collections" className="hover:text-black">Collections</a>
          <a href="#trending" className="hover:text-black">Trending</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={onLoginClick} className="text-sm text-gray-700 hover:text-black">Login</button>
          <a href="#cart" className="relative inline-flex items-center">
            <span className="material-icons">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#e91e63] text-white text-xs rounded-full px-1.5">{cartCount}</span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}
