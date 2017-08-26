import * as React from 'react'
import * as JSONP from 'fetch-jsonp'

import { CoinInfo } from '../interfaces/coinInfo'

export interface AppState {
  coins: CoinInfo[]
}

export interface Market {
  Label: string
  Name: string
  Price_btc: number
  Price_cny: number
  Price_eur: number
  Price_gbp: number
  Price_rur: number
  Price_usd: number
  Timestamp: number
  Volume_24h: number
}

export class App extends React.Component<null, AppState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      coins: []
    }
  }
  public componentWillMount() {
    fetch('/wci')
      .then((res: any) => res.json())
      .then((marketsObj: { Markets: Market[] }) => {
        for (const market of marketsObj.Markets) {
          for (const ticker of this.getCoinTickers()) {
            if (market.Label === ticker) {
              const newCoin: CoinInfo = {
                name: market.Name,
                ticker: market.Label,
                btcPrice: market.Price_btc,
                usdPrice: market.Price_usd,
                volume24: market.Volume_24h,
                timestamp: new Date(market.Timestamp)
              }
              const newCoinState = this.state.coins
              newCoinState.push(newCoin)
              this.setState({ coins: newCoinState })
            }
          }
        }
      })
  }
  public render() {
    const listItems = this.state.coins.map((coin: CoinInfo, index: number) => {
      return (
        <li key={index}>
          {coin.name}
        </li>
      )
    })
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
  private getCoinTickers(): string[] {
    return ['ADT/BTC', 'ETH/BTC', 'BTC/BTC', 'NEO/BTC']
  }
}
