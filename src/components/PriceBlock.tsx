import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'

export interface PriceBlockProps {
  coinInfo: CoinInfo
}

export const PriceBlock: React.SFC<PriceBlockProps> = props => {
  return (
    <div
      style={{
        width: '300px',
        minWidth: '300px',
        border: 'solid',
        height: '300px',
        margin: '5px',
        padding: '5px',
        alignItems: 'center'
      }}
    >
      <h2>
        {props.coinInfo.name}
      </h2>
      <div style={{ height: '35%' }}>
        <span style={{ wordWrap: 'break-word' }}>
          {props.coinInfo.ticker}
        </span>
        <hr />
        <span style={{ wordWrap: 'break-word' }}>
          USD: {props.coinInfo.usdPrice}
        </span>
        <br />
        <span style={{ wordWrap: 'break-word' }}>
          BTC: {props.coinInfo.btcPrice}
        </span>
        <br />
        <br />
        <span style={{ wordWrap: 'break-word' }}>
          Coins Owned: {props.coinInfo.myCoins}
        </span>
        <br />
        <span style={{ wordWrap: 'break-word' }}>
          Estimated Value: ${(props.coinInfo.myCoins *
            props.coinInfo.usdPrice).toFixed(2)}
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            height: '100%',
            justifyContent: 'flex-start'
          }}
        >
          <span style={{ wordWrap: 'break-word', order: 2 }}>
            Volume (24 hours): {props.coinInfo.volume24.toFixed(2)}
          </span>
          <span style={{ wordWrap: 'break-word' }}>
            Time Updated: {props.coinInfo.timestamp.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  )
}
