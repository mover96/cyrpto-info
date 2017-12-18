import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'

export interface PriceBlockProps {
  coinInfo: CoinInfo
}

export const PriceBlock: React.SFC<PriceBlockProps> = props => {
  return (
    <div
      style={{
        width: '18em',
        minWidth: '18em',
        borderStyle: 'solid',
        borderWidth: '.2em',
        height: '18em',
        margin: '.5em',
        padding: '.5em',
        alignItems: 'center'
      }}
      className="ms-borderColor-neutralPrimary ms-borderColor-neutralSecondary--hover"
    >
      <div style={{ height: '100%' }}>
        <a
          style={{ textDecoration: 'none' }}
          href={'https://www.worldcoinindex.com/coin/' + props.coinInfo.name}
          target="_blank"
        >
          <span
            style={{ fontSize: '2em' }}
            className="ms-font-xxl ms-fontColor-themePrimary"
          >
            {props.coinInfo.name}
          </span>
        </a>
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
            Estimated Value: ${(
              props.coinInfo.myCoins * props.coinInfo.usdPrice
            )
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column-reverse',
              height: '5em',
              justifyContent: 'flex-start'
            }}
          >
            <span
              style={{ wordWrap: 'break-word', fontSize: '.8em', order: 3 }}
              className="ms-font-s ms-fontColor-neutralSecondary"
            >
              Volume (24 hours):{' '}
              {props.coinInfo.volume24
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
            </span>
            <span
              style={{ wordWrap: 'break-word', fontSize: '.8em', order: 2 }}
              className="ms-font-s ms-fontColor-neutralSecondary"
            >
              Amount (24 hours):{' $'}
              {(
                props.coinInfo.volume24 * props.coinInfo.usdPrice
              ).toLocaleString('en-US', {
                minimumFractionDigits: 2
              })}
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
    </div>
  )
}
