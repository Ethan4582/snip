import { SnipsTable } from '@/components/SnipsTable'

export const metadata = {
  title: 'Favorites | Snip',
  description: 'Manage your favorite short links',
}

export default function FavoritesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Favorites</h1>
        <p className="text-gray-500 mt-1">Quick access to your most important links.</p>
      </div>
      
      <SnipsTable title="Favorite Links" isFavorite={true} />
    </div>
  )
}
