import { ethers } from 'ethers';

import { CHAINS } from '../../chains';
import { superfluidHostABI } from './data';
import { superfluidHostAddress } from './data';
import { SuperfluidModule } from './types';

const hostContract: SuperfluidModule['resolve'] = async (tx, provider) => {
    const SuperfluidHostContract = new ethers.Contract(
        superfluidHostAddress,
        superfluidHostABI,
        provider
    );

    const parsedTransaction =
        SuperfluidHostContract.interface.parseTransaction(tx);

    // console.log({ parsedTransaction });

    const functionName = parsedTransaction.functionFragment.name;

    const { args, value } = parsedTransaction;

    switch (functionName) {
        case 'callAgreement':
            return {
                type: 'superfluid',
                action: 'callAgreement',
                data: {
                    agreementClass: args.agreementClass as string,
                    // TODO: Parse opaque callData
                    callData: args.callData as string,
                    userData: args.userData as string,
                },
            };

        default:
            return {
                type: 'superfluid',
                action: 'unknown',
                data: undefined,
            };
    }
};

export const Superfluid: SuperfluidModule = {
    check: (tx) => {
        if (tx.chainId !== CHAINS.POLYGON_MAINNET) return false;

        return tx.to?.toLowerCase() === superfluidHostAddress.toLowerCase();
    },
    resolve: async (tx, provider) => {

        switch (tx.to?.toLowerCase()) {
            case superfluidHostAddress.toLowerCase():
                return hostContract(tx, provider);

            default:
                return {
                    type: 'superfluid',
                    action: 'unknown',
                    data: undefined,
                };
        }

    },
};
