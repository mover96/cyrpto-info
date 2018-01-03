import * as React from 'react'

import { PriceBlock } from './PriceBlock'
import { CoinInfo } from '../interfaces/coinInfo'
import { UserSwitch } from './UserSwitch'

export interface ResponsiveShellProps {
  coins: CoinInfo[]
  changeView: (view: number) => void
  view: number
}

export const ResponsiveShell: React.SFC<ResponsiveShellProps> = props => {
  let totalPrice = 0
  props.coins.forEach(coin => {
    totalPrice += coin.myCoins * coin.usdPrice
  })
  const priceBlocks = props.coins.map((coin: CoinInfo, index: number) => {
    return <PriceBlock coinInfo={coin} key={index} />
  })
  return (
    <div style={{ margin: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1
          style={{ fontSize: '2.5em' }}
          className="ms-font-su ms-fontColor-themePrimary"
        >
          Left Angle Bracket
        </h1>
      </div>
      <UserSwitch changeView={props.changeView} view={props.view} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            maxWidth: '980px'
          }}
        >
          {priceBlocks}
        </div>
      </div>
      <span
        style={{
          wordWrap: 'break-word',
          fontSize: '1.3em',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2em',
          paddingBottom: '2em'
        }}
        className="ms-font-l"
      >
        Total Estimated Value = ${totalPrice
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
      </span>
    </div>
  )
}
