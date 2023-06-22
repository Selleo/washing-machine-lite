import './Reservations.scss'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Col, Container, Row } from 'reactstrap'

import { deleteReservation, saveReservation } from '../api/reservation'
import { ReservationFormValues, WEEK_DAYS } from '../types'
import SingleDayReservations from './SingleDayReservations'

const validate = (values: any) => {
  const errors = {
    // monday: [{ start: 'must be present' }],
    //tuesday: { _error: 'error' },
  }
  return errors
}

type Props = {
  reservations: ReservationFormValues
}
const Reservations = ({ reservations }: Props) => {
  const queryClient = useQueryClient()

  const resetData = useMutation({
    mutationFn: deleteReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] })
    },
  })
  const updateData = useMutation({
    mutationFn: saveReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] })
    },
  })
  const form = useForm<ReservationFormValues>({ values: reservations })

  const clearReservations = () => resetData.mutate()
  const onSubmit = async (data: ReservationFormValues) => {
    updateData.mutate(data)
  }

  return (
    <Container className="reservations">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Row>
            <Col xs={8}>
              <h2>Reservations</h2>
              {WEEK_DAYS.map((day) => (
                <SingleDayReservations key={day} name={day} />
              ))}
              <Button color="primary" type="submit">
                Save data
              </Button>
            </Col>
            <Col xs={4}>
              <Button
                onClick={clearReservations}
                color="warning"
                className="reservations__clear-btn"
              >
                Reset Data
              </Button>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </Container>
  )
}

export default Reservations
