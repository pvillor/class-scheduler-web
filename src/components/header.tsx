import { Calendar, CalendarClock, CalendarPlus, UserPlus } from 'lucide-react'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { AccountMenu } from './account-menu'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/get-profile'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { CreateScheduleDialog } from './create-schedule-dialog'
import { Button } from './ui/button'

export function Header() {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  if (!profile) {
    return null
  }

  const isUserStudent = profile.role === 'student'
  // const isUserTeacher = profile.role === 'teacher'
  const isUserAdmin = profile.role === 'admin'

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Calendar className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <CalendarClock className="h-4 w-4" />
            Agendamentos
          </NavLink>

          {isUserStudent && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <CalendarPlus className="h-4 w-4" />
                  Novo agendamento
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Novo agendamento</DialogTitle>
                </DialogHeader>

                <CreateScheduleDialog />
              </DialogContent>
            </Dialog>
          )}

          {isUserAdmin && (
            <>
              <NavLink to="/sign-up">
                <UserPlus className="h-4 w-4" />
                Novo aluno
              </NavLink>

              <NavLink to="/sign-up">
                <UserPlus className="h-4 w-4" />
                Novo professor
              </NavLink>
            </>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu profile={profile} />
        </div>
      </div>
    </div>
  )
}
