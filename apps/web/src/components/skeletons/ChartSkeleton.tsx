import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ChartSkeleton() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-5 w-32" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <Skeleton className="h-[350px] w-full" />
      </CardContent>
    </Card>
  )
}
