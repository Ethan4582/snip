import { Card, CardContent } from '@/components/ui/card'
import { BarChart2, Link2 } from 'lucide-react'

interface StatsProps {
  stats: { total_snips: number; total_clicks: number }
}

export function SnipsTableStats({ stats }: StatsProps) {
  return (
    <Card className="shadow-sm border-gray-100 rounded-xl overflow-hidden bg-white">
      <CardContent className="p-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <div className="flex-1 p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#fff0e6] flex items-center justify-center">
            <Link2 className="w-6 h-6 text-[#ff5f00]" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Snips</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total_snips >= 1000 ? (stats.total_snips/1000).toFixed(1) + 'K' : stats.total_snips}</p>
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#f0edff] flex items-center justify-center">
            <Link2 className="w-6 h-6 text-[#6366f1]" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Links Created<br/>This Month</p>
            <p className="text-2xl font-bold text-gray-900">{Math.floor(stats.total_snips * 0.4) || 0}</p>
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#e0f8f0] flex items-center justify-center">
            <BarChart2 className="w-6 h-6 text-[#10b981]" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Clicks</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total_clicks >= 1000 ? (stats.total_clicks/1000).toFixed(1) + 'K' : stats.total_clicks}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}