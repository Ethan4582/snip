import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="shadow-sm border-gray-100">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-bold tracking-tight text-gray-900">{value}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
