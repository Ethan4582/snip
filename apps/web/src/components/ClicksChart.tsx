"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface ClicksChartProps {
  data: { date: string, clicks: number }[]
  granularity: string
}

export function ClicksChart({ data, granularity }: ClicksChartProps) {
  const formattedData = data.map(d => {
    const dateObj = new Date(d.date)
    let displayDate = ''
    if (granularity === 'hour') {
      displayDate = dateObj.toLocaleTimeString('default', { hour: 'numeric', minute: '2-digit' })
    } else if (granularity === 'month') {
      displayDate = dateObj.toLocaleString('default', { month: 'short', year: 'numeric' })
    } else {
      displayDate = `${dateObj.toLocaleString('default', { month: 'short' })} ${dateObj.getDate()}`
    }
    return {
      ...d,
      displayDate
    }
  })

  // Format Y-axis ticks to e.g. 1K, 2K
  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return '0'
    if (tickItem >= 1000) return (tickItem / 1000).toFixed(0) + 'K'
    return tickItem.toString()
  }

  return (
    <Card className="shadow-sm border-gray-100 h-full rounded-xl">
      <CardHeader className="pb-0 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold text-gray-900">Clicks Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff5f00" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#ff5f00" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="displayDate" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: '#94a3b8' }}
                dy={10}
                minTickGap={20}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: '#94a3b8' }}
                tickFormatter={formatYAxis}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                itemStyle={{ color: '#ff5f00', fontWeight: 600 }}
              />
              <Area 
                type="monotone" 
                dataKey="clicks" 
                stroke="#ff5f00" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorClicks)" 
                activeDot={{ r: 5, fill: '#ff5f00', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}