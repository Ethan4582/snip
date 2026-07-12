"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { supabase } from '@/lib/supabase'
import { apiFetch } from '@/lib/api'

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ email?: string, id?: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login')
      } else {
        setUser({
          email: session.user.email,
          id: session.user.id
        })
      }
      setLoading(false)
    })
  }, [router])

  const handleDeleteAccount = async () => {
    const confirmation = prompt('Are you sure you want to delete your account? This action is irreversible. Type "DELETE" to confirm.')
    if (confirmation !== 'DELETE') return

    setIsDeleting(true)
    try {
      await apiFetch('/account', { method: 'DELETE' })
      await supabase.auth.signOut()
      router.push('/')
    } catch (err) {
      console.error('Failed to delete account', err)
      alert('Failed to delete account. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
          <p className="text-gray-500 mt-1">Manage your account preferences.</p>
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
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account preferences.</p>
      </div>
      
      <Card className="shadow-sm border-gray-100">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal account details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
            <Button 
              variant="destructive" 
              onClick={handleDeleteAccount}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete Account'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
