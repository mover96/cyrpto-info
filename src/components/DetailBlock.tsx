import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'

export interface DetailBlockProps {
  coinInfo: CoinInfo
}

export const DetailBlock: React.SFC<DetailBlockProps> = props => {
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
          Profit
        </span>
      </div>
    </div>
  )
}
