"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

interface BreakdownCardProps {
  title: string
  data: { label: string, clicks: number }[]
}

const COLORS = ['#ff5f00', '#fdb140', '#6366f1', '#10b981', '#f43f5e', '#8b5cf6']

export function BreakdownCard({ title, data }: BreakdownCardProps) {
  const total = data.reduce((acc, curr) => acc + Number(curr.clicks), 0)
  
  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="h-[200px] flex items-center justify-center text-sm text-gray-500">
            No data available
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
            <div className="w-[140px] h-[140px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={2}
                    dataKey="clicks"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-lg font-bold text-gray-900 leading-none">{total >= 1000 ? (total/1000).toFixed(1) + 'K' : total}</span>
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-3">
              {data.slice(0, 5).map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                    <span className="text-gray-700 capitalize text-xs truncate max-w-[100px]">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{item.clicks}</span>
                    <span className="text-gray-400 text-xs w-8 text-right">
                      {Math.round((item.clicks / total) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
