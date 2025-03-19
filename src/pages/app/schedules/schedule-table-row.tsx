import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { ArrowRight, X } from 'lucide-react'

export function ScheduleTableRow() {
  return (
    <TableRow>
      <TableCell />

      <TableCell className="font-mono text-sm font-medium">John Doe</TableCell>
      <TableCell>john.doe@example.com</TableCell>
      <TableCell className="text-muted-foreground">
        18 de Março de 2025 às 22:00
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aceitar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
