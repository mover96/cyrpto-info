import * as React from 'react'

import { CoinInfo } from '../interfaces/coinInfo'
import { PriceBlock } from './PriceBlock'
import { DetailBlock } from './DetailBlock'

export interface BlockProps {
  coinInfo: CoinInfo
}

export interface BlockState {
  infoView: boolean
}

export class Block extends React.Component<BlockProps, BlockState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      infoView: false
    }
  }

  public render() {
    let el = <PriceBlock coinInfo={this.props.coinInfo} />
    if (this.state.infoView === true) {
      el = <DetailBlock coinInfo={this.props.coinInfo} />
    }
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
        onClick={() => {
          this.changeView()
        }}
      >
        {el}
      </div>
    )
  }

  public changeView() {
    this.setState({ infoView: !this.state.infoView })
  }
}
