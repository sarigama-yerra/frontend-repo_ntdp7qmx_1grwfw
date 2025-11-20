import React from 'react'

export default function ProductCard({ item, onAddToCart, onAffiliate }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={item.image || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80&auto=format&fit=crop'} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description || '—'}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-gray-900">${Number(item.price).toFixed(2)}</span>
          {item.type === 'affiliate' ? (
            <button onClick={() => onAffiliate(item)} className="text-sm bg-[#e91e63] text-white px-3 py-1.5 rounded-full hover:bg-pink-600">Buy</button>
          ) : (
            <button onClick={() => onAddToCart(item)} className="text-sm bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800">Add</button>
          )}
        </div>
      </div>
    </div>
  )
}
