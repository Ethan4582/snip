const CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function toBase62(n: number): string {
  if (n === 0) return '0'
  let result = ''
  while (n > 0) {
    result = CHARSET[n % 62] + result
    n = Math.floor(n / 62)
  }
  return result
}

const RESERVED = new Set(['api', 'admin', 'auth', 'login', 'signup', 'dashboard', 'health'])
const ALIAS_RE = /^[a-zA-Z0-9-]{3,30}$/

export function validateAlias(alias: string): string | null {
  if (!ALIAS_RE.test(alias)) return 'Alias must be 3–30 alphanumeric characters or hyphens'
  if (RESERVED.has(alias.toLowerCase())) return `"${alias}" is a reserved word`
  return null
}
