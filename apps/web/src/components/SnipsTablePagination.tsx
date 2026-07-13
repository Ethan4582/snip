import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

interface PaginationProps {
  page: number
  total: number
  limit: number
  totalPages: number
  setPage: (p: number | ((prev: number) => number)) => void
  loading: boolean
}

export function SnipsTablePagination({ page, total, limit, totalPages, setPage, loading }: PaginationProps) {
  if (loading || total === 0) return null

  return (
    <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between bg-gray-50/30 text-sm">
      <div className="text-gray-500 font-medium">
        Showing <span className="text-gray-900">{(page - 1) * limit + 1}</span> to <span className="text-gray-900">{Math.min(page * limit, total)}</span> of <span className="text-gray-900">{total}</span> results
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="w-9 h-9 border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-1 mx-2">
          {Array.from({ length: Math.min(3, totalPages) }).map((_, i) => (
            <Button
              key={i}
              variant={page === i + 1 ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 p-0 font-medium ${page === i + 1 ? 'bg-[#fff0e6] text-[#ff5f00] hover:bg-[#ffe0cc] border-transparent shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
            >
              {i + 1}
            </Button>
          ))}
          {totalPages > 3 && (
            <div className="w-9 h-9 flex items-center justify-center text-gray-400">
              <MoreHorizontal className="w-4 h-4" />
            </div>
          )}
          {totalPages > 3 && (
            <Button
              variant={page === totalPages ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPage(totalPages)}
              className={`w-9 h-9 p-0 font-medium ${page === totalPages ? 'bg-[#fff0e6] text-[#ff5f00] hover:bg-[#ffe0cc] shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {totalPages}
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="w-9 h-9 border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}