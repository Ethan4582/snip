import { SnipsTable } from '@/components/SnipsTable'

export const metadata = {
  title: 'All Snips | Snip',
  description: 'Manage all your short links',
}

export default function AllSnipsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">All Snips</h1>
        <p className="text-gray-500 mt-1">View, search, and manage all your created links.</p>
      </div>
      
      <SnipsTable title="Your Links" />
    </div>
  )
}
