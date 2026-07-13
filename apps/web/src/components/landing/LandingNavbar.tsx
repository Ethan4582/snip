"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import logo from '../../../assets/logo.png'

export default function LandingNavbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session)
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed left-0 right-0 z-[50] flex justify-center w-full px-4 transition-all duration-300 ${scrolled ? 'top-4' : 'top-0 px-0'}`}>
      <div className={`flex items-center justify-between w-full h-16 px-6 transition-all duration-300 ${
        scrolled 
          ? 'max-w-[760px] bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm' 
          : 'max-w-[1200px] bg-transparent border-transparent border-b border-b-transparent rounded-none'
      }`}>
        
        <div className="flex items-center gap-2">
          <img src={logo.src} alt="Snip Logo" className="h-8 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="font-medium text-gray-700 hover:text-black transition-colors">Features</a>
          <a href="#docs" className="font-medium text-gray-700 hover:text-black transition-colors">Docs</a>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push(isLoggedIn ? '/dashboard' : '/login')} 
            className="group flex items-center gap-2 bg-[#ff6201] text-white px-5 py-2 rounded-lg font-semibold shadow-sm hover:bg-[#e05600] transition-colors"
          >
            {isLoggedIn ? 'Dashboard' : 'Try Snip'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2.5" 
              strokeLinecap="round" strokeLinejoin="round" 
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  )
}
