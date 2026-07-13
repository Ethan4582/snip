"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'
import { apiFetch } from '@/lib/api'
import { CreateSnipDialog } from '@/components/CreateSnipDialog'

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ email: string; name: string; initials: string; id: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session || !session.user.email) {
        router.push('/login')
      } else {
        const email = session.user.email
        const name = email.split('@')[0]
        const initials = name.substring(0, 2).toUpperCase()
        setUser({
          email,
          name,
          initials,
          id: session.user.id
        })
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
    } finally {
      setIsDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
            <p className="text-gray-500 mt-1">Manage your account preferences.</p>
          </div>
          <div className="flex gap-3">
            <CreateSnipDialog />
          </div>
        </div>
        
        <Card className="shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Your personal account details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 p-3 bg-gray-50 rounded-md border border-gray-200">
                <Skeleton className="h-5 w-48" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">User ID</label>
              <div className="mt-1 p-3 bg-gray-50 rounded-md border border-gray-200">
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
          <p className="text-gray-500 mt-1">Manage your account preferences.</p>
        </div>
        <div className="flex gap-3">
          <CreateSnipDialog />
        </div>
      </div>
      
      <Card className="shadow-sm border-gray-100">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal account details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
              {user?.initials || 'U'}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{user?.name || 'User'}</h3>
              <p className="text-gray-500 text-sm">{user?.email || 'Unknown'}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Display Name</label>
              <div className="mt-1 p-3 bg-gray-50 rounded-md text-gray-900 text-sm border border-gray-200">
                {user?.name || 'Unknown'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 p-3 bg-gray-50 rounded-md text-gray-900 text-sm border border-gray-200">
                {user?.email || 'Unknown'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">User ID</label>
              <div className="mt-1 p-3 bg-gray-50 rounded-md text-gray-500 font-mono text-xs border border-gray-200">
                {user?.id || 'Unknown'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-red-100 bg-red-50/50">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
          <CardDescription className="text-red-500/80">Irreversible and destructive actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-medium text-gray-900">Delete Account</h4>
              <p className="text-sm text-gray-600 max-w-lg mt-1">
                Once you delete your account, there is no going back. This will permanently delete all your short links, analytics data, and profile information.
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
