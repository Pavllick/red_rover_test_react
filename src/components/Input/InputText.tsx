import { ReactElement } from 'react'
import classNames from 'classnames'

import { Validness, MsgType } from '../helpers/enums'
import { MsgUnderline } from '../MsgUnderline'
import { InputWrapper, Input } from './style'

import { useInput } from './useInput'

export interface IInputText {
  value?: any
  placeholder?: string
  errorMsg?: string
  hintMsg?: string
  className?: string
  disabled?: boolean
  displayOnly?: boolean
  required?: boolean
  onChange?: (v: string, validness?: Validness) => unknown
  onFocus?: () => unknown
  onBlur?: () => unknown
}

export function InputText({ ...props }: IInputText): ReactElement {
  const { placeholder, hintMsg, className, disabled = false, ...useInputProps } = props

  const {
    value,
    errorMsg,
    onFocus,
    onBlur,
    onChange,
    inputVisibility,
    inputEmptiness,
    inputValidness,
    displayOnlyClass,
  } = useInput({
    ...useInputProps,
  })

  return (
    <InputWrapper className={className}>
      <Input
        className={classNames(inputVisibility, inputEmptiness, inputValidness, displayOnlyClass)}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        formNoValidate={true}
        disabled={disabled || displayOnlyClass !== ''}
      />
      <div></div>
      <label>
        <span>{placeholder || ''}</span>
      </label>
      <MsgUnderline type={MsgType.Error} message={errorMsg} />
      <MsgUnderline type={MsgType.Info} message={hintMsg} />
    </InputWrapper>
  )
}
