import { useState, useEffect, useCallback } from 'react'
import { apiFetch } from '../lib/api'
import Navbar from '../components/Navbar'
import type { Url, CreateUrlResponse } from '@snip/shared'

export default function Dashboard() {
  const [urls, setUrls] = useState<Url[]>([])
  const [loadingUrls, setLoadingUrls] = useState(true)

  const [longUrl, setLongUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [newShortUrl, setNewShortUrl] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const fetchUrls = useCallback(async () => {
    try {
      const data = await apiFetch<Url[]>('/urls')
      setUrls(data)
    } finally {
      setLoadingUrls(false)
    }
  }, [])

  useEffect(() => {
    fetchUrls()
  }, [fetchUrls])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFormError(null)
    setNewShortUrl(null)

    try {
      const res = await apiFetch<CreateUrlResponse>('/urls', {
        method: 'POST',
        body: JSON.stringify({
          long_url: longUrl,
          ...(customAlias ? { custom_alias: customAlias } : {}),
          ...(expirationDate ? { expiration_date: new Date(expirationDate).toISOString() } : {}),
        }),
      })
      setNewShortUrl(res.short_url)
      setLongUrl('')
      setCustomAlias('')
      setExpirationDate('')
      fetchUrls()
    } catch (err: unknown) {
      const e = err as { status?: number; data?: { message?: string } }
      if (e.status === 409) setFormError('Custom alias is already taken')
      else setFormError(e.data?.message ?? 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* Create form */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Shorten a URL</h2>
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <div>
              <label htmlFor="long-url" className="block text-sm font-medium text-gray-700 mb-1">
                Long URL <span className="text-red-500">*</span>
              </label>
              <input
                id="long-url"
                type="url"
                required
                placeholder="https://example.com/very/long/path"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="custom-alias" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom alias <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  id="custom-alias"
                  type="text"
                  placeholder="my-link"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Expires at <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  id="expiration-date"
                  type="datetime-local"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>
            {formError && <p className="text-sm text-red-600">{formError}</p>}
            {newShortUrl && (
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                <span className="text-sm text-gray-700 font-mono flex-1 truncate">{newShortUrl}</span>
                <button
                  type="button"
                  id="copy-new-url"
                  onClick={() => copyToClipboard(newShortUrl)}
                  className="text-xs text-gray-500 hover:text-gray-900 shrink-0 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )}
            <button
              id="create-submit"
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 disabled:opacity-50 transition-colors"
            >
              {submitting ? 'Creating…' : 'Create short URL'}
            </button>
          </form>
        </section>

        {/* URL list */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your URLs</h2>
          {loadingUrls ? (
            <p className="text-sm text-gray-400">Loading…</p>
          ) : urls.length === 0 ? (
            <p className="text-sm text-gray-400">No URLs yet. Create one above.</p>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Short code</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Long URL</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Created</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Expires</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {urls.map((url) => (
                    <tr key={url.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-mono text-gray-900">{url.short_code}</td>
                      <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{url.long_url}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {new Date(url.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {url.expiration_date
                          ? new Date(url.expiration_date).toLocaleDateString()
                          : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          id={`copy-${url.short_code}`}
                          onClick={() =>
                            copyToClipboard(
                              `${import.meta.env.VITE_EDGE_URL ?? 'http://localhost:8787'}/${url.short_code}`
                            )
                          }
                          className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          Copy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
