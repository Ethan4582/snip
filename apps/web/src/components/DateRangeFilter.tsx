"use client"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format, subDays } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DateRangeFilterProps {
  onRangeChange: (range: { from: Date; to: Date }) => void;
}

export function DateRangeFilter({ onRangeChange }: DateRangeFilterProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })
  const [preset, setPreset] = React.useState("30")

  const handlePresetChange = (value: string) => {
    setPreset(value)
    const to = new Date()
    let from = new Date()
    if (value === "7") from = subDays(to, 7)
    else if (value === "30") from = subDays(to, 30)
    else if (value === "90") from = subDays(to, 90)
    else return // Custom, do not update yet
    
    setDate({ from, to })
    onRangeChange({ from, to })
  }

  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range)
    setPreset("custom")
    if (range?.from && range?.to) {
      onRangeChange({ from: range.from, to: range.to })
    }
  }

  return (
    <div className="flex items-center gap-2">
      {preset === "custom" && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[260px] justify-start text-left font-normal bg-white border-gray-200 h-9",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar

              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleDateSelect}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      )}

      <Select value={preset} onValueChange={handlePresetChange}>
        <SelectTrigger className="w-[140px] bg-white h-9 border-gray-200 shadow-sm focus:ring-0 focus:ring-offset-0">
          <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="7">Last 7 days</SelectItem>
          <SelectItem value="30">Last 30 days</SelectItem>
          <SelectItem value="90">Last 90 days</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
