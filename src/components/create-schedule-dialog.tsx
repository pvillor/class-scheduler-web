import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createSchedule } from '@/api/create-schedule'
import { toast } from 'sonner'
import { Label } from './ui/label'
import { fetchTeachers } from '@/api/fetch-teachers'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { Calendar } from './ui/calendar'
import { queryClient } from '@/lib/react-query'

const createScheduleForm = z.object({
  teacherId: z.string().cuid2(),
  date: z.coerce.date(),
})

type CreateScheduleForm = z.infer<typeof createScheduleForm>

export function CreateScheduleDialog() {
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateScheduleForm>({ resolver: zodResolver(createScheduleForm) })

  const { mutateAsync: createScheduleFn } = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] })
    },
  })

  const { data } = useQuery({
    queryFn: fetchTeachers,
    queryKey: ['teachers'],
  })

  const [date, setDate] = useState<Date>()

  if (!data) {
    return null
  }

  const { teachers } = data

  async function handleCreateSchedule({ teacherId, date }: CreateScheduleForm) {
    try {
      await createScheduleFn({ teacherId, date })

      toast.success('Agendamento realizado com sucesso!')
    } catch (error) {
      toast.error('Ocorreu um erro no agendamento')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateSchedule)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="teacher">Professor</Label>
        <Select onValueChange={value => setValue('teacherId', value)}>
          <SelectTrigger>
            <SelectValue id="teacher" placeholder="Selecione um professor" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Professor</SelectLabel>
              {teachers.map(teacher => (
                <SelectItem value={teacher.id} key={teacher.id}>
                  {teacher.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Data</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>Escolha uma data</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={selectedDate => {
                if (selectedDate) {
                  setDate(selectedDate)
                  setValue('date', selectedDate)
                }
              }}
              locale={ptBR}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        Agendar
      </Button>
    </form>
  )
}
