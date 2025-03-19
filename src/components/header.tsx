import { Calendar, CalendarClock, CalendarPlus, UserPlus } from 'lucide-react'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { AccountMenu } from './account-menu'

export function Header() {
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

          <NavLink to="/create-schedule">
            <CalendarPlus className="h-4 w-4" />
            Novo agendamento
          </NavLink>

          <NavLink to="/sign-up">
            <UserPlus className="h-4 w-4" />
            Novo aluno
          </NavLink>

          <NavLink to="/sign-up">
            <UserPlus className="h-4 w-4" />
            Novo professor
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
