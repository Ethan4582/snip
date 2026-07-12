"use client"
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { StatCard } from '@/components/StatCard'
import { ClicksChart } from '@/components/ClicksChart'
import { BreakdownCard } from '@/components/BreakdownCard'
import { TopLinksTable } from '@/components/TopLinksTable'
import { RecentSnipsTable } from '@/components/RecentSnipsTable'
import { CreateSnipDialog } from '@/components/CreateSnipDialog'
import { MousePointerClick, Link2, TrendingUp } from 'lucide-react'
import type { Url } from '@snip/shared'
import { StatCardSkeleton } from '@/components/skeletons/StatCardSkeleton'
import { ChartSkeleton } from '@/components/skeletons/ChartSkeleton'

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/login')
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push('/login')
    })
    return () => subscription.unsubscribe()
  }, [router])

  const fetchDashboardData = useCallback(async () => {
    try {
      const [
        sumData, dailyData, 
        countriesData, referrersData, devicesData, 
        topLinksData, snipsData
      ] = await Promise.all([
        apiFetch('/analytics/summary').catch(() => ({ total_clicks: 0, total_snips: 0, avg_clicks: 0 })),
        apiFetch('/analytics/daily').catch(() => []),
        apiFetch('/analytics/breakdown?by=country').catch(() => []),
        apiFetch('/analytics/breakdown?by=referrer').catch(() => []),
        apiFetch('/analytics/breakdown?by=device').catch(() => []),
        apiFetch('/analytics/top-links').catch(() => []),
        apiFetch<Url[]>('/urls').catch(() => [])
      ])

      setSummary(sumData as any)
      setDaily(dailyData as any)
      setCountries(countriesData as any)
      setReferrers(referrersData as any)
      setDevices(devicesData as any)
      setTopLinks(topLinksData as any)
      
      // Match clicks to recent snips
      const topLinksMap = new Map((topLinksData as any[]).map(t => [t.short_code, t.clicks]))
      const enrichedSnips = (snipsData as Url[]).slice(0, 10).map(snip => ({
        ...snip,
        clicks: topLinksMap.get(snip.short_code) || 0
      }))
      setRecentSnips(enrichedSnips)

    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchDashboardData()
  }, [fetchDashboardData])

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
            <p className="text-gray-500 mt-1">An overview of your links and activity.</p>
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
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1">An overview of your links and activity.</p>
        </div>
        <div className="flex gap-3">
          <CreateSnipDialog />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Clicks" 
          value={summary.total_clicks >= 1000 ? (summary.total_clicks/1000).toFixed(1) + 'K' : summary.total_clicks}
          icon={<MousePointerClick className="w-5 h-5" />} 
        />
        <StatCard 
          title="Total Snips" 
          value={summary.total_snips >= 1000 ? (summary.total_snips/1000).toFixed(1) + 'K' : summary.total_snips}
          icon={<Link2 className="w-5 h-5" />} 
        />
        <StatCard 
          title="Avg. Clicks / Snip" 
          value={summary.avg_clicks}
          icon={<TrendingUp className="w-5 h-5" />} 
        />
      </div>

      {/* Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[350px]">
          <ClicksChart data={daily} />
        </div>
        <div className="h-[350px]">
          <BreakdownCard title="Top Countries" data={countries} />
        </div>
      </div>

      {/* Breakdown Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-[350px]">
          <BreakdownCard title="Top Referrers" data={referrers} />
        </div>
        <div className="h-[350px]">
          <BreakdownCard title="Top Devices" data={devices} />
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopLinksTable data={topLinks} />
        <RecentSnipsTable data={recentSnips} />
      </div>
    </div>
  )
}
