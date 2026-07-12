export interface Url {
  id: string
  short_code: string
  long_url: string
  custom_alias: string | null
  user_id: string
  expiration_date: string | null
  created_at: string
}

export interface CreateUrlRequest {
  long_url: string
  custom_alias?: string
  expiration_date?: string
}

export interface CreateUrlResponse {
  short_code: string
  short_url: string
  long_url: string
  expiration_date: string | null
}

export interface ResolveResponse {
  long_url: string
  expires_at: string | null
}

export interface ApiError {
  message: string
}
