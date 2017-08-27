import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'

export interface PriceBlockProps {
  coinInfo: CoinInfo
}

export const PriceBlock: React.SFC<PriceBlockProps> = props => {
  return (
    <div style={{ height: '100%' }}>
      <span
        style={{ fontSize: '2em' }}
        className="ms-font-xxl ms-fontColor-themePrimary"
      >
        {props.coinInfo.name}
      </span>
      <br />
      <br />
      <div style={{ height: '33%' }}>
        <span
          style={{ wordWrap: 'break-word', fontSize: '1em' }}
          className="ms-font-l"
        >
          {props.coinInfo.ticker}
        </span>
        <hr />
        <span
          style={{ wordWrap: 'break-word', fontSize: '1em' }}
          className="ms-font-l"
        >
          USD: {props.coinInfo.usdPrice}
        </span>
        <br />
        <span
          style={{ wordWrap: 'break-word', fontSize: '1em' }}
          className="ms-font-l"
        >
          BTC: {props.coinInfo.btcPrice}
        </span>
        <br />
        <br />
        <span
          style={{ wordWrap: 'break-word', fontSize: '1em' }}
          className="ms-font-l"
        >
          Coins Owned: {props.coinInfo.myCoins}
        </span>
        <br />
        <span
          style={{ wordWrap: 'break-word', fontSize: '1em' }}
          className="ms-font-l"
        >
          Estimated Value: ${(props.coinInfo.myCoins *
            props.coinInfo.usdPrice).toFixed(2)}
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            height: '95%',
            justifyContent: 'flex-start'
          }}
        >
          <span
            style={{ wordWrap: 'break-word', fontSize: '.8em', order: 2 }}
            className="ms-font-s ms-fontColor-neutralSecondary"
          >
            Volume (24 hours): {props.coinInfo.volume24.toFixed(2)}
          </span>
          <span
            style={{ wordWrap: 'break-word', fontSize: '.8em' }}
            className="ms-font-s ms-fontColor-neutralSecondary"
          >
            Time Updated: {props.coinInfo.timestamp.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  )
}
