import { useEffect, useState } from 'react'

export default function useForm(initialValues, callback) {
  const [values, setValues] = useState(initialValues)
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    if (submit)
      callback()
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit(true)
  }

  const handleChange = (event) => {
    if (event.persist) event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}