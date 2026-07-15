"use client"
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { StatCard } from '@/components/StatCard'
import { SnipsTable } from '@/components/SnipsTable'
import type { Url } from '@snip/shared'

type SnipRow = Url & { clicks?: number }
import { StatCardSkeleton } from '@/components/skeletons/StatCardSkeleton'
import { TableSkeleton } from '@/components/skeletons/TableRowSkeleton'
import { Star, TrendingUp, MousePointerClick } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function FavoritesPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ total_favorites: 0, total_clicks: 0, avg_clicks: 0 })
  const [urls, setUrls] = useState<SnipRow[]>([])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/login')
    })
  }, [router])

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const urlsData = await apiFetch(`/urls?is_favorite=true&limit=100`).catch(() => ({ data: [] }))
      let rows = ((urlsData as any).data || []) as SnipRow[]

      if (rows.length > 0) {
        const shortCodes = rows.map(r => r.short_code).join(',')
        const clicksData = await apiFetch(`/analytics/bulk-summary?short_codes=${shortCodes}`).catch(() => ({}))
        
        let totalClicks = 0
        rows = rows.map(r => {
          const clicks = (clicksData as any)[r.short_code] || 0
          totalClicks += clicks
          return { ...r, clicks }
        })

        setStats({
          total_favorites: rows.length,
          total_clicks: totalClicks,
          avg_clicks: Math.round((totalClicks / rows.length) * 10) / 10
        })
      } else {
        setStats({ total_favorites: 0, total_clicks: 0, avg_clicks: 0 })
      }

      setUrls(rows)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Favorites</h1>
          <p className="text-gray-500 mt-1">Quick access to your most important links.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading && !urls.length ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard 
              title="Total Favorites" 
              value={stats.total_favorites}
              icon={<Star className="w-5 h-5 text-yellow-500" />} 
            />
            <StatCard 
              title="Total Clicks" 
              value={stats.total_clicks >= 1000 ? (stats.total_clicks/1000).toFixed(1) + 'K' : stats.total_clicks}
              icon={<MousePointerClick className="w-5 h-5" />} 
            />
            <StatCard 
              title="Avg. Clicks / Favorite" 
              value={stats.avg_clicks}
              icon={<TrendingUp className="w-5 h-5" />} 
            />
          </>
        )}
      </div>

      <Card className="p-6">
        {loading && !urls.length ? (
          <div className="rounded-md border p-4">
            <div className="w-full">
               <TableSkeleton columns={5} rows={5} />
            </div>
          </div>
        ) : (
          <SnipsTable isFavorite={true} />
        )}
      </Card>
    </div>
  )
}
