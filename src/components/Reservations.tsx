import React from 'react'
import { FieldArray, Form } from 'redux-form'
import { Button, Container, Row, Col } from 'reactstrap'

import { WEEK_DAYS } from '../types'
import { clearReservations, saveReservations } from '../actions/machine'
import SingleDayReservations from './SingleDayReservations'
import './Reservations.scss'

const validate = (values: any) => {
  const errors = {
    // monday: [{ start: 'must be present' }],
    //tuesday: { _error: 'error' },
  }
  return errors
}

const Reservations = () => {
  const { clearReservations, handleSubmit, machine, saveReservations } = {}
  return (
    <Container className="reservations">
      <Form onSubmit={handleSubmit(saveReservations)}>
        <Row>
          <Col xs={8}>
            <h2>Reservations</h2>
            {WEEK_DAYS.map((day) => (
              <FieldArray
                key={`single-${day}`}
                component={SingleDayReservations}
                name={day}
              />
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
      </Form>
    </Container>
  )
}

export default Reservations
