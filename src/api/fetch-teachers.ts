import { api } from '@/lib/axios'

interface FetchTeachersResponse {
  teachers: {
    id: string
    name: string
    email: string
    passwordHash: string
    role: 'teacher'
  }[]
}

export async function fetchTeachers() {
  const { data } = await api.get<FetchTeachersResponse>('/teachers')

  return data
}
