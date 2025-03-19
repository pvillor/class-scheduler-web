import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { ScheduleTableRow } from './schedule-table-row'
import { ScheduleTableFilters } from './schedule-table-filters'
import { Pagination } from '@/components/pagination'

export function Schedules() {
  return (
    <>
      <Helmet title="Agendamentos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Agendamentos</h1>

        <div className="space-y-2.5">
          <ScheduleTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]" />
                  <TableHead>Nome</TableHead>
                  <TableHead className="w-[320px]">E-mail</TableHead>
                  <TableHead className="w-[400px]">Agendado para</TableHead>
                  <TableHead className="w-[164px]" />
                  <TableHead className="w-[132px]" />
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ScheduleTableRow key={index} />
                ))}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
