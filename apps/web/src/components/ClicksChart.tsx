"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ClicksChartProps {
  data: { date: string, clicks: number }[]
}

export function ClicksChart({ data }: ClicksChartProps) {
  const formattedData = data.map(d => {
    const dateObj = new Date(d.date)
    return {
      ...d,
      displayDate: `${dateObj.toLocaleString('default', { month: 'short' })} ${dateObj.getDate()}`
    }
  })

  return (
    <Card className="shadow-sm border-gray-100 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-gray-900">Clicks Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="displayDate" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="#ff5f00" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: '#ff5f00' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
