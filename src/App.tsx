import 'bootstrap/dist/css/bootstrap.min.css'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Alert, Spinner } from 'reactstrap'

import { fetchReservation } from './api/reservation'
import { Reservations } from './components'

export const App = () => {
  const reservationsQuery = useQuery({
    queryKey: ['reservations'],
    queryFn: fetchReservation,
  })

  if (reservationsQuery.isError)
    return <Alert color="danger">Error when loading reservations</Alert>

  if (reservationsQuery.isLoading) return <Spinner />

  return <Reservations reservations={reservationsQuery.data} />
}
