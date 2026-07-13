"use client"
import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { StatCard } from '@/components/StatCard'
import { ClicksChart } from '@/components/ClicksChart'
import { BreakdownCard } from '@/components/BreakdownCard'
import { TopLinksTable } from '@/components/TopLinksTable'
import { RecentSnipsTable } from '@/components/RecentSnipsTable'
import { CreateSnipDialog } from '@/components/CreateSnipDialog'
import { DateRangeFilter } from '@/components/DateRangeFilter'
import { MousePointerClick, Link2, TrendingUp } from 'lucide-react'
import type { Url } from '@snip/shared'
import { StatCardSkeleton } from '@/components/skeletons/StatCardSkeleton'
import { ChartSkeleton } from '@/components/skeletons/ChartSkeleton'
import { format, subDays } from 'date-fns'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  
  const [summary, setSummary] = useState({ total_clicks: 0, total_snips: 0, avg_clicks: 0 })
  const [daily, setDaily] = useState([])
  const [countries, setCountries] = useState([])
  const [referrers, setReferrers] = useState([])
  const [devices, setDevices] = useState([])
  const [topLinks, setTopLinks] = useState([])
  const [recentSnips, setRecentSnips] = useState<Url[]>([])
  const hasFetched = useRef(false)

  const [dateRange, setDateRange] = useState({ 
    from: subDays(new Date(), 30), 
    to: new Date() 
  })
  const [granularity, setGranularity] = useState('day')

  const fetchDashboardData = useCallback(async () => {
    try {
      const queryParams = `?from=${dateRange.from.toISOString()}&to=${dateRange.to.toISOString()}`
      
      const [
        sumData, dailyData, 
        countriesData, referrersData, devicesData, 
        topLinksData, snipsData
      ] = await Promise.all([
        apiFetch(`/analytics/summary${queryParams}`).catch(() => ({ total_clicks: 0, total_snips: 0, avg_clicks: 0 })),
        apiFetch(`/analytics/daily${queryParams}&granularity=${granularity}`).catch(() => []),
        apiFetch(`/analytics/breakdown${queryParams}&by=country`).catch(() => []),
        apiFetch(`/analytics/breakdown${queryParams}&by=referrer`).catch(() => []),
        apiFetch(`/analytics/breakdown${queryParams}&by=device`).catch(() => []),
        apiFetch(`/analytics/top-links${queryParams}`).catch(() => []),
        apiFetch<{ data: Url[], total: number }>('/urls').catch(() => ({ data: [], total: 0 }))
      ])

      setSummary(sumData as any)
      setDaily(dailyData as any)
      setCountries(countriesData as any)
      setReferrers(referrersData as any)
      setDevices(devicesData as any)
      setTopLinks(topLinksData as any)
      
      // Match clicks to recent snips
      const topLinksMap = new Map((topLinksData as any[]).map(t => [t.short_code, t.clicks]))
      const enrichedSnips = (snipsData.data || []).slice(0, 5).map(snip => ({
        ...snip,
        clicks: topLinksMap.get(snip.short_code) || 0
      }))
      setRecentSnips(enrichedSnips)

    } finally {
      setLoading(false)
    }
  }, [dateRange, granularity])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      fetchDashboardData()
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) { router.push('/login'); return }
      fetchDashboardData()
    })

    const handleSnipCreated = () => fetchDashboardData()
    window.addEventListener('snipCreated', handleSnipCreated)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('snipCreated', handleSnipCreated)
    }
  }, [router, fetchDashboardData])

  if (loading) {
    return (
      <div className="p-8 max-w-[1400px] mx-auto space-y-8 bg-[#fafafa] min-h-screen">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
            <p className="text-gray-500 mt-1 text-sm">An overview of your links and activity.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[350px]">
            <ChartSkeleton />
          </div>
          <div className="h-[350px]">
            <ChartSkeleton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-6 bg-[#fafafa] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1 text-sm">An overview of your links and activity.</p>
        </div>
        <div className="flex gap-3 items-center">
          <DateRangeFilter onRangeChange={setDateRange} />
          <CreateSnipDialog />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Total Clicks" 
          value={summary.total_clicks >= 1000 ? (summary.total_clicks/1000).toFixed(1) + 'K' : summary.total_clicks}
          icon={<MousePointerClick className="w-5 h-5 text-[#ff5f00]" />} 
        />
        <StatCard 
          title="Total Snips" 
          value={summary.total_snips >= 1000 ? (summary.total_snips/1000).toFixed(1) + 'K' : summary.total_snips}
          icon={<Link2 className="w-5 h-5 text-[#fdb140]" />} 
        />
        <StatCard 
          title="Avg. Clicks / Snip" 
          value={summary.avg_clicks}
          icon={<TrendingUp className="w-5 h-5 text-[#10b981]" />} 
        />
      </div>

      {/* Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ClicksChart data={daily} granularity={granularity} onGranularityChange={setGranularity} />
        </div>
        <div>
          <BreakdownCard title="Top Countries" data={countries} />
        </div>
      </div>

      {/* Breakdown Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <BreakdownCard title="Top Referrers" data={referrers} />
        </div>
        <div>
          <BreakdownCard title="Top Devices" data={devices} />
        </div>
        <div>
          <TopLinksTable data={topLinks} />
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1">
        <RecentSnipsTable data={recentSnips} />
      </div>
    </div>
  )
}