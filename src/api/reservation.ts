import axios from 'axios'

import { Reservation } from '../types'

export const fetchReservation = async () => {
  const response = await axios.get(`/api/reservation`)
  return response.data
}

export const saveReservation = async (reservation: Reservation[]) => {
  const response = await axios.put(`/api/reservation`, reservation)
  return response.data
}

export const deleteReservation = async () => {
  const response = await axios.put(`/api/reservation`, [])
  return response.data
}
