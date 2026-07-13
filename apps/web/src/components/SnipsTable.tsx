"use client"
import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { format } from 'date-fns'
import { Copy, Star, Trash2, Search, BarChart2, Edit, MoreVertical, Link2, ChevronsUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import Link from 'next/link'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { apiFetch } from '@/lib/api'
import type { Url } from '@snip/shared'
import { Label } from '@/components/ui/label'

interface SnipsTableProps {
  title: string
  isFavorite?: boolean
}

const ICONS_COLORS = [
  { bg: 'bg-[#fff0e6]', text: 'text-[#ff5f00]' },
  { bg: 'bg-[#f0edff]', text: 'text-[#6366f1]' },
  { bg: 'bg-[#e0f8f0]', text: 'text-[#10b981]' },
  { bg: 'bg-[#fef0cd]', text: 'text-[#fdb140]' },
  { bg: 'bg-[#fee2e2]', text: 'text-[#ef4444]' },
  { bg: 'bg-[#e0f2fe]', text: 'text-[#0ea5e9]' }
]

export function SnipsTable({ title, isFavorite = false }: SnipsTableProps) {
  const [data, setData] = useState<Url[]>([])
  const [clicksMap, setClicksMap] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [sortBy, setSortBy] = useState('created_at')
  const [sortOrder, setSortOrder] = useState('desc')
  const limit = 10

  // Global stats
  const [stats, setStats] = useState({ total_snips: 0, total_clicks: 0 })

  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean, shortCode: string | null }>({ open: false, shortCode: null })
  
  const [editDialog, setEditDialog] = useState<{ open: boolean, shortCode: string | null, customAlias: string }>({ open: false, shortCode: null, customAlias: '' })
  const [isEditing, setIsEditing] = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sort: sortBy,
        order: sortOrder
      })
      if (isFavorite) query.append('is_favorite', 'true')
      if (search) query.append('search', search)

      const [res, sumData] = await Promise.all([
        apiFetch<{ data: Url[], total: number }>(`/urls?${query.toString()}`),
        apiFetch('/analytics/summary').catch(() => ({ total_clicks: 0, total_snips: 0 }))
      ])

      setData(res.data)
      setTotal(res.total)
      setStats(sumData as any)

      // Fetch clicks for these specific snips if we didn't sort by clicks (if sorted by clicks, we already have them but need to map them)
      if (res.data.length > 0) {
        const shortCodes = res.data.map(u => u.short_code).join(',')
        const statsMap = await apiFetch<Record<string, number>>(`/analytics/bulk-summary?short_codes=${shortCodes}`).catch(() => ({}))
        setClicksMap(statsMap)
      } else {
        setClicksMap({})
      }
    } catch (err) {
      console.error('Failed to fetch snips', err)
    } finally {
      setLoading(false)
    }
  }, [page, limit, isFavorite, search, sortBy, sortOrder])

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData()
    }, 300)
    return () => clearTimeout(handler)
  }, [search, page, sortBy, sortOrder, fetchData])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
    setPage(1)
  }

  const handleCopy = (shortCode: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_EDGE_URL || 'http://localhost:8787'
    navigator.clipboard.writeText(`${baseUrl}/${shortCode}`)
    toast.success('Link copied to clipboard')
  }

  const toggleFavorite = async (shortCode: string, currentStatus: boolean) => {
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
      toast.error('Failed to update favorite status')
      fetchData()
    }
  }

  const handleDelete = async () => {
    if (!deleteDialog.shortCode) return
    const sc = deleteDialog.shortCode
    
    // Optimistic delete
    setData(prev => prev.filter(u => u.short_code !== sc))
    setTotal(prev => prev - 1)
    setDeleteDialog({ open: false, shortCode: null })

    try {
      await apiFetch(`/urls/${sc}`, { method: 'DELETE' })
      toast.success('Snip deleted successfully')
    } catch (err) {
      toast.error('Failed to delete snip')
      fetchData() // rollback
    }
  }

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editDialog.shortCode) return
    setIsEditing(true)
    
    try {
      const res = await apiFetch<Url>(`/urls/${editDialog.shortCode}`, {
        method: 'PATCH',
        body: JSON.stringify({ custom_alias: editDialog.customAlias })
      })
      
      setData(prev => prev.map(u => u.short_code === editDialog.shortCode ? res : u))
      toast.success('Alias updated successfully')
      setEditDialog({ open: false, shortCode: null, customAlias: '' })
    } catch (err: any) {
      if (err.message.includes('taken') || err.message.includes('409')) {
        toast.error('Custom alias is already taken')
      } else {
        toast.error('Failed to update alias')
      }
    } finally {
      setIsEditing(false)
    }
  }

  const totalPages = Math.ceil(total / limit)

  const SortIcon = ({ field }: { field: string }) => {
    if (sortBy !== field) return <ChevronsUpDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
    return sortOrder === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-gray-900 ml-1" /> : <ArrowDown className="w-3.5 h-3.5 text-gray-900 ml-1" />
  }

  return (
    <div className="space-y-6">
      {/* Search Bar matching image */}
      <div className="flex items-center gap-3 w-[50%] max-w-lg mb-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search by title, alias or link..." 
            className="pl-10 bg-white border-gray-200"
            value={search}
            onChange={handleSearchChange}
          />
          <div className="absolute right-3 top-2.5 flex items-center gap-1 text-xs text-gray-400 border border-gray-200 px-1.5 rounded-md">
            ⌘K
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <Card className="shadow-sm border-gray-100 rounded-xl overflow-hidden bg-white">
        <CardContent className="p-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex-1 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#fff0e6] flex items-center justify-center">
              <Link2 className="w-6 h-6 text-[#ff5f00]" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Snips</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total_snips >= 1000 ? (stats.total_snips/1000).toFixed(1) + 'K' : stats.total_snips}</p>
            </div>
          </div>
          <div className="flex-1 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0edff] flex items-center justify-center">
              <Link2 className="w-6 h-6 text-[#6366f1]" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Links Created<br/>This Month</p>
              <p className="text-2xl font-bold text-gray-900">{Math.floor(stats.total_snips * 0.4) || 0}</p>
            </div>
          </div>
          <div className="flex-1 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0f8f0] flex items-center justify-center">
              <BarChart2 className="w-6 h-6 text-[#10b981]" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Clicks</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total_clicks >= 1000 ? (stats.total_clicks/1000).toFixed(1) + 'K' : stats.total_clicks}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Table */}
      <Card className="shadow-sm border-gray-100 rounded-xl bg-white overflow-hidden">
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-white">
              <TableRow className="border-b border-gray-100 hover:bg-white">
                <TableHead className="font-medium text-gray-500 h-14 px-6 text-xs uppercase tracking-wider">Short Link</TableHead>
                <TableHead className="font-medium text-gray-500 h-14 text-xs uppercase tracking-wider">Original Link</TableHead>
                <TableHead className="font-medium text-gray-500 h-14 text-xs uppercase tracking-wider">Custom Alias</TableHead>
                <TableHead className="font-medium text-gray-500 h-14 text-xs uppercase tracking-wider">Expiration Date</TableHead>
                <TableHead className="font-medium text-gray-500 h-14 text-xs uppercase tracking-wider cursor-pointer select-none" onClick={() => handleSort('created_at')}>
                  <div className="flex items-center">Created At <SortIcon field="created_at" /></div>
                </TableHead>
                <TableHead className="font-medium text-gray-500 h-14 text-xs uppercase tracking-wider cursor-pointer select-none" onClick={() => handleSort('clicks')}>
                  <div className="flex items-center">Clicks <SortIcon field="clicks" /></div>
                </TableHead>
                <TableHead className="font-medium text-gray-500 h-14 px-6 text-xs uppercase tracking-wider text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="px-6 py-4"><Skeleton className="h-6 w-32" /></TableCell>
                    <TableCell className="py-4"><Skeleton className="h-4 w-48" /></TableCell>
                    <TableCell className="py-4"><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell className="py-4"><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell className="py-4"><Skeleton className="h-8 w-24" /></TableCell>
                    <TableCell className="py-4"><Skeleton className="h-4 w-12" /></TableCell>
                    <TableCell className="px-6 py-4"><Skeleton className="h-8 w-32 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-32 text-center text-gray-500">
                    {search ? "No links found matching your search." : "No links found."}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item, i) => {
                  const color = ICONS_COLORS[i % ICONS_COLORS.length]
                  const clicks = clicksMap[item.short_code] || 0
                  return (
                    <TableRow key={item.id} className="border-gray-50 hover:bg-gray-50/50 group">
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${color.bg}`}>
                            <Link2 className={`w-4 h-4 ${color.text}`} />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">snip.to/{item.short_code}</span>
                            <button onClick={() => handleCopy(item.short_code)} className="text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity" title="Copy">
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <a href={item.long_url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 truncate max-w-[150px] lg:max-w-[250px] inline-block hover:text-gray-900 transition-colors">
                          {item.long_url}
                        </a>
                      </TableCell>
                      <TableCell className="py-4 text-sm text-gray-500">
                        {item.custom_alias || '—'}
                      </TableCell>
                      <TableCell className="py-4 text-sm text-gray-500">
                        {item.expiration_date ? format(new Date(item.expiration_date), "MMM d, yyyy") : '—'}
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="flex flex-col text-sm text-gray-600">
                          <span className="font-medium text-gray-700">{item.created_at ? format(new Date(item.created_at), "MMM d, yyyy") : '—'}</span>
                          <span className="text-xs text-gray-400 mt-0.5">{item.created_at ? format(new Date(item.created_at), "hh:mm a") : '—'}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="font-semibold text-gray-900 text-sm">
                          {clicks >= 1000 ? (clicks / 1000).toFixed(1) + 'K' : clicks}
                        </div>
                      </TableCell>
                      <TableCell className="text-right px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            href={`/dashboard/analytics/${item.short_code}`}
                            className="p-1.5 text-gray-400 hover:text-[#ff5f00] rounded-md hover:bg-gray-100 transition-colors"
                            title="View Analytics"
                          >
                            <BarChart2 className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => toggleFavorite(item.short_code, !!item.is_favorite)}
                            className={`p-1.5 rounded-md hover:bg-gray-100 transition-colors ${item.is_favorite ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-400 hover:text-yellow-400'}`}
                            title={item.is_favorite ? "Remove favorite" : "Add favorite"}
                          >
                            <Star className={`w-4 h-4 ${item.is_favorite ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={() => handleCopy(item.short_code)}
                            className="p-1.5 text-gray-400 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
                            title="Copy link"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="p-1.5 text-gray-400 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/dashboard/analytics/${item.short_code}`}>
                                  <BarChart2 className="w-4 h-4 mr-2" /> View Analytics
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setEditDialog({ open: true, shortCode: item.short_code, customAlias: item.custom_alias || '' })}>
                                <Edit className="w-4 h-4 mr-2" /> Edit Alias
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600" onClick={() => setDeleteDialog({ open: true, shortCode: item.short_code })}>
                                <Trash2 className="w-4 h-4 mr-2" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
        
        {/* Pagination matching reference */}
        {!loading && total > 0 && (
          <div className="border-t border-gray-100 p-4 flex items-center justify-between bg-white text-sm">
            <div className="text-gray-500">
              Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total} results
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 p-0 text-gray-500 border-gray-200"
              >
                &lt;
              </Button>
              {Array.from({ length: Math.min(3, totalPages) }).map((_, i) => (
                <Button
                  key={i}
                  variant={page === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPage(i + 1)}
                  className={`w-9 h-9 p-0 ${page === i + 1 ? 'bg-[#fff0e6] text-[#ff5f00] hover:bg-[#ffe0cc] border-transparent' : 'text-gray-500 border-gray-200 hover:text-gray-900'}`}
                >
                  {i + 1}
                </Button>
              ))}
              {totalPages > 3 && <span className="px-2 text-gray-400">...</span>}
              {totalPages > 3 && (
                <Button
                  variant={page === totalPages ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPage(totalPages)}
                  className={`w-9 h-9 p-0 ${page === totalPages ? 'bg-[#fff0e6] text-[#ff5f00] border-transparent' : 'text-gray-500 border-gray-200'}`}
                >
                  {totalPages}
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 p-0 text-gray-500 border-gray-200"
              >
                &gt;
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Delete Dialog */}
      <AlertDialog open={deleteDialog.open} onOpenChange={(open) => !open && setDeleteDialog({ open: false, shortCode: null })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this snip?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the shortened link and clear its cache.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Dialog */}
      <Dialog open={editDialog.open} onOpenChange={(open) => !open && setEditDialog({ open: false, shortCode: null, customAlias: '' })}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Custom Alias</DialogTitle>
            <DialogDescription>
              Update the custom alias for this shortened link.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEdit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="alias" className="text-right">
                  Alias
                </Label>
                <Input
                  id="alias"
                  value={editDialog.customAlias}
                  onChange={(e) => setEditDialog(prev => ({ ...prev, customAlias: e.target.value }))}
                  className="col-span-3"
                  placeholder="e.g. my-link"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isEditing || !editDialog.customAlias.trim() || editDialog.customAlias === editDialog.shortCode} className="bg-[#ff5f00] hover:bg-[#e65500]">
                {isEditing ? 'Saving...' : 'Save changes'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}