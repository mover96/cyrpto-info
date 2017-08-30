/// <reference types="react" />
import * as React from 'react';
import { CoinInfo } from '../interfaces/coinInfo';
export interface ResponsiveShellProps {
    coins: CoinInfo[];
}
export declare const ResponsiveShell: React.SFC<ResponsiveShellProps>;
