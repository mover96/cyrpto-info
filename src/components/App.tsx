import * as React from 'react'
import * as MediaQuery from 'react-responsive'
import 'whatwg-fetch'

import { CoinInfo } from '../interfaces/coinInfo'
import { ResponsiveShell } from './ResponsiveShell'

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
  public componentDidMount() {
    fetch('/wci')
      .then((res: any) => res.json())
      .then((marketsObj: { Markets: Market[] }) => {
        for (const market of marketsObj.Markets) {
          for (const myCoinObj of this.getMyCoinInfo()) {
            const ticker = myCoinObj.ticker
            if (market.Label === ticker) {
              const tempDate = new Date(0)
              tempDate.setUTCSeconds(market.Timestamp + 7200)
              const newCoin: CoinInfo = {
                name: market.Name,
                ticker: market.Label,
                btcPrice: market.Price_btc,
                usdPrice: market.Price_usd,
                volume24: market.Volume_24h,
                timestamp: tempDate,
                myCoins: myCoinObj.myCoins
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
    return (
      <div>
        <MediaQuery query="(min-device-width: 400px)">
          <div style={{ fontSize: '1em' }}>
            <ResponsiveShell coins={this.state.coins} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 399px)">
          <div style={{ fontSize: '2.5em' }}>
            <ResponsiveShell coins={this.state.coins} />
          </div>
        </MediaQuery>
      </div>
    )
  }
  private getMyCoinInfo(): any {
    return [
      { ticker: 'ADT/BTC', myCoins: 38343.07891198 },
      { ticker: 'ETH/BTC', myCoins: 5.88493539 },
      { ticker: 'BTC/BTC', myCoins: 0.00000299 },
      { ticker: 'NEO/BTC', myCoins: 9.19 }
    ]
  }
}
