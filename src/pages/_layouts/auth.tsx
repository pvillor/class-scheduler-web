import { Outlet } from 'react-router-dom'
import { Calendar } from 'lucide-react'

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Calendar className="size-5" />
          <span className="font-semibold">class.scheduler</span>
        </div>

        <footer className="text-sm">
          Painel &copy; class.scheduler - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
