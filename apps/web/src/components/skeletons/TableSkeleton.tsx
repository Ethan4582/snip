import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function TableSkeleton() {
  return (
    <Card className="shadow-sm border-gray-100 rounded-xl flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-center justify-between border-b border-gray-50 mb-2">
        <CardTitle className="text-base font-semibold">
          <Skeleton className="h-5 w-32" />
        </CardTitle>
        <Skeleton className="h-4 w-16" />
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center py-2">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="w-48 h-4" />
                  <Skeleton className="w-24 h-3" />
                </div>
              </div>
              <Skeleton className="w-16 h-6" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}