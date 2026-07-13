"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'
import { BarChart2, Copy } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

interface RecentSnipsTableProps {
  data: { short_code: string, long_url: string, created_at: string, clicks?: number, is_favorite?: boolean }[]
}

export function RecentSnipsTable({ data }: RecentSnipsTableProps) {
  const edgeUrl = process.env.NEXT_PUBLIC_EDGE_URL || 'http://localhost:8787'

  const handleCopy = (shortCode: string) => {
    navigator.clipboard.writeText(`${edgeUrl}/${shortCode}`)
    toast.success('Link copied to clipboard')
  }

  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-gray-900">Recent Snips</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Link</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Clicks</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 h-24">No snips found</TableCell>
              </TableRow>
            ) : data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="font-medium text-gray-900">snip.to/{item.short_code}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[200px] sm:max-w-[300px]">{item.long_url}</div>
                </TableCell>
                <TableCell className="text-gray-500 text-sm">
                  {format(new Date(item.created_at), "MMM d, yyyy")}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {item.clicks || 0}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/dashboard/analytics/${item.short_code}`}
                      className="p-1.5 text-gray-400 hover:text-[#ff6201] rounded-md hover:bg-[#fff0e6] transition-colors"
                      title="View Analytics"
                    >
                      <BarChart2 className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleCopy(item.short_code)}
                      className="p-1.5 text-gray-400 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
                      title="Copy link"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

