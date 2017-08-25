/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface AppState {
    coins: CoinInfo[];
}
export declare class App extends React.Component<null, AppState> {
    constructor();
    componentWillMount(): void;
    render(): JSX.Element;
}
