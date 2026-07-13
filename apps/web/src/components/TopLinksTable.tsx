import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface TopLinksTableProps {
  data: { short_code: string, long_url: string, clicks: number }[]
}

export function TopLinksTable({ data }: TopLinksTableProps) {
  return (
    <Card className="shadow-sm border-gray-100 h-full rounded-xl flex flex-col">
      <CardHeader className="pb-4 flex flex-row items-center justify-between border-b border-gray-50 mb-2">
        <CardTitle className="text-base font-semibold text-gray-900">Top Links</CardTitle>
        <span className="text-xs text-gray-400 font-medium">Clicks</span>
      </CardHeader>
      <CardContent className="flex-1">
        {data.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            No links found
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {data.map((item, i) => (
              <div key={i} className="flex justify-between items-center group">
                <div className="flex flex-col overflow-hidden max-w-[80%]">
                  <Link href={`/dashboard/analytics/${item.short_code}`} className="font-semibold text-gray-900 text-sm hover:text-[#ff5f00] truncate transition-colors">
                    snip.to/{item.short_code}
                  </Link>
                  <div className="text-xs text-gray-400 truncate mt-0.5">{item.long_url}</div>
                </div>
                <div className="font-medium text-gray-900 text-sm">
                  {item.clicks >= 1000 ? (item.clicks / 1000).toFixed(1) + 'K' : item.clicks}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}