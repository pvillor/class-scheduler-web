import { api } from '@/lib/axios'

export interface CreateAccountBody {
  name: string
  email: string
  password: string
  role: 'student' | 'teacher'
}

export async function createAccount({
  name,
  email,
  password,
  role,
}: CreateAccountBody) {
  return await api.post('/users', { name, email, password, role })
}
