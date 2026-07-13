"use client"
import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import { ClicksChart } from '@/components/ClicksChart'
import { BreakdownCard } from '@/components/BreakdownCard'
import { StatCard } from '@/components/StatCard'
import { ChartSkeleton } from '@/components/skeletons/ChartSkeleton'
import { StatCardSkeleton } from '@/components/skeletons/StatCardSkeleton'
import { MousePointerClick, ArrowLeft, Copy, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'

export default function AnalyticsPage() {
  const params = useParams()
  const router = useRouter()
  const shortCode = params.short_code as string
  const edgeUrl = process.env.NEXT_PUBLIC_EDGE_URL || 'http://localhost:8787'

  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState({ total_clicks: 0 })
  const [daily, setDaily] = useState([])
  const [countries, setCountries] = useState([])
  const [referrers, setReferrers] = useState([])
  const [devices, setDevices] = useState([])
  const [urlInfo, setUrlInfo] = useState<{ long_url: string, short_code: string } | null>(null)
  const hasFetched = useRef(false)

  const fetchData = async () => {
    try {
      const [sumData, dailyData, countriesData, referrersData, devicesData, urlsData] = await Promise.all([
        apiFetch<{ total_clicks: number }>(`/analytics/${shortCode}/summary`).catch(() => ({ total_clicks: 0 })),
        apiFetch<any[]>(`/analytics/${shortCode}/daily`).catch(() => []),
        apiFetch<any[]>('/analytics/breakdown?by=country').catch(() => []),
        apiFetch<any[]>('/analytics/breakdown?by=referrer').catch(() => []),
        apiFetch<any[]>('/analytics/breakdown?by=device').catch(() => []),
        apiFetch<{ data: any[] }>('/urls').catch(() => ({ data: [] })),
      ])
      setSummary(sumData)
      setDaily(dailyData as any)
      setCountries(countriesData as any)
      setReferrers(referrersData as any)
      setDevices(devicesData as any)
      const found = urlsData.data?.find((u: any) => u.short_code === shortCode)
      if (found) setUrlInfo(found)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      if (hasFetched.current) return
      hasFetched.current = true
      fetchData()
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) { router.push('/login'); return }
      if (hasFetched.current) return
      hasFetched.current = true
      fetchData()
    })
    return () => subscription.unsubscribe()
  }, [router, shortCode])

  const handleCopy = () => {
    navigator.clipboard.writeText(`${edgeUrl}/${shortCode}`)
    toast.success('Link copied to clipboard')
  }

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="max-w-xs"><StatCardSkeleton /></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[350px]"><ChartSkeleton /></div>
          <div className="h-[350px]"><ChartSkeleton /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Link href="/dashboard" className="mt-1 text-gray-400 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">snip.to/{shortCode}</h1>
            {urlInfo && (
              <a href={urlInfo.long_url} target="_blank" rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#ff6201] transition-colors flex items-center gap-1 mt-1">
                {urlInfo.long_url.length > 60 ? urlInfo.long_url.slice(0, 60) + '...' : urlInfo.long_url}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
          <Copy className="w-4 h-4" /> Copy Link
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Clicks"
          value={summary.total_clicks >= 1000 ? (summary.total_clicks / 1000).toFixed(1) + 'K' : summary.total_clicks}
          icon={<MousePointerClick className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[350px]"><ClicksChart data={daily} /></div>
        <div className="h-[350px]"><BreakdownCard title="Top Countries" data={countries} /></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-[350px]"><BreakdownCard title="Top Referrers" data={referrers} /></div>
        <div className="h-[350px]"><BreakdownCard title="Top Devices" data={devices} /></div>
      </div>
    </div>
  )
}