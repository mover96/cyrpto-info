import * as React from 'react'

import { PriceBlock } from './PriceBlock'
import { CoinInfo } from '../interfaces/coinInfo'

export interface UserSwitchProps {
  changeView: (view: number) => void
  view: number
}

export const UserSwitch: React.SFC<UserSwitchProps> = props => {
  let mitchellStyle = {
    paddingRight: '40px',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
  let kevinStyle = { textDecoration: 'none', cursor: 'pointer' }
  if (props.view === 1) {
    mitchellStyle = {
      paddingRight: '40px',
      textDecoration: 'none',
      cursor: 'pointer'
    }
    kevinStyle = { textDecoration: 'underline', cursor: 'pointer' }
  } else {
    mitchellStyle = {
      paddingRight: '40px',
      textDecoration: 'underline',
      cursor: 'pointer'
    }
    kevinStyle = { textDecoration: 'none', cursor: 'pointer' }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        fontSize: '1.3em'
      }}
      className="ms-font-l ms-fontColor-themePrimary"
    >
      <a
        style={mitchellStyle}
        onClick={() => {
          props.changeView(0)
        }}
      >
        Mitchell
      </a>
      <a
        style={kevinStyle}
        onClick={() => {
          props.changeView(1)
        }}
      >
        Kevin
      </a>
    </div>
  )
}
