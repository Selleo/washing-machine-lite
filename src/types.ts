export type Reservation = {
  id: string
}

export const WEEK_DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const

export type SingleReservation = {
  start: Date | null
  end: Date | null
}

export type ReservationFormValues = {
  [K in (typeof WEEK_DAYS)[number]]: SingleReservation[]
}
