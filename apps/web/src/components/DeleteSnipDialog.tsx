import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { toast } from 'sonner'
import { apiFetch } from '@/lib/api'

interface DeleteSnipDialogProps {
  open: boolean
  shortCode: string | null
  onClose: () => void
  onSuccess: (shortCode: string) => void
  onError: () => void
}

export function DeleteSnipDialog({ open, shortCode, onClose, onSuccess, onError }: DeleteSnipDialogProps) {
  const handleDelete = async () => {
    if (!shortCode) return
    const sc = shortCode
    
    // Optimistic UI updates handled by caller
    onSuccess(sc)
    onClose()

    try {
      await apiFetch(`/urls/${sc}`, { method: 'DELETE' })
      toast.success('Snip deleted successfully')
    } catch (err) {
      toast.error('Failed to delete snip')
      onError() // trigger rollback
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={(o) => !o && onClose()}>
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
  )
}