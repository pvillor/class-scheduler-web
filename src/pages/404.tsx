import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para os{' '}
        <Link to="/" className="text-emerald-600 dark:to-emerald-400">
          Agendamentos
        </Link>
      </p>
    </div>
  )
}
