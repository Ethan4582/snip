"use client"
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchBar({ placeholder = "Search links..." }: { placeholder?: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get('q') || ''
  
  const [query, setQuery] = useState(currentQuery)

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (query) {
        params.set('q', query)
      } else {
        params.delete('q')
      }
      // Reset to page 1 on search
      params.delete('page')
      
      router.push(`?${params.toString()}`)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, router, searchParams])

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 h-10 w-full bg-white"
      />
    </div>
  )
}
