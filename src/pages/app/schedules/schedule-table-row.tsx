import { TableRow, TableCell } from '@/components/ui/table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ScheduleTableRowProps {
  name: string
  email: string
  date: string
}

export function ScheduleTableRow({ name, email, date }: ScheduleTableRowProps) {
  return (
    <TableRow>
      <TableCell />

      <TableCell className="font-mono text-sm font-medium">{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className="text-muted-foreground">
        {format(date, 'PPPP', { locale: ptBR })}
      </TableCell>
    </TableRow>
  )
}
