// CONTRACT: https://etherscan.io/address/0xa0c68c638235ee32657e8f720a23cec1bfc77c77

import { ethers } from 'ethers';

import { CHAINS } from '../../chains';
import { maticBridgeAddress } from './data';
import { maticBridgeABI } from './data';
import { PolygonModule } from './types';

export const Polygon: PolygonModule = {
    check: (tx) => {
        if (tx.chainId !== CHAINS.ETH_MAINNET) return false;

        return tx.to?.toLowerCase() === maticBridgeAddress.toLowerCase();
    },
    resolve: async (tx, provider) => {
        const MaticBridgeContract = new ethers.Contract(
            maticBridgeAddress,
            maticBridgeABI,
            provider
        );

        const parsedTransaction =
            MaticBridgeContract.interface.parseTransaction(tx);

        console.log({ parsedTransaction });

        const functionName = parsedTransaction.functionFragment.name;

        const { args, value } = parsedTransaction;

        switch (functionName) {
            case 'depositFor':
                return {
                    type: 'polygon',
                    action: 'depositFor',
                    data: {
                        user: args.user as string,
                        rootToken: args.rootToken as string,
                        // TODO: Parse opaque depositData
                        // depositData: args.depositData as string,
                    },
                };

            case 'depositEtherFor':
                return {
                    type: 'polygon',
                    action: 'depositEtherFor',
                    data: {
                        value: value,
                        user: args.user as string,
                    },
                };

            case 'exit':
                return {
                    type: 'polygon',
                    action: 'exit',
                    // TODO: Parse opaque data
                    data: {},
                };

            default:
                return {
                    type: 'polygon',
                    action: 'unknown',
                    data: undefined,
                };
        }
    },
};
