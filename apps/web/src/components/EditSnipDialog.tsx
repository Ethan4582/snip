import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { apiFetch } from '@/lib/api'
import type { Url } from '@snip/shared'

interface EditSnipDialogProps {
  open: boolean
  shortCode: string | null
  initialAlias: string
  onClose: () => void
  onSuccess: (updatedUrl: Url) => void
}

export function EditSnipDialog({ open, shortCode, initialAlias, onClose, onSuccess }: EditSnipDialogProps) {
  const [customAlias, setCustomAlias] = useState(initialAlias)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (open) {
      setCustomAlias(initialAlias)
    }
  }, [open, initialAlias])

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!shortCode) return
    setIsEditing(true)
    
    try {
      const res = await apiFetch<Url>(`/urls/${shortCode}`, {
        method: 'PATCH',
        body: JSON.stringify({ custom_alias: customAlias })
      })
      toast.success('Alias updated successfully')
      onSuccess(res)
      onClose()
    } catch (err: any) {
      if (err.message?.includes('taken') || err.message?.includes('409')) {
        toast.error('Custom alias is already taken')
      } else {
        toast.error('Failed to update alias')
      }
    } finally {
      setIsEditing(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
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
                value={customAlias}
                onChange={(e) => setCustomAlias(e.target.value)}
                className="col-span-3"
                placeholder="e.g. my-link"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isEditing || !customAlias.trim() || customAlias === shortCode} className="bg-[#ff5f00] hover:bg-[#e65500]">
              {isEditing ? 'Saving...' : 'Save changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}