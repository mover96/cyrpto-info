import * as React from 'react'

import { PriceBlock } from './PriceBlock'
import { CoinInfo } from '../interfaces/coinInfo'

export interface ResponsiveShellProps {
  coins: CoinInfo[]
}

export const ResponsiveShell: React.SFC<ResponsiveShellProps> = props => {
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
    </div>
  )
}
