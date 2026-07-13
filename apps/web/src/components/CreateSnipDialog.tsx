"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { CalendarIcon, Link2 } from 'lucide-react'
import { toast } from 'sonner'
import { apiFetch } from '@/lib/api'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function CreateSnipDialog({ children, onSuccess }: { children?: React.ReactNode, onSuccess?: () => void }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [longUrl, setLongUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      let expirationDate: Date | undefined;
      if (date) {
        expirationDate = new Date(date)
        if (time) {
          const [hours, minutes] = time.split(':').map(Number)
          expirationDate.setHours(hours, minutes)
        } else {
          expirationDate.setHours(23, 59, 59) // End of day by default if no time specified
        }
      }

      await apiFetch('/urls', {
        method: 'POST',
        body: JSON.stringify({
          long_url: longUrl,
          custom_alias: customAlias || undefined,
          expiration_date: expirationDate ? expirationDate.toISOString() : undefined,
        })
      })
      
      setOpen(false)
      setLongUrl('')
      setCustomAlias('')
      setDate(undefined)
      setTime('')
      
      onSuccess?.()
      router.refresh()
      window.dispatchEvent(new CustomEvent('snipCreated'))
      toast.success('Short URL created successfully!')
    } catch (err: any) {
      setError(err.message || 'Failed to create short URL')
      toast.error('Failed to create short URL')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg">+ New Snip</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="mx-auto w-12 h-12 bg-orange-50 text-primary rounded-xl flex items-center justify-center mb-2">
            <Link2 className="w-6 h-6" />
          </div>
          <DialogTitle className="text-center text-xl font-semibold">Create Short URL</DialogTitle>
          <p className="text-center text-sm text-gray-500 mt-1">Shorten a long URL and start sharing</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
          
          <div className="space-y-2">
            <Label htmlFor="longUrl" className="text-gray-700">Long URL <span className="text-red-500">*</span></Label>
            <div className="relative">
              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="longUrl"
                placeholder="https://example.com/very/long/path"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                className="pl-9 h-11"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customAlias" className="text-gray-700">Custom alias <span className="text-gray-400 font-normal">(optional)</span></Label>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="customAlias"
                  placeholder="my-link"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  className="pl-9 h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">Expires at <span className="text-gray-400 font-normal">(optional)</span></Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-11",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Select date (optional)</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                  {date && (
                    <div className="p-3 border-t bg-gray-50/50 flex flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs text-gray-500 font-medium">Expiration Time</Label>
                        <Input 
                          type="time" 
                          value={time} 
                          onChange={e => setTime(e.target.value)} 
                          className="h-8 text-sm w-full bg-white" 
                        />
                      </div>
                      <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-orange-50 h-8 text-sm" onClick={(e) => { e.preventDefault(); setDate(undefined); setTime(''); }}>
                        Clear date
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex justify-start gap-3 mt-6 pt-4">
            <Button type="submit" disabled={loading} className="bg-gray-900 hover:bg-gray-800 text-white px-6">
              {loading ? 'Creating...' : 'Create Short URL'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="px-6">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
