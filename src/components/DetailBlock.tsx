import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'

export interface DetailBlockProps {
  coinInfo: CoinInfo
}

export const DetailBlock: React.SFC<DetailBlockProps> = props => {
  const curVal = props.coinInfo.myCoins * props.coinInfo.usdPrice
  const profit = curVal - props.coinInfo.investment
  const spanStyle = {
    wordWrap: 'break-word',
    fontSize: '1em',
    paddingBottom: '7px',
    display: 'inline-block'
  }
  let profStyle: React.CSSProperties = {
    backgroundColor: '#0078d7',
    padding: '1px 7px 1px 5px',
    color: 'white',
    borderCornerShape: 'curve'
  }
  if (profit <= 0) {
    profStyle = {
      backgroundColor: 'red',
      padding: '1px 7px 1px 5px',
      color: 'white',
      borderCornerShape: 'curve'
    }
  }
  return (
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
          Investment: ${props.coinInfo.investment
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
        </span>
        <br />
        <br />
        <span style={spanStyle} className="ms-font-l">
          Profit:{' '}
          <span style={profStyle}>
            ${profit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
          </span>
        </span>
        <br />
        <span style={spanStyle} className="ms-font-l">
          Percent Change:{' '}
          <span style={profStyle}>
            {(curVal / props.coinInfo.investment * 100).toFixed(2)}%
          </span>
        </span>
      </div>
    </div>
  )
}
