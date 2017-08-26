/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface AppState {
    coins: CoinInfo[];
}
export interface Market {
    Label: string;
    Name: string;
    Price_btc: number;
    Price_cny: number;
    Price_eur: number;
    Price_gbp: number;
    Price_rur: number;
    Price_usd: number;
    Timestamp: number;
    Volume_24h: number;
}
export declare class App extends React.Component<null, AppState> {
    constructor();
    componentWillMount(): void;
    render(): JSX.Element;
    private getCoinTickers();
}
