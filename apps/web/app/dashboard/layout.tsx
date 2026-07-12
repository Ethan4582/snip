import { Sidebar } from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <Sidebar />
      <main className="flex-1 w-full min-w-0">
        {children}
      </main>
    </div>
  )
}
