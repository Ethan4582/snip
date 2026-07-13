"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Globe, Monitor } from 'lucide-react'

interface BreakdownCardProps {
  title: string
  data: { label: string, clicks: number }[]
}

const COLORS = ['#ff5f00', '#fdb140', '#6366f1', '#10b981', '#f43f5e', '#8b5cf6']

const countryMap: Record<string, string> = {
  US: 'United States', IN: 'India', GB: 'United Kingdom', CA: 'Canada', DE: 'Germany',
  FR: 'France', AU: 'Australia', BR: 'Brazil', JP: 'Japan', CN: 'China',
  IT: 'Italy', ES: 'Spain', RU: 'Russia', KR: 'South Korea', NL: 'Netherlands',
  SE: 'Sweden', CH: 'Switzerland', SG: 'Singapore', MX: 'Mexico', ZA: 'South Africa'
}

export function BreakdownCard({ title, data }: BreakdownCardProps) {
  const total = data.reduce((acc, curr) => acc + Number(curr.clicks), 0)
  
  // Format data
  const formattedData = data.map(d => ({
    ...d,
    displayLabel: title === 'Top Countries' ? (countryMap[d.label] || d.label) : d.label
  }))

  const isReferrers = title === 'Top Referrers'

  return (
    <Card className="shadow-sm border-gray-100 h-full rounded-xl flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold text-gray-900">{title}</CardTitle>
        {title === 'Top Referrers' && <Globe className="w-4 h-4 text-gray-400" />}
        {title === 'Top Devices' && <Monitor className="w-4 h-4 text-gray-400" />}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        {formattedData.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
            No data available
          </div>
        ) : (
          isReferrers ? (
            <div className="flex flex-col gap-4 mt-2">
              {formattedData.slice(0, 5).map((item, i) => (
                <div key={i} className="flex items-center text-sm gap-3">
                  <span className="text-gray-700 capitalize text-xs truncate w-20">{item.displayLabel}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ backgroundColor: '#ff5f00', width: `${Math.round((item.clicks / total) * 100)}%` }} 
                    />
                  </div>
                  <div className="flex items-center gap-3 w-20 justify-end">
                    <span className="font-semibold text-gray-900 text-xs">{(item.clicks >= 1000 ? (item.clicks/1000).toFixed(1) + 'K' : item.clicks)}</span>
                    <span className="text-gray-400 text-xs w-8 text-right">
                      {Math.round((item.clicks / total) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-6 mt-2">
              <div className="w-[140px] h-[140px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={formattedData}
                      innerRadius={45}
                      outerRadius={65}
                      paddingAngle={2}
                      dataKey="clicks"
                      stroke="none"
                    >
                      {formattedData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                      itemStyle={{ color: '#111827', fontWeight: 600 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-lg font-bold text-gray-900 leading-none">{total >= 1000 ? (total/1000).toFixed(1) + 'K' : total}</span>
                  {title === 'Top Countries' && <span className="text-[10px] text-gray-500 mt-1">Total Clicks</span>}
                </div>
              </div>
              
              <div className="flex-1 w-full space-y-3">
                {formattedData.slice(0, 5).map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                      <span className="text-gray-700 capitalize text-xs truncate max-w-[100px]">{item.displayLabel}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900 text-xs">{item.clicks >= 1000 ? (item.clicks/1000).toFixed(1) + 'K' : item.clicks}</span>
                      <span className="text-gray-400 text-xs w-8 text-right">
                        {Math.round((item.clicks / total) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  )
}