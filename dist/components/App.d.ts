/// <reference types="react" />
import * as React from 'react';
import 'whatwg-fetch';
import { CoinInfo } from '../interfaces/coinInfo';
export interface AppState {
    coins: CoinInfo[];
    kevinCoins: CoinInfo[];
    view: number;
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
    constructor(props: any);
    componentDidMount(): void;
    getWCI(): Promise<void>;
    render(): JSX.Element;
    changeView(view: number): void;
    private getMyCoinInfo();
    private getKevinCoinInfo();
}
