import * as React from 'react'

import { Block } from './Block'
import { CoinInfo } from '../interfaces/coinInfo'

export interface BlocksProps {
  coins: CoinInfo[]
}

export const Blocks: React.SFC<BlocksProps> = props => {
  const blocks = props.coins.map((coin: CoinInfo, index: number) => {
    return <Block coinInfo={coin} key={index} />
  })
  return (
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
        {blocks}
      </div>
    </div>
  )
}
