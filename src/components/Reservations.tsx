import './Reservations.scss'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Col, Container, Row } from 'reactstrap'

import { ReservationFormValues, WEEK_DAYS } from '../types'
import SingleDayReservations from './SingleDayReservations'

const validate = (values: any) => {
  const errors = {
    // monday: [{ start: 'must be present' }],
    //tuesday: { _error: 'error' },
  }
  return errors
}

const Reservations = () => {
  const methods = useForm<ReservationFormValues>()
  // const { clearReservations, machine, saveReservations } = {}
  const onSubmit = (data: ReservationFormValues) => {
    console.log({ data })
  }
  return (
    <Container className="reservations">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                // onClick={clearReservations}
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
