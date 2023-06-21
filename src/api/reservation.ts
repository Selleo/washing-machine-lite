import axios from 'axios'

import { Reservation, ReservationFormValues } from '../types'

const EMPTY_RESERVATION: Reservation = {
  id: 1,
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
}

axios.defaults.baseURL = 'http://localhost:3000'

export const fetchReservation = async () => {
  const response = await axios.get(`/reservations/1`)
  return response.data
}

export const saveReservation = async (reservation: ReservationFormValues) => {
  const response = await axios.put(`/reservations/1`, reservation)
  return response.data
}

export const deleteReservation = async () => {
  const response = await axios.put(`/reservations/1`, EMPTY_RESERVATION)
  return response.data
}
