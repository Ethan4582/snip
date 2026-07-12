"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { LayoutDashboard, Link2, Star, Settings, PanelLeftClose, PanelLeftOpen, LogOut } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { supabase } from '@/lib/supabase'
import logo from '../../assets/logo.png'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [user, setUser] = useState<{ email: string; name: string; initials: string } | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) {
        const email = user.email
        const name = email.split('@')[0]
        const initials = name.substring(0, 2).toUpperCase()
        setUser({ email, name, initials })
      }
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <aside className={`shrink-0 h-screen border-r border-gray-100 bg-white flex flex-col sticky left-0 top-0 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-16 items-center py-6'}`}>
      
      {/* Header */}
      {isOpen ? (
        <div className="p-6 flex items-center justify-between w-full">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
            <img src={logo.src} alt="Snip Logo" className="w-7 h-7 object-contain" />
            Snip
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-md text-gray-400">
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 mb-8">
          <PanelLeftOpen className="w-5 h-5" />
        </button>
      )}
      
      {/* Navigation */}
      <nav className={`flex-1 ${isOpen ? 'px-4' : 'px-2'} py-2 space-y-1 w-full`}>
        <Link href="/dashboard" className={`flex items-center ${isOpen ? 'gap-3 px-3 py-2' : 'justify-center p-2'} rounded-lg transition-colors text-sm font-medium ${pathname === '/dashboard' ? 'bg-orange-50 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`} title="Dashboard">
          <LayoutDashboard className={isOpen ? 'w-4 h-4' : 'w-5 h-5'} />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link href="/dashboard/snips" className={`flex items-center ${isOpen ? 'gap-3 px-3 py-2' : 'justify-center p-2'} rounded-lg transition-colors text-sm font-medium ${pathname === '/dashboard/snips' ? 'bg-orange-50 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`} title="All Snips">
          <Link2 className={isOpen ? 'w-4 h-4' : 'w-5 h-5'} />
          {isOpen && <span>All Snips</span>}
        </Link>
        <Link href="/dashboard/favorites" className={`flex items-center ${isOpen ? 'gap-3 px-3 py-2' : 'justify-center p-2'} rounded-lg transition-colors text-sm font-medium ${pathname === '/dashboard/favorites' ? 'bg-orange-50 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`} title="Favorites">
          <Star className={isOpen ? 'w-4 h-4' : 'w-5 h-5'} />
          {isOpen && <span>Favorites</span>}
        </Link>
        <Link href="/dashboard/settings" className={`flex items-center ${isOpen ? 'gap-3 px-3 py-2' : 'justify-center p-2'} rounded-lg transition-colors text-sm font-medium ${pathname === '/dashboard/settings' ? 'bg-orange-50 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`} title="Settings">
          <Settings className={isOpen ? 'w-4 h-4' : 'w-5 h-5'} />
          {isOpen && <span>Settings</span>}
        </Link>
      </nav>

      {/* Profile / Logout */}
      <TooltipProvider delayDuration={100}>
        <div className={`border-t border-gray-100 flex items-center justify-between w-full ${isOpen ? 'p-4' : 'p-2 justify-center'}`}>
          
          <div className="flex items-center gap-3 overflow-hidden">
            {isOpen ? (
              <>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm shrink-0 shadow-sm">
                  {user ? user.initials : 'A'}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-gray-900 leading-tight truncate">
                    {user ? user.name : 'Loading...'}
                  </span>
                  <span className="text-[13px] text-gray-500 leading-tight truncate">
                    {user ? user.email : '...'}
                  </span>
                </div>
              </>
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm shrink-0 mx-auto shadow-sm">
                {user ? user.initials : 'A'}
              </div>
            )}
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={handleLogout} 
                className={`${isOpen ? 'p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-md transition-colors' : 'absolute right-[-10px] bg-white border border-gray-100 p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-md transition-colors shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:-translate-x-8 z-50'}`}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={10} className="bg-gray-900 text-white border-gray-800">
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

    </aside>
  )
}
