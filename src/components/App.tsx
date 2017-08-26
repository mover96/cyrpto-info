import * as React from 'react'
import * as JSONP from 'fetch-jsonp'

import { CoinInfo } from '../interfaces/coinInfo'

export interface AppState {
  coins: CoinInfo[]
}

export class App extends React.Component<null, AppState> {
  public constructor() {
    super()
    this.state = {
      coins: []
    }
  }
  public componentWillMount() {
    fetch('/wci')
      .then((res: any) => res.json())
      .then((x: any) => console.log(x))
  }
  public render() {
    return <div>Here235678</div>
  }
}
