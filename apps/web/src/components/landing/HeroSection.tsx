"use client"

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import bg from '../../../assets/bg.png'
import L1 from '../../../assets/l1.png'
import L2 from '../../../assets/l2.png'
import L3 from '../../../assets/l3.png'
import L4 from '../../../assets/l4.png'

export default function HeroSection() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const rotateX = useTransform(scrollY, [0, 500], [15, 0])
  const scale = useTransform(scrollY, [0, 500], [0.95, 1])
  const opacity = useTransform(scrollY, [0, 500], [0.8, 1])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url) {
      router.push('/login')
    }
  }

  return (
    <div ref={containerRef} className="relative pt-[140px] pb-10 flex flex-col items-center w-full px-4 overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50 bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: `url(${bg.src})` }}
      />

      {/* Floating Icons */}
      {/* Top-Left: Link (L1) */}
      <motion.div
        className="hidden md:block absolute left-[10%] top-[20%] w-24 h-24 z-20 pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={L1.src} alt="Link icon" className="w-full h-full object-contain" />
      </motion.div>

      {/* Bottom-Left: Analytics (L3) */}
      <motion.div
        className="hidden md:block absolute left-[8%] top-[45%] w-24 h-24 z-20 pointer-events-none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <img src={L3.src} alt="Analytics icon" className="w-full h-full object-contain" />
      </motion.div>

      {/* Top-Right: Lightning (L2) */}
      <motion.div
        className="hidden md:block absolute right-[12%] top-[24%] w-24 h-24 z-20 pointer-events-none"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <img src={L2.src} alt="Lightning icon" className="w-full h-full object-contain" />
      </motion.div>

      {/* Bottom-Right: Pie Chart (L4) */}
      <motion.div
        className="hidden md:block absolute right-[10%] top-[54%] w-24 h-24 z-20 pointer-events-none"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <img src={L4.src} alt="Pie Chart icon" className="w-full h-full object-contain" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full max-w-[800px] text-center gap-6"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[56px] md:text-[68px] tracking-tight leading-[1.05]">
            Snip anything.<br/>
            <span className="text-[#ff6201]">Find it forever.</span>
          </h1>
          <p className="text-gray-600 text-[18px] max-w-[500px] mx-auto leading-relaxed mt-2">
            Capture, organize, and access your links instantly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-[540px] bg-white p-1.5 rounded-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
          <input
            type="url"
            placeholder="Paste a link and press Snip..."
            className="flex-1 h-12 bg-transparent px-4 text-[15px] outline-none placeholder:text-gray-400 focus:ring-0 border-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="h-12 bg-[#ff6201] px-8 text-[15px] font-semibold text-white rounded-lg shadow-sm hover:bg-[#e05600] transition-colors active:scale-95"
          >
            Snip
          </button>
        </form>
        
      </motion.div>
      
      {/* Dashboard Preview Image */}
      <motion.div 
        style={{ rotateX, scale, opacity }}
        className="relative z-10 w-full max-w-[900px] mt-16 px-4"
      >
        <div className="w-full aspect-[1.7/1] md:aspect-[1.92/1] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white relative transition-transform duration-500 ease-out hover:shadow-3xl">
          <img 
            src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F06004201aefafa88530c2f7e8245aa5933cffc82.png?generation=1783850838670922&alt=media" 
            className="absolute inset-0 w-full h-full object-cover object-top" 
            alt="Dashboard Preview" 
          />
        </div>
      </motion.div>
    </div>
  )
}
