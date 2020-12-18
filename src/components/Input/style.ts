import styled from 'styled-components'
import { lighten } from 'polished'

import { DisplayOnly, Emptiness, Validness, FixedHeight } from '../helpers/enums'

export const Label = styled.label`
  display: flex;

  span {
    margin-bottom: 0.5rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    position: absolute;

    color: ${({ theme }) => theme.placeholder_color};
    height: 100%;
    width: 100%;

    pointer-events: none;
    transition: all 0.1s ease;
  }

  label span {
    position: absolute;

    color: inherit;
    font-size: 1.6rem;
    left: 1.4rem;
    top: 2.3rem;

    pointer-events: none;
    transform: translateY(-50%);
    transition: all 0.1s ease;
  }

  input:focus ~ label span,
  textarea:focus ~ label span,
  .${Emptiness.NotEmpty} ~ label span,
  .${Validness.Valid} ~ label span,
  .${Validness.Invalid} ~ label span {
    font-size: 1.2rem;
    top: 1.2rem;

    transform: translateY(-50%);
  }

  input:disabled ~ label,
  textarea:disabled ~ label {
    color: ${({ theme }) => theme.placeholder_color};
  }

  .${Validness.Valid}:valid ~ label {
    color: ${({ theme }) => lighten(0.1, theme.validation.valid)};
  }

  .${Validness.Valid}:valid:focus ~ label {
    color: ${({ theme }) => theme.validation.valid};
  }

  .${Validness.Invalid} ~ label {
    color: ${({ theme }) => lighten(0.1, theme.validation.invalid)};
  }

  .${Validness.Invalid}:focus ~ label {
    color: ${({ theme }) => theme.validation.invalid};
  }
`

export const Input = styled.input`
  position: relative;

  width: 100%;
  height: 4.6rem;

  outline: none;
  box-shadow: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.border_radius};
  border: none;
  padding-top: 1.4rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;

  & + div {
    position: absolute;
    top: 0;

    border-radius: ${({ theme }) => theme.border_radius};
    width: 100%;
    height: 4.6rem;
    left: 0;
    bottom: 0;

    border: 0.1rem solid transparent;
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.inner_box_shadow_color};

    pointer-events: none;
    transition: all 0.1s ease;
  }

  &:hover:not(:disabled) + div {
    border-color: ${({ theme }) => theme.placeholder_color};
  }

  &:disabled + div {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.inner_box_shadow_color};
  }

  &:disabled.${DisplayOnly.OnlyDisplay} + div {
    box-shadow: none;
  }

  // Only for accessibility, but really doesn't do anything
  &:focus {
    border-color: ${({ theme }) => theme.placeholder_color};
    border-width: 0;
  }

  // validation colors

  &.${Validness.NotValidated}:focus + div {
    border-color: ${({ theme }) => theme.placeholder_color};
  }

  &.${Validness.Valid} + div {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + lighten(0.1, theme.validation.valid)};
  }

  &.${Validness.Valid}:focus + div {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.validation.valid};
  }

  &.${Validness.Valid}:focus:valid + div {
    border-color: ${({ theme }) => theme.validation.valid};
  }

  &.${Validness.Invalid} + div {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + lighten(0.1, theme.validation.invalid)};
  }

  &.${Validness.Invalid}:focus + div {
    border-color: ${({ theme }) => theme.validation.invalid};
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.validation.invalid};
  }
`

export const StyledTextArea = styled.textarea`
  resize: vertical;

  outline: none;
  box-shadow: none;
  border-radius: ${({ theme }) => theme.border_radius} ${({ theme }) => theme.border_radius} 0
    ${({ theme }) => theme.border_radius};
  border: 0.1rem solid transparent;
  box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.inner_box_shadow_color};

  width: 100%;
  height: 100%;
  padding: 1.4rem;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  min-height: 40rem;

  transition: all 0.1s ease;

  &.${FixedHeight.Fixed} {
    resize: none;

    border-radius: ${({ theme }) => theme.border_radius};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.placeholder_color};
  }

  &:focus:not(:disabled) {
    border-color: ${({ theme }) => theme.placeholder_color};
  }

  &:disabled {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.inner_box_shadow_color};
  }

  &:disabled.${DisplayOnly.OnlyDisplay} {
    box-shadow: none;
    border-color: ${({ theme }) => lighten(0.2, theme.placeholder_color)};
    background-color: ${({ theme }) => lighten(0.25, theme.placeholder_color)};

    &::-webkit-resizer {
      display: none;
    }
  }

  // validation colors

  &.${Validness.NotValidated}:focus {
    border-color: ${({ theme }) => theme.placeholder_color};
  }

  &.${Validness.Valid} {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + lighten(0.1, theme.validation.valid)};
  }

  &.${Validness.Valid}:focus {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.validation.valid};
  }

  &.${Validness.Valid}:focus:valid {
    border-color: ${({ theme }) => theme.validation.valid};
  }

  &.${Validness.Invalid} {
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + lighten(0.1, theme.validation.invalid)};
  }

  &.${Validness.Invalid}:focus {
    border-color: ${({ theme }) => theme.validation.invalid};
    box-shadow: ${({ theme }) => theme.inner_box_shadow_size + theme.validation.invalid};
  }
`
