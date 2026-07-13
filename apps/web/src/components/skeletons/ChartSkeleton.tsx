import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ChartSkeleton() {
  return (
    <Card className="shadow-sm border-gray-100 h-full rounded-xl flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-center justify-between border-b border-gray-50 mb-4">
        <CardTitle className="text-base font-semibold">
          <Skeleton className="h-5 w-32" />
        </CardTitle>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-16 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <Skeleton className="h-full min-h-[250px] w-full" />
      </CardContent>
    </Card>
  )
}