import { SnipsTable } from '@/components/SnipsTable'

import { CreateSnipDialog } from '@/components/CreateSnipDialog'

export const metadata = {
  title: 'Favorites | Snip',
  description: 'Manage your favorite short links',
}

export default function FavoritesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Favorites</h1>
          <p className="text-gray-500 mt-1">Quick access to your most important links.</p>
        </div>
        <div className="flex gap-3">
          <CreateSnipDialog />
        </div>
      </div>
      
      <SnipsTable isFavorite={true} />
    </div>
  )
}
