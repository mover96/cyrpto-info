import * as React from 'react'
import * as MediaQuery from 'react-responsive'
import 'whatwg-fetch'

import { CoinInfo } from '../interfaces/coinInfo'
import { ResponsiveShell } from './ResponsiveShell'

export interface AppState {
  coins: CoinInfo[]
  kevinCoins: CoinInfo[]
  view: number
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
      coins: [],
      kevinCoins: [],
      view: 0
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
              tempDate.setUTCSeconds(market.Timestamp - 0)
              const newCoin: CoinInfo = {
                name: market.Name,
                ticker: market.Label,
                btcPrice: market.Price_btc,
                usdPrice: market.Price_usd,
                volume24: market.Volume_24h,
                timestamp: tempDate,
                myCoins: myCoinObj.myCoins,
                owner: 'mitchell'
              }
              const newCoinState = this.state.coins
              newCoinState.push(newCoin)
              this.setState({ coins: newCoinState })
            }
          }

          for (const myCoinObj of this.getKevinCoinInfo()) {
            const ticker = myCoinObj.ticker
            if (market.Label === ticker) {
              const tempDate = new Date(0)
              tempDate.setUTCSeconds(market.Timestamp - 0)
              const newCoin: CoinInfo = {
                name: market.Name,
                ticker: market.Label,
                btcPrice: market.Price_btc,
                usdPrice: market.Price_usd,
                volume24: market.Volume_24h,
                timestamp: tempDate,
                myCoins: myCoinObj.myCoins,
                owner: 'kevin'
              }
              const newKevinCoinState = this.state.kevinCoins
              newKevinCoinState.push(newCoin)
              this.setState({ kevinCoins: newKevinCoinState })
            }
          }
        }
      })
  }
  public render() {
    let el = (
      <ResponsiveShell
        coins={this.state.coins}
        changeView={this.changeView.bind(this)}
        view={this.state.view}
      />
    )
    if (this.state.view === 1) {
      el = (
        <ResponsiveShell
          coins={this.state.kevinCoins}
          changeView={this.changeView.bind(this)}
          view={this.state.view}
        />
      )
    }
    return (
      <div>
        <MediaQuery query="(min-device-width: 400px)">
          <div style={{ fontSize: '1em' }}>{el}</div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 399px)">
          <div style={{ fontSize: '2.5em' }}>{el}</div>
        </MediaQuery>
      </div>
    )
  }

  public changeView(view: number) {
    this.setState({ view })
  }

  private getMyCoinInfo(): any {
    return [
      { ticker: 'ADT/BTC', myCoins: 38343.07891198 },
      { ticker: 'ETH/BTC', myCoins: 8.7118 },
      { ticker: 'BTC/BTC', myCoins: 0.00000299 },
      { ticker: 'NEO/BTC', myCoins: 2.19 },
      { ticker: 'ICX/BTC', myCoins: 423.34623 },
      { ticker: 'XMR/BTC', myCoins: 1.946 }
    ]
  }

  private getKevinCoinInfo(): any {
    return [
      { ticker: 'ETH/BTC', myCoins: 0.19357 },
      { ticker: 'XVG/BTC', myCoins: 10489.5 }
    ]
  }
}
