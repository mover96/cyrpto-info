import * as React from 'react'
import * as MediaQuery from 'react-responsive'

import { CoinInfo } from '../interfaces/coinInfo'
import { PriceBlock } from './PriceBlock'

export interface PriceBlockContainerProps {
  coinInfo: CoinInfo
}

export const PriceBlockContainer: React.SFC<
  PriceBlockContainerProps
> = props => {
  return (
    <div>
      <div
        style={{
          width: '18em',
          minWidth: '18em',
          borderStyle: 'solid',
          borderWidth: '3px',
          height: '18em',
          margin: '5px',
          padding: '5px',
          alignItems: 'center'
        }}
        className="ms-borderColor-neutralPrimary ms-borderColor-neutralSecondary--hover"
      >
        <PriceBlock coinInfo={props.coinInfo} />
      </div>
    </div>
  )
}
