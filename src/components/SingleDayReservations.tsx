import capitalize from 'lodash/capitalize'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Button, Col, Row } from 'reactstrap'

import { ReservationFormValues, weekDay } from '../types'
import TimePickerWrapper from './TimePickerWrapper'

type SingleDayReservationProps = {
  name: weekDay
}
const SingleDayReservations = ({ name }: SingleDayReservationProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormValues>()
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  })

  return [
    <Row key="header">
      <Col>
        <h5>{capitalize(name)}</h5>
        {errors[name] && (
          <span className="reservations__error">{errors[name]?.message}</span>
        )}
      </Col>
    </Row>,
    <Row key="entry">
      {fields.map((field, index) => (
        <Row key={field.id} className="reservations__single-entry">
          <Col xs={{ size: 3, offset: 1 }}>
            <TimePickerWrapper name={`${name}.${index}.start`} />
          </Col>
          <Col xs={{ size: 3, offset: 2 }}>
            <TimePickerWrapper name={`${name}.${index}.end`} />
          </Col>
          <Col xs={{ size: 1, offset: 1 }}>
            <Button
              onClick={() => {
                remove(index)
              }}
              color="danger"
              className="reservations__remove-btn"
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}
    </Row>,
    <Row key="footer">
      <Col xs={{ size: 3, offset: 6 }}>
        <Button
          onClick={() => {
            append({ start: null, end: null })
          }}
          color="warning"
          className="reservations__clear-btn"
        >
          + Add Entry
        </Button>
      </Col>
    </Row>,
  ]
}

export default SingleDayReservations
