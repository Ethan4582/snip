"use client"
import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { ClicksChart } from '@/components/ClicksChart'
import { BreakdownCard } from '@/components/BreakdownCard'
import { StatCard } from '@/components/StatCard'
import { ChartSkeleton } from '@/components/skeletons/ChartSkeleton'
import { StatCardSkeleton } from '@/components/skeletons/StatCardSkeleton'
import { BreakdownCardSkeleton } from '@/components/skeletons/BreakdownCardSkeleton'
import { MousePointerClick, ArrowLeft, ExternalLink, Link2, TrendingUp, Edit, Trash2, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { format, subDays, differenceInDays } from 'date-fns'
import { DateRangeFilter } from '@/components/DateRangeFilter'
import { EditSnipDialog } from '@/components/EditSnipDialog'
import { DeleteSnipDialog } from '@/components/DeleteSnipDialog'
import type { Url } from '@snip/shared'

export default function AnalyticsPage() {
  const params = useParams()
  const router = useRouter()
  const shortCode = params.short_code as string
  const edgeUrl = process.env.NEXT_PUBLIC_EDGE_URL || 'http://localhost:8787'

  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState({ total_clicks: 0 })
  const [daily, setDaily] = useState<{ date: string, clicks: number }[]>([])
  const [countries, setCountries] = useState([])
  const [referrers, setReferrers] = useState([])
  const [devices, setDevices] = useState([])
  const [urlInfo, setUrlInfo] = useState<Url | null>(null)
  
  const [dateRange, setDateRange] = useState({ 
    from: subDays(new Date(), 30), 
    to: new Date() 
  })
  const [granularity, setGranularity] = useState('day')

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)



  const fetchData = useCallback(async () => {
    try {
      const queryParams = `?from=${dateRange.from.toISOString()}&to=${dateRange.to.toISOString()}`

      const [sumData, dailyData, countriesData, referrersData, devicesData, urlsData] = await Promise.all([
        apiFetch<any>(`/analytics/${shortCode}/summary${queryParams}`).catch(() => ({ total_clicks: 0 })),
        apiFetch<any[]>(`/analytics/${shortCode}/daily${queryParams}&granularity=${granularity}`).catch(() => []),
        apiFetch<any[]>(`/analytics/breakdown${queryParams}&by=country&short_code=${shortCode}`).catch(() => []),
        apiFetch<any[]>(`/analytics/breakdown${queryParams}&by=referrer&short_code=${shortCode}`).catch(() => []),
        apiFetch<any[]>(`/analytics/breakdown${queryParams}&by=device&short_code=${shortCode}`).catch(() => []),
        apiFetch<{ data: any[] }>('/urls').catch(() => ({ data: [] })),
      ])
      
      setSummary(sumData)
      setDaily(dailyData as any)
      setCountries(countriesData as any)
      setReferrers(referrersData as any)
      setDevices(devicesData as any)
      
      const found = urlsData.data?.find((u: any) => u.short_code === shortCode)
      if (found) {
        setUrlInfo(found)
      }
    } finally {
      setLoading(false)
    }
  }, [dateRange, granularity, shortCode])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      fetchData()
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) { router.push('/login'); return }
      fetchData()
    })
    return () => subscription.unsubscribe()
  }, [router, fetchData])

  const handleCopy = () => {
    const url = `${edgeUrl}/${urlInfo?.custom_alias || shortCode}`
    navigator.clipboard.writeText(url)
    toast.success('Link copied to clipboard')
  }

  // Calculate average clicks per day
  const daysSinceCreated = urlInfo?.created_at ? Math.max(1, differenceInDays(new Date(), new Date(urlInfo.created_at))) : 1
  const avgClicksPerDay = Math.round((summary.total_clicks || 0) / daysSinceCreated)

  // Calculate clicks in the last 7 days of the selected range
  const sevenDaysAgo = subDays(dateRange.to, 7).getTime()
  const clicksLast7Days = daily
    .filter(d => new Date(d.date).getTime() >= sevenDaysAgo)
    .reduce((sum, d) => sum + d.clicks, 0)

  if (loading && !urlInfo) {
    return (
      <div className="p-8 max-w-[1400px] mx-auto space-y-6 bg-[#fafafa] min-h-screen">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/snips" className="text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[350px]"><ChartSkeleton /></div>
          <div className="h-[350px]"><BreakdownCardSkeleton /></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-[350px]"><BreakdownCardSkeleton /></div>
          <div className="h-[350px]"><BreakdownCardSkeleton /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-6 bg-[#fafafa] min-h-screen">
      {/* Header */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div className="flex items-start gap-4">
          <Link href="/dashboard/snips" className="mt-2 text-gray-400 hover:text-gray-900 transition-colors shrink-0">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <Link2 className="w-6 h-6 text-[#ff5f00]" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  snip.to/{urlInfo?.custom_alias || shortCode}
                </h1>
                <a href={`${edgeUrl}/${urlInfo?.custom_alias || shortCode}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff5f00]">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                {urlInfo?.created_at && (
                  <span className="text-sm text-gray-500">
                    Created on {format(new Date(urlInfo.created_at), 'MMM d, yyyy')}
                  </span>
                )}
                {urlInfo?.created_at && <span className="text-gray-300">·</span>}
                {urlInfo?.custom_alias && (
                  <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-medium rounded-md">
                    Custom Alias
                  </span>
                )}
                {(urlInfo?.created_at || urlInfo?.custom_alias) && <span className="text-gray-300">·</span>}
                {urlInfo && (
                  <a href={urlInfo.long_url} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-[#ff6201] transition-colors flex items-center gap-1 max-w-[300px] sm:max-w-md truncate">
                    {urlInfo.long_url}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 self-start xl:self-auto ml-10 xl:ml-0">
          <DateRangeFilter onRangeChange={setDateRange} />
          
          <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2 ml-2 text-gray-600 bg-white">
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Button variant="outline" size="sm" onClick={() => setIsEditDialogOpen(true)} className="gap-2 text-gray-600 bg-white">
            <Edit className="w-4 h-4" /> Edit
          </Button>
          <Button variant="outline" size="sm" onClick={() => setIsDeleteDialogOpen(true)} className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 bg-white border-red-200">
            <Trash2 className="w-4 h-4" /> Delete
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Clicks"
          value={summary.total_clicks >= 1000 ? (summary.total_clicks / 1000).toFixed(1) + 'K' : summary.total_clicks}
          icon={<MousePointerClick className="w-5 h-5 text-[#ff5f00]" />}
        />
        <StatCard
          title="Clicks (Last 7 Days)"
          value={clicksLast7Days >= 1000 ? (clicksLast7Days / 1000).toFixed(1) + 'K' : clicksLast7Days}
          icon={<Link2 className="w-5 h-5 text-[#8b5cf6]" />}
        />
        <StatCard
          title="Avg. Clicks / Day"
          value={avgClicksPerDay >= 1000 ? (avgClicksPerDay / 1000).toFixed(1) + 'K' : avgClicksPerDay}
          icon={<TrendingUp className="w-5 h-5 text-[#fdb140]" />}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ClicksChart data={daily} granularity={granularity} onGranularityChange={setGranularity} />
        </div>
        <div>
          <BreakdownCard title="Top Countries" data={countries} />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div><BreakdownCard title="Top Referrers" data={referrers} /></div>
        <div><BreakdownCard title="Top Devices" data={devices} /></div>
      </div>

      <EditSnipDialog 
        open={isEditDialogOpen} 
        shortCode={shortCode} 
        initialAlias={urlInfo?.custom_alias || ''} 
        onClose={() => setIsEditDialogOpen(false)} 
        onSuccess={(updatedUrl) => {
          setUrlInfo(updatedUrl)
          fetchData() // Refresh if needed
        }} 
      />

      <DeleteSnipDialog 
        open={isDeleteDialogOpen} 
        shortCode={shortCode} 
        onClose={() => setIsDeleteDialogOpen(false)} 
        onSuccess={() => {
          router.push('/dashboard/snips')
        }}
        onError={() => {}}
      />
    </div>
  )
}