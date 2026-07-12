"use client"
import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { format } from 'date-fns'
import { Copy, Star, Trash2, Search, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import { Skeleton } from '@/components/ui/skeleton'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { apiFetch } from '@/lib/api'
import type { Url } from '@snip/shared'

interface SnipsTableProps {
  title: string
  isFavorite?: boolean
}

export function SnipsTable({ title, isFavorite = false }: SnipsTableProps) {
  const [data, setData] = useState<Url[]>([])
  const [clicksMap, setClicksMap] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean, shortCode: string | null }>({ open: false, shortCode: null })
  const limit = 10

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      })
      if (isFavorite) query.append('is_favorite', 'true')
      if (search) query.append('search', search)

      const res = await apiFetch<{ data: Url[], total: number }>(`/urls?${query.toString()}`)
      setData(res.data)
      setTotal(res.total)

      // Fetch clicks for these specific snips
      if (res.data.length > 0) {
        const shortCodes = res.data.map(u => u.short_code).join(',')
        const stats = await apiFetch<Record<string, number>>(`/analytics/bulk-summary?short_codes=${shortCodes}`).catch(() => ({}))
        setClicksMap(stats)
      } else {
        setClicksMap({})
      }
    } catch (err) {
      console.error('Failed to fetch snips', err)
    } finally {
      setLoading(false)
    }
  }, [page, limit, isFavorite, search])

  useEffect(() => {
    // Debounce search
    const handler = setTimeout(() => {
      fetchData()
    }, 300)
    return () => clearTimeout(handler)
  }, [search, page, fetchData])

  // Reset page to 1 when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const handleCopy = (shortCode: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_EDGE_URL || 'http://localhost:8787'
    navigator.clipboard.writeText(`${baseUrl}/${shortCode}`)
    toast.success('Link copied to clipboard')
  }

  const toggleFavorite = async (shortCode: string, currentStatus: boolean) => {
    // Optimistic update
    if (isFavorite && currentStatus === true) {
      setData(prev => prev.filter(u => u.short_code !== shortCode))
      setTotal(prev => prev - 1)
    } else {
      setData(prev => prev.map(u => u.short_code === shortCode ? { ...u, is_favorite: !currentStatus } : u))
    }

    try {
      await apiFetch(`/urls/${shortCode}/favorite`, {
        method: 'PATCH',
        body: JSON.stringify({ is_favorite: !currentStatus })
      })
      toast.success(currentStatus ? 'Removed from favorites' : 'Added to favorites')
    } catch (err) {
      console.error('Failed to toggle favorite', err)
      toast.error('Failed to update favorite status')
      // Revert optimistic update
      fetchData()
    }
  }

  const handleDelete = async () => {
    if (!deleteDialog.shortCode) return
    
    try {
      await apiFetch(`/urls/${deleteDialog.shortCode}`, {
        method: 'DELETE'
      })
      toast.success('Snip deleted successfully')
      setDeleteDialog({ open: false, shortCode: null })
      fetchData()
    } catch (err) {
      console.error('Failed to delete', err)
      toast.error('Failed to delete snip')
    }
  }

  const totalPages = Math.ceil(total / limit)

  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search links..." 
            className="pl-9"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-gray-100 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="w-[300px]">Link</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    </TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell className="text-right"><Skeleton className="h-5 w-8 ml-auto" /></TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Skeleton className="h-7 w-7 rounded-md" />
                        <Skeleton className="h-7 w-7 rounded-md" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                    {search ? "No links found matching your search." : "No links found."}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item) => (
                  <TableRow key={item.id} className="group">
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">snip.to/{item.short_code}</span>
                          <button onClick={() => handleCopy(item.short_code)} className="text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity" title="Copy">
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <a href={item.long_url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 truncate max-w-[200px] sm:max-w-[400px] flex items-center gap-1 hover:text-gray-900 transition-colors">
                          {item.long_url}
                        </a>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-500 text-sm">
                      {format(new Date(item.created_at), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell className="text-right font-medium text-gray-900">
                      {clicksMap[item.short_code] || 0}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => toggleFavorite(item.short_code, !!item.is_favorite)} 
                          className={`p-1.5 rounded-md hover:bg-gray-100 transition-colors ${item.is_favorite ? 'text-yellow-400' : 'text-gray-400'}`}
                          title={item.is_favorite ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Star className="w-4 h-4" fill={item.is_favorite ? "currentColor" : "none"} />
                        </button>
                        <button 
                          onClick={() => setDeleteDialog({ open: true, shortCode: item.short_code })} 
                          className="p-1.5 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete link"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 px-2">
            <span className="text-sm text-gray-500">
              Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, total)} of {total} entries
            </span>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <AlertDialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, shortCode: open ? deleteDialog.shortCode : null })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the short URL and all of its analytics data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white">
              Delete URL
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}
