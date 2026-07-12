import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

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
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="text-center text-gray-500 h-24">No links found</TableCell>
              </TableRow>
            ) : data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="font-medium text-gray-900">snip.to/{item.short_code}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[200px] sm:max-w-[300px]">{item.long_url}</div>
                </TableCell>
                <TableCell className="text-right font-medium">{item.clicks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
