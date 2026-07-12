import Link from 'next/link'
import { LayoutDashboard, Link2, Star, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-gray-100 bg-white flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3 text-xl font-bold tracking-tight text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-primary"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        Snip
      </div>
      
      <nav className="flex-1 px-4 py-2 space-y-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-50 text-primary font-medium text-sm">
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>
        <Link href="/dashboard/snips" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-medium">
          <Link2 className="w-4 h-4" />
          All Snips
        </Link>
        <Link href="/dashboard/favorites" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-medium">
          <Star className="w-4 h-4" />
          Favorites
        </Link>
      </nav>

      <div className="px-4 py-2 space-y-1 mb-4">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-medium">
          <Settings className="w-4 h-4" />
          Settings
        </Link>
      </div>

      <div className="p-4 border-t border-gray-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 leading-tight">Arjun Sharma</span>
          <span className="text-[13px] text-gray-500 leading-tight">arjun@example.com</span>
        </div>
      </div>
    </aside>
  )
}
