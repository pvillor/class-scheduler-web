import { api } from '@/lib/axios'

export interface GetProfileResponse {
  id: string
  name: string
  email: string
  passwordHash: string
  role: 'student' | 'teacher' | 'admin'
}

export async function getProfile() {
  const { data } = await api.get<GetProfileResponse>('/me', {
    withCredentials: true,
  })

  return data
}
