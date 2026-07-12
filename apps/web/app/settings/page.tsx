"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { apiFetch } from '@/lib/api'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User } from '@supabase/supabase-js'
import { format } from 'date-fns'
import { AlertCircle } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
      }
      setLoading(false)
    })
  }, [router])

  const handleDeleteAccount = async () => {

    setIsDeleting(true)
    try {
      await apiFetch('/account', { method: 'DELETE' })
      await supabase.auth.signOut()
      router.push('/')
    } catch (err) {
      console.error('Failed to delete account', err)
      toast.error('Failed to delete account. Please try again.')
      setIsDeleting(false)
    }
  }

  if (loading) {
    return <div className="p-8 text-gray-500 max-w-4xl mx-auto">Loading...</div>
  }

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account and preferences.</p>
      </div>

      {user && (
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your personal account information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Email Address</label>
                <div className="mt-1 text-gray-900">{user.email}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Account ID</label>
                <div className="mt-1 text-gray-900 truncate" title={user.id}>{user.id}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Member Since</label>
                <div className="mt-1 text-gray-900">
                  {format(new Date(user.created_at), 'MMMM d, yyyy')}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-red-200">
        <CardHeader className="bg-red-50/50 rounded-t-lg border-b border-red-100">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
          </div>
          <CardDescription className="text-red-600/80">
            Irreversible and destructive actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-medium text-gray-900">Delete Account</h4>
              <p className="text-sm text-gray-500 mt-1">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="destructive" 
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deleting...' : 'Delete Account'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account, all your short links, and analytics data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="my-4">
                  <label className="text-sm font-medium text-gray-700">Type "DELETE" to confirm:</label>
                  <Input 
                    value={deleteConfirmText} 
                    onChange={(e) => setDeleteConfirmText(e.target.value)} 
                    className="mt-2" 
                    placeholder="DELETE" 
                  />
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setDeleteConfirmText('')}>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={(e) => {
                      if (deleteConfirmText !== 'DELETE') {
                        e.preventDefault()
                        return
                      }
                      handleDeleteAccount()
                    }}
                    disabled={deleteConfirmText !== 'DELETE' || isDeleting}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
