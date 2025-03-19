import { api } from '@/lib/axios'

export interface CreateScheduleBody {
  teacherId: string
  date: Date
}

export async function createSchedule({ teacherId, date }: CreateScheduleBody) {
  return await api.post('/schedules', { teacherId, date })
}
