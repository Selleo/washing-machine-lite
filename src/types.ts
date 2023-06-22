export const WEEK_DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const

export type weekDay = (typeof WEEK_DAYS)[number]

export type SingleReservation = {
  start: Date | null
  end: Date | null
}

export type ReservationFormValues = {
  [K in weekDay]: SingleReservation[]
}

export type Reservation = {
  id: number
} & ReservationFormValues
