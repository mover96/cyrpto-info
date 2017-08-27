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
      <MediaQuery query="(min-device-width: 400px)">
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
          <PriceBlock coinInfo={props.coinInfo} />
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 399px)">
        <div
          style={{
            width: '85%',
            minWidth: '300px',
            borderStyle: 'solid',
            borderWidth: '3px',
            height: '600px',
            margin: 'auto',
            paddingBottom: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
            fontSize: '2em',
            marginBottom: '40px'
          }}
          className="ms-borderColor-neutralPrimary ms-borderColor-neutralSecondary--hover"
        >
          <PriceBlock coinInfo={props.coinInfo} />
        </div>
      </MediaQuery>
    </div>
  )
}
