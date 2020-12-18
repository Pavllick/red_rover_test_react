import { ReactNode } from 'react'
import classNames from 'classnames'

import { MsgType } from '../helpers/enums'
import { MsgUnderline } from '../MsgUnderline'
import { Wrapper, Label, InputWrapper, StyledTextArea } from './style'

import { useInput } from './useInput'
import { FixedHeight } from '../helpers/enums'

import { IInputText } from './InputText'

interface ITextArea extends IInputText {
  label?: ReactNode
  fixedHeight?: boolean
}

export function TextArea({ fixedHeight = false, ...props }: ITextArea) {
  const { placeholder, hintMsg, className, disabled = false, onChange, ...useInputProps } = props
  const fixedHeightClass = fixedHeight ? FixedHeight.Fixed : FixedHeight.Default

  const {
    value,
    errorMsg,
    onFocus,
    onBlur,
    inputVisibility,
    inputEmptiness,
    inputValidness,
    displayOnlyClass,
  } = useInput({
    ...useInputProps,
  })

  const onValueChange = (event: any) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <Wrapper>
      <Label>{props.label ? <span>{props.label}</span> : ''}</Label>
      <InputWrapper className={className}>
        <StyledTextArea
          className={classNames(
            inputVisibility,
            inputEmptiness,
            inputValidness,
            displayOnlyClass,
            fixedHeightClass
          )}
          value={value}
          aria-label={placeholder}
          onChange={onValueChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled || displayOnlyClass !== ''}
        />
        <label>
          <span>{placeholder || ''}</span>
        </label>
        <MsgUnderline type={MsgType.Error} message={errorMsg} />
        <MsgUnderline type={MsgType.Info} message={hintMsg} />
      </InputWrapper>
    </Wrapper>
  )
}
