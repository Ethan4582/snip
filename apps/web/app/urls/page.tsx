"use client"
import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { StatCard } from '@/components/StatCard'
import { SearchBar } from '@/components/SearchBar'
import { SnipsTable } from '@/components/SnipsTable'
import type { Url } from '@snip/shared'

type SnipRow = Url & { clicks?: number }
import { StatCardSkeleton } from '@/components/skeletons/StatCardSkeleton'
import { TableSkeleton } from '@/components/skeletons/TableRowSkeleton'
import { MousePointerClick, Link2, CalendarPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { Suspense } from 'react'

function AllSnipsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const query = searchParams.get('q') || ''
  const limit = 10

  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ total_snips: 0, total_clicks: 0, this_month: 0 })
  const [urls, setUrls] = useState<SnipRow[]>([])
  const [totalUrls, setTotalUrls] = useState(0)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/login')
    })
  }, [router])

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      // Fetch stats once or on page load
      const [sumData, urlsData] = await Promise.all([
        apiFetch('/analytics/summary').catch(() => ({ total_clicks: 0, total_snips: 0 })),
        apiFetch(`/urls?page=${page}&limit=${limit}`).catch(() => ({ data: [], total: 0 }))
      ])

      // We can calculate links created this month from the full urls list if we had it,
      // but without a specific endpoint, we can just use the total snips for now or mock it.
      setStats({
        total_snips: (sumData as any).total_snips || 0,
        total_clicks: (sumData as any).total_clicks || 0,
        this_month: (sumData as any).total_snips || 0 // Approximate if we don't have a specific endpoint
      })

      let rows = ((urlsData as any).data || []) as SnipRow[]
      setTotalUrls((urlsData as any).total || 0)

      // Client side search if query exists
      if (query) {
        rows = rows.filter(r => 
          r.short_code.includes(query) || 
          r.long_url.includes(query) || 
          (r.custom_alias && r.custom_alias.includes(query))
        )
      }

      if (rows.length > 0) {
        // Fetch clicks for this page
        const shortCodes = rows.map(r => r.short_code).join(',')
        const clicksData = await apiFetch(`/analytics/bulk-summary?short_codes=${shortCodes}`).catch(() => ({}))
        rows = rows.map(r => ({
          ...r,
          clicks: (clicksData as any)[r.short_code] || 0
        }))
      }

      setUrls(rows)
    } finally {
      setLoading(false)
    }
  }, [page, query])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', newPage.toString())
    router.push(`?${params.toString()}`)
  }

  const totalPages = Math.ceil((query ? urls.length : totalUrls) / limit)

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">All Snips</h1>
          <p className="text-gray-500 mt-1">Manage and track all your shortened links.</p>
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
              title="Total Snips" 
              value={stats.total_snips}
              icon={<Link2 className="w-5 h-5" />} 
            />
            <StatCard 
              title="Total Clicks" 
              value={stats.total_clicks >= 1000 ? (stats.total_clicks/1000).toFixed(1) + 'K' : stats.total_clicks}
              icon={<MousePointerClick className="w-5 h-5" />} 
            />
            <StatCard 
              title="Links Created This Month" 
              value={stats.this_month}
              icon={<CalendarPlus className="w-5 h-5" />} 
            />
          </>
        )}
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <SearchBar placeholder="Search by alias or original URL..." />
        </div>

        {loading && !urls.length ? (
          <div className="rounded-md border p-4">
            <div className="w-full">
               <TableSkeleton columns={5} rows={5} />
            </div>
          </div>
        ) : (
          <>
            <SnipsTable />
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-6 gap-2">
                <Button 
                  variant="outline" 
                  disabled={page === 1}
                  onClick={() => handlePageChange(page - 1)}
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-500">
                  Page {page} of {totalPages}
                </span>
                <Button 
                  variant="outline" 
                  disabled={page >= totalPages}
                  onClick={() => handlePageChange(page + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  )
}

export default function AllSnipsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-gray-500 max-w-7xl mx-auto">Loading...</div>}>
      <AllSnipsContent />
    </Suspense>
  )
}
