"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../../src/lib/supabase'
import logo from '../../assets/logo.png'
import authBg from '../../assets/auth.png'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    router.push('/dashboard')
  }

  const handleGoogleSignIn = async () => {
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })
    if (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex w-full bg-white font-sans antialiased overflow-hidden">
      {/* Left Column (Branding) */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-1/2 flex-col justify-between p-10 xl:p-14 relative overflow-hidden bg-[#fbfaf9] border-r border-gray-100">
        
        <div className="flex flex-col z-10 mb-auto">
          {/* Top Logo */}
          <div className="relative flex items-center gap-2">
            <img src={logo.src} alt="Snip Logo" className="h-7 w-auto" />
          </div>
          
          {/* Main Text Content */}
          <div className="relative flex flex-col gap-5 max-w-[440px] mt-12">
            <h1 className="font-bold text-[44px] md:text-[52px] tracking-tight leading-[1.05] text-gray-900">
              One link,<br />
              <span className="text-[#ff6201]">endless possibilities.</span>
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed pr-10">
              Capture, organize, and access your links anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Decorative Background Illustration */}
        <div 
          className="absolute right-[-5%] top-[15%] z-0 w-[110%] h-[75%] bg-no-repeat bg-right-top bg-contain opacity-100"
          style={{ backgroundImage: `url(${authBg.src})` }}
        />

        {/* Bottom Trust Badge */}
        <div className="relative z-10 flex items-center gap-2 text-gray-500 text-[14px] font-medium pb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          Secure. Private. Always yours.
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-[420px] bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-[26px] font-bold text-gray-900 tracking-tight mb-2">Create an account</h2>
            <p className="text-[15px] text-gray-500">Sign up to get started with Snip</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 h-[46px] border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ff6201]/20 focus:border-[#ff6201] transition-all bg-gray-50/50"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-[14px] font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 h-[46px] border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ff6201]/20 focus:border-[#ff6201] transition-all bg-gray-50/50"
              />
            </div>
            
            {error && <p className="text-[13.5px] text-red-600 font-medium pt-1">{error}</p>}
            
            <button
              id="signup-submit"
              type="submit"
              disabled={loading}
              className="w-full h-[46px] bg-[#0a0f29] text-white text-[14px] font-semibold rounded-xl hover:bg-black disabled:opacity-70 transition-all shadow-sm mt-3"
            >
              {loading ? 'Creating account…' : 'Sign up'}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center relative">
            <div className="w-full border-t border-gray-100"></div>
            <div className="absolute px-4 text-[13px] font-medium text-gray-400 bg-white">or</div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="mt-8 w-full h-[46px] bg-white border border-gray-200 text-gray-700 text-[14px] font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-sm flex justify-center items-center gap-2"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z" />
            </svg>
            Sign up with Google
          </button>

          <p className="mt-10 text-center text-[14px] text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="text-[#ff6201] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
