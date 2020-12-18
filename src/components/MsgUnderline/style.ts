import styled, { css } from 'styled-components'
import { MsgType } from '../helpers/enums'

const hideCSS = css`
  font-size: 0;
  opacity: 0;

  transform: scaleY(0);
`

export interface IMsgWrapper {
  type?: MsgType
  hide?: boolean
}

export const MsgWrapper = styled.div<IMsgWrapper>`
  color: ${({ theme }) => theme.placeholder_color};
  font-size: 1.2rem;

  transition: opacity 0.1s ease 0.1s, font-size 0.1s ease;

  ${({ type }) => {
    if (type === MsgType.Error) {
      return css`
        color: ${({ theme }) => theme.validation.invalid};
      `
    } else if (type === MsgType.Success) {
      return css`
        color: ${({ theme }) => theme.validation.valid};
      `
    }
  }}

  ${({ hide }) => hide && hideCSS}
`
