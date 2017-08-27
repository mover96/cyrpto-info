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
        borderStyle: 'solid',
        borderWidth: '3px',
        height: '300px',
        margin: '5px',
        padding: '5px',
        alignItems: 'center'
      }}
      className="ms-borderColor-neutralPrimary ms-borderColor-neutralSecondary--hover"
    >
      <span className="ms-font-xxl ms-fontColor-themePrimary">
        {props.coinInfo.name}
      </span>
      <br />
      <br />
      <div style={{ height: '33%' }}>
        <span style={{ wordWrap: 'break-word' }} className="ms-font-l">
          {props.coinInfo.ticker}
        </span>
        <hr />
        <span style={{ wordWrap: 'break-word' }} className="ms-font-l">
          USD: {props.coinInfo.usdPrice}
        </span>
        <br />
        <span style={{ wordWrap: 'break-word' }} className="ms-font-l">
          BTC: {props.coinInfo.btcPrice}
        </span>
        <br />
        <br />
        <span style={{ wordWrap: 'break-word' }} className="ms-font-l">
          Coins Owned: {props.coinInfo.myCoins}
        </span>
        <br />
        <span style={{ wordWrap: 'break-word' }} className="ms-font-l">
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
          <span
            style={{ wordWrap: 'break-word', order: 2 }}
            className="ms-font-s ms-fontColor-neutralSecondary"
          >
            Volume (24 hours): {props.coinInfo.volume24.toFixed(2)}
          </span>
          <span
            style={{ wordWrap: 'break-word' }}
            className="ms-font-s ms-fontColor-neutralSecondary"
          >
            Time Updated: {props.coinInfo.timestamp.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  )
}
