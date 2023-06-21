import 'react-datepicker/dist/react-datepicker.css'

import React from 'react'
import DatePicker from 'react-datepicker'
import { useController, useFormContext } from 'react-hook-form'

type TimePickerWrapperProps = {
  name: string
}
const TimePickerWrapper = ({ name }: TimePickerWrapperProps) => {
  const { control } = useFormContext()
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return (
    <React.Fragment>
      <DatePicker
        onChange={(date) => {
          field.onChange(date)
        }}
        selected={field.value ? new Date(field.value) : undefined}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />
      {error && <span className="reservations__error">{error.message}</span>}
    </React.Fragment>
  )
}
export default TimePickerWrapper
