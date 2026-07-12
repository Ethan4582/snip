"use client"
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { BarChart3, Star, Copy, Trash2, Check } from 'lucide-react'
import { format } from 'date-fns'

export interface SnipRow {
  id: string
  short_code: string
  long_url: string
  custom_alias: string | null
  expiration_date: string | null
  is_favorite: boolean
  created_at: string
  clicks?: number
}

interface SnipsTableProps {
  data: SnipRow[]
  onDataChange: () => void
}

export function SnipsTable({ data, onDataChange }: SnipsTableProps) {
  const router = useRouter()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  
  const handleCopy = useCallback((shortCode: string) => {
    const url = `${window.location.origin}/${shortCode}`
    navigator.clipboard.writeText(url)
    setCopiedCode(shortCode)
    setTimeout(() => setCopiedCode(null), 2000)
  }, [])

  const handleFavorite = useCallback(async (shortCode: string, currentFav: boolean) => {
    try {
      await apiFetch(`/urls/${shortCode}/favorite`, {
        method: 'PATCH',
        body: JSON.stringify({ is_favorite: !currentFav })
      })
      onDataChange()
    } catch (err) {
      console.error('Failed to toggle favorite', err)
    }
  }, [onDataChange])

  const handleDelete = useCallback(async (shortCode: string) => {
    if (!confirm('Are you sure you want to delete this link?')) return
    try {
      await apiFetch(`/urls/${shortCode}`, { method: 'DELETE' })
      onDataChange()
    } catch (err) {
      console.error('Failed to delete URL', err)
    }
  }, [onDataChange])

  if (data.length === 0) {
    return (
      <div className="border border-dashed border-gray-300 rounded-lg p-12 text-center">
        <p className="text-gray-500">No links found.</p>
      </div>
    )
  }

  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Short Link</TableHead>
            <TableHead>Original URL</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium text-gray-900">
                snip.cc/{row.short_code}
                {row.custom_alias && (
                  <span className="ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Alias
                  </span>
                )}
              </TableCell>
              <TableCell className="text-gray-500 max-w-[200px] truncate" title={row.long_url}>
                {row.long_url}
              </TableCell>
              <TableCell className="text-gray-500">
                {row.clicks !== undefined ? row.clicks.toLocaleString() : '-'}
              </TableCell>
              <TableCell className="text-gray-500">
                {format(new Date(row.created_at), 'MMM d, yyyy')}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-[#ff6201]"
                    onClick={() => router.push(`/dashboard?snip=${row.short_code}`)}
                    title="Analytics"
                  >
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${row.is_favorite ? 'text-yellow-500 hover:text-yellow-600' : 'text-gray-400 hover:text-yellow-500'}`}
                    onClick={() => handleFavorite(row.short_code, row.is_favorite)}
                    title="Toggle Favorite"
                  >
                    <Star className="h-4 w-4" fill={row.is_favorite ? 'currentColor' : 'none'} />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-gray-900"
                    onClick={() => handleCopy(row.short_code)}
                    title="Copy Link"
                  >
                    {copiedCode === row.short_code ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-red-500"
                    onClick={() => handleDelete(row.short_code)}
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
