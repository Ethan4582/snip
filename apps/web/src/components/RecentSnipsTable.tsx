import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'

interface RecentSnipsTableProps {
  data: { short_code: string, long_url: string, created_at: string, clicks?: number }[]
}

export function RecentSnipsTable({ data }: RecentSnipsTableProps) {
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-gray-500 h-24">No snips found</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
