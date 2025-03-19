import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  email: string
  passwordHash: string
  role: string
}

export async function getProfile() {
  const { data } = await api.get<GetProfileResponse>('/me', {
    withCredentials: true,
  })

  return data
}
