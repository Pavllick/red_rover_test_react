import { MsgType } from '../helpers/enums'
import { MsgWrapper } from './style'

export interface IMsgUnderline {
  message?: string
  type?: MsgType
}

export const MsgUnderline = ({ type = MsgType.Info, ...props }: IMsgUnderline) => {
  return (
    <MsgWrapper type={type} hide={!props.message}>
      {props.message + ''}
    </MsgWrapper>
  )
}
