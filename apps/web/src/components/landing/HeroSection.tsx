"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url) {
      router.push('/login')
    }
  }

  return (
    <div className="relative pt-[180px] pb-10 flex flex-col items-center w-full px-4">
      {/* Background Decorative Circles/Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden flex justify-center">
        <img 
          src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff0aee0dffd2da36a3f20523b4793d7f2916798ae.svg?generation=1783850838681894&alt=media" 
          className="w-full h-[800px] object-cover object-top opacity-50 max-w-[1400px]" 
          alt="" 
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-[800px] text-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[56px] md:text-[72px] tracking-tight leading-[1.05]">
            Snip anything.<br/>
            <span className="text-[#ff6201]">Find it forever.</span>
          </h1>
          <p className="text-gray-600 text-[18px] md:text-[20px] max-w-[600px] mx-auto leading-relaxed mt-2">
            Capture links, organize them beautifully, and access anytime, anywhere.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-[640px] bg-white p-2 rounded-xl border border-gray-200 shadow-lg mt-4">
          <input
            type="url"
            placeholder="Paste a link and press Snip..."
            className="flex-1 h-14 bg-transparent px-4 text-[16px] outline-none placeholder:text-gray-400 focus:ring-0 border-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="h-14 bg-[#ff6201] px-10 text-[16px] font-semibold text-white rounded-lg shadow-sm hover:bg-[#e05600] transition-colors"
          >
            Snip
          </button>
        </form>
        
        
      </div>
      
      {/* Dashboard Preview Image */}
      <div className="relative z-10 w-full max-w-[1040px] mt-16 px-4">
        <div className="w-full aspect-[1.7/1] md:aspect-[1.92/1] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white relative">
          <img 
            src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F06004201aefafa88530c2f7e8245aa5933cffc82.png?generation=1783850838670922&alt=media" 
            className="absolute inset-0 w-full h-full object-cover object-top" 
            alt="Dashboard Preview" 
          />
        </div>
      </div>
    </div>
  )
}
