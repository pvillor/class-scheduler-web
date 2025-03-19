import { api } from '@/lib/axios'

interface FetchSchedulesResponse {
  schedules: [
    {
      id: string
      studentId: string
      teacherId: string
      scheduledAt: string
      status: string
      createdAt: string
      updatedAt: string
    },
  ]
}

export async function fetchSchedules() {
  const { data } = await api.get<FetchSchedulesResponse>('/schedules')

  return data
}
