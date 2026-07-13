"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'
import { BarChart2, Copy, MoreVertical, Link2, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { apiFetch } from '@/lib/api'
import { EditSnipDialog } from './EditSnipDialog'
import { DeleteSnipDialog } from './DeleteSnipDialog'

interface RecentSnipsTableProps {
  data: { short_code: string, long_url: string, created_at: string, clicks?: number, is_favorite?: boolean, custom_alias?: string }[]
}

const ICONS_COLORS = [
  { bg: 'bg-[#fff0e6]', text: 'text-[#ff5f00]' },
  { bg: 'bg-[#f0edff]', text: 'text-[#6366f1]' },
  { bg: 'bg-[#e0f8f0]', text: 'text-[#10b981]' },
  { bg: 'bg-[#fef0cd]', text: 'text-[#fdb140]' }
]

export function RecentSnipsTable({ data: initialData }: RecentSnipsTableProps) {
  const edgeUrl = process.env.NEXT_PUBLIC_EDGE_URL || 'http://localhost:8787'

  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean, shortCode: string | null }>({ open: false, shortCode: null })
  const [editDialog, setEditDialog] = useState<{ open: boolean, shortCode: string | null, customAlias: string }>({ open: false, shortCode: null, customAlias: '' })

  const handleCopy = (shortCode: string) => {
    navigator.clipboard.writeText(`${edgeUrl}/${shortCode}`)
    toast.success('Link copied to clipboard')
  }

  return (
    <Card className="shadow-sm border-gray-100 rounded-xl h-full flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-center justify-between border-b border-gray-50 mb-2">
        <CardTitle className="text-base font-semibold text-gray-900">Recent Snips</CardTitle>
        <Link href="/dashboard/snips" className="text-sm text-[#ff5f00] font-medium hover:underline">
          View all
        </Link>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow className="border-none hover:bg-transparent">
              <TableHead className="font-medium text-gray-500 h-10 px-6">Link</TableHead>
              <TableHead className="font-medium text-gray-500 h-10">Created</TableHead>
              <TableHead className="font-medium text-gray-500 h-10">Clicks</TableHead>
              <TableHead className="font-medium text-gray-500 text-right h-10 px-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 h-24">No snips found</TableCell>
              </TableRow>
            ) : initialData.map((item, i) => {
              const color = ICONS_COLORS[i % ICONS_COLORS.length]
              return (
                <TableRow key={i} className="border-gray-50 hover:bg-gray-50/50 group">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color.bg}`}>
                        <Link2 className={`w-5 h-5 ${color.text}`} />
                      </div>
                      <div className="flex flex-col max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]">
                        <Link href={`/dashboard/analytics/${item.short_code}`} className="font-semibold text-gray-900 text-sm hover:text-[#ff5f00] transition-colors truncate">
                          snip.to/{item.short_code}
                        </Link>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="text-xs text-gray-400 truncate mt-0.5 cursor-default">{item.long_url}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-[300px] break-all">{item.long_url}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-col text-sm text-gray-600">
                      <span>{item.created_at ? format(new Date(item.created_at), "MMM d, yyyy") : '—'}</span>
                      <span className="text-xs text-gray-400 mt-0.5">{item.created_at ? format(new Date(item.created_at), "hh:mm a") : '—'}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="font-semibold text-gray-900 text-sm">
                      {item.clicks && item.clicks >= 1000 ? (item.clicks / 1000).toFixed(1) + 'K' : (item.clicks || 0)}
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
            })}
          </TableBody>
        </Table>
      </CardContent>

      <DeleteSnipDialog
        open={deleteDialog.open}
        shortCode={deleteDialog.shortCode}
        onClose={() => setDeleteDialog({ open: false, shortCode: null })}
        onSuccess={() => window.dispatchEvent(new Event('snipCreated'))}
        onError={() => {}}
      />

      <EditSnipDialog
        open={editDialog.open}
        shortCode={editDialog.shortCode}
        initialAlias={editDialog.customAlias}
        onClose={() => setEditDialog({ open: false, shortCode: null, customAlias: '' })}
        onSuccess={() => window.dispatchEvent(new Event('snipCreated'))}
      />
    </Card>
  )
}