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
import { fetchSchedules } from '@/api/fetch-schedules'
import { useQuery } from '@tanstack/react-query'

export function Schedules() {
  const { data } = useQuery({
    queryFn: fetchSchedules,
    queryKey: ['schedules'],
  })

  if (!data) {
    return null
  }

  const { schedules } = data

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
                  <TableHead>Aluno</TableHead>
                  <TableHead className="w-[320px]">Professor</TableHead>
                  <TableHead className="w-[400px]">Agendado para</TableHead>
                  <TableHead className="w-[164px]" />
                  <TableHead className="w-[132px]" />
                </TableRow>
              </TableHeader>

              <TableBody>
                {schedules.map(schedule => (
                  <ScheduleTableRow
                    key={schedule.id}
                    name={schedule.studentId}
                    email={schedule.teacherId}
                    date={schedule.scheduledAt}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
