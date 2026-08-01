import { Calendar } from "@/components/ui/calendar"
import { fr } from "date-fns/locale"

export function MonthCalendar() {

  return (
    <Calendar
      mode="single"
      selected={new Date()}
      onSelect={new Date()}
      locale={fr}
      className="hidden lg:block w-full rounded-sm border border-border"
      captionLayout="dropdown"
    />
  )
}
