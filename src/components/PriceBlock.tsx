import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'

export interface PriceBlockProps {
  coinInfo: CoinInfo
}

export const PriceBlock: React.SFC<PriceBlockProps> = props => {
  return (
    <div style={{ width: '300px', border: 'solid', height: '300px' }}>
      <h2>
        {props.coinInfo.name}
      </h2>
      <span>
        {props.coinInfo.ticker}
      </span>
      <hr />
      <span>
        USD: {props.coinInfo.usdPrice}
      </span>
      <span>
        BTC: {props.coinInfo.btcPrice}
      </span>
      <span>
        Volume (24 hours): {props.coinInfo.volume24}
      </span>
    </div>
  )
}
