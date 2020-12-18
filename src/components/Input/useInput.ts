import { useState, useEffect } from 'react'

import { DisplayOnly, Visibility, Emptiness, Validness } from '../helpers/enums'

export interface IUseInput {
  errorMsg?: string
  value?: any
  displayOnly?: boolean
  required?: boolean
  revalidate?: boolean
  onFocus?: () => unknown
  onBlur?: () => unknown
  onChange?: (v: string, validness?: Validness) => unknown
  validator?: (v: string) => [boolean, string?]
}

function getVisibilityStatus(v: string): string {
  if (v) {
    return Visibility.Visible
  } else {
    return Visibility.Hidden
  }
}

function getFieldFillStatus(v: string): string {
  if (v) {
    return Emptiness.NotEmpty
  } else {
    return Emptiness.Empty
  }
}

function getValidationStatus(
  v: string,
  errorMsg?: string,
  required?: boolean
): [Validness, string] {
  if (errorMsg) {
    return [Validness.Invalid, errorMsg]
  }

  if (required && v === '') {
    return [Validness.Invalid, '']
  }

  if (!!v && v.length > 0) {
    return [Validness.Valid, '']
  }

  return [Validness.NotValidated, '']
}

export function useInput({ value, displayOnly = false, ...props }: IUseInput) {
  const [errorMsg, setErrorMsg] = useState<string>()
  const [revalidate, setRevalidate] = useState<boolean | undefined>(props.revalidate)

  const [inputEmptiness, setInputEmptiness] = useState<string>()
  const [inputVisibility, setInputVisibility] = useState<string>()
  const [inputValidness, setInputValidness] = useState<Validness>()
  const [displayOnlyClass, setDisplayOnlyClass] = useState<string>(
    displayOnly ? DisplayOnly.OnlyDisplay : DisplayOnly.Default
  )

  useEffect(() => {
    const fieldFillStatus = getFieldFillStatus(value)
    if (inputEmptiness !== fieldFillStatus) {
      setInputEmptiness(fieldFillStatus)
    }

    const visibilityStatus = getVisibilityStatus(value)
    if (inputVisibility !== visibilityStatus) {
      setInputVisibility(visibilityStatus)
    }
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const [validationStatus, newErrorMsg] = getValidationStatus(
      value,
      props.errorMsg,
      props.required
    )
    if (inputValidness !== validationStatus) {
      setInputValidness(validationStatus)
      setErrorMsg(newErrorMsg)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, props.errorMsg, props.required, props.validator, revalidate])

  useEffect(() => {
    setDisplayOnlyClass(displayOnly ? DisplayOnly.OnlyDisplay : DisplayOnly.Default)
  }, [displayOnly])

  useEffect(() => {
    setRevalidate(props.revalidate)
  }, [props.revalidate])

  const onFocus = () => {
    if (inputVisibility !== Visibility.Visible) {
      setInputVisibility(Visibility.Visible)
    }

    if (props.onFocus) {
      props.onFocus()
    }
  }

  const onBlur = () => {
    if (!value) {
      setInputVisibility(Visibility.Hidden)
    }

    if (!revalidate) {
      setRevalidate(true)
    }

    if (props.onBlur) {
      props.onBlur()
    }
  }

  const onChange = (event: any) => {
    if (props.onChange) {
      const [validationStatus] = getValidationStatus(
        event.target.value,
        props.errorMsg,
        props.required
      )

      props.onChange(event.target.value, validationStatus)
    }
  }

  return {
    value,
    errorMsg,
    onFocus,
    onBlur,
    onChange,
    inputVisibility,
    inputEmptiness,
    inputValidness,
    displayOnlyClass,
  }
}
