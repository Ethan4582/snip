import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BarChart2 } from 'lucide-react'
import Link from 'next/link'

interface TopLinksTableProps {
  data: { short_code: string, long_url: string, clicks: number }[]
}

export function TopLinksTable({ data }: TopLinksTableProps) {
  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-gray-900">Top Links</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Link</TableHead>
              <TableHead className="text-right">Clicks</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-gray-500 h-24">No links found</TableCell>
              </TableRow>
            ) : data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="font-medium text-gray-900">snip.to/{item.short_code}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[200px] sm:max-w-[300px]">{item.long_url}</div>
                </TableCell>
                <TableCell className="text-right font-medium">{item.clicks}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/dashboard/analytics/${item.short_code}`}
                      className="p-1.5 text-gray-400 hover:text-[#ff6201] rounded-md hover:bg-[#fff0e6] transition-colors"
                      title="View Analytics"
                    >
                      <BarChart2 className="w-4 h-4" />
                    </Link>
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
