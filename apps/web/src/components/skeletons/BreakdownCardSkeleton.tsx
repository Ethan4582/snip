import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function BreakdownCardSkeleton() {
  return (
    <Card className="shadow-sm border-gray-100 h-full rounded-xl flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          <Skeleton className="h-5 w-24" />
        </CardTitle>
        <Skeleton className="w-4 h-4 rounded-full" />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center mt-6 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center text-sm gap-3">
            <Skeleton className="w-20 h-4" />
            <div className="flex-1">
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
            <Skeleton className="w-8 h-4" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}