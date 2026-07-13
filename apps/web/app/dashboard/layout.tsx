"use client"

import { useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { supabase } from '@/lib/supabase'
import { CommandMenu } from '@/components/CommandMenu'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        if (window.location.hash.includes('access_token')) {
          window.history.replaceState(null, '', window.location.pathname)
        }
      }
    })
    
    // Also check on mount just in case event already fired
    if (window.location.hash.includes('access_token')) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <Sidebar />
      <main className="flex-1 w-full min-w-0">
        {children}
      </main>
      <CommandMenu />
    </div>
  )
}
