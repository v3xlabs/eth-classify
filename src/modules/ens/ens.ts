import { BigNumber, ethers } from 'ethers';
import { CHAINS } from '../../chains';
import { contractAddresses, contracts, CONTRACTS } from './data';
import { ENSModule } from './types';

const resolveETHBaseRegistrar: ENSModule['resolve'] = async (tx, provider) => {
    const ETHBaseRegistrar = new ethers.Contract(
        CONTRACTS.ETHBaseRegistrar,
        contracts[CONTRACTS.ETHBaseRegistrar].abi,
        provider
    );

    const parsedTransaction = ETHBaseRegistrar.interface.parseTransaction(tx);

    const functionName = parsedTransaction.functionFragment.name;

    const {args} = parsedTransaction;

    switch (functionName) {
        case 'reclaim':
            return {
                type: 'ens',
                action: 'reclaim',
                data: {
                    owner: args.owner as string,
                    id: args.id as BigNumber,
                },
            }
        
        // TODO: add other functions
    
        default:
            return {
                type: 'ens',
                action: 'unknown',
                data: undefined,
            }
    }

    // return {
    //     type: 'ens',
    //     action: parsedTransaction.functionFragment.name,
    //     data: {
    //         arguments: parsedTransaction.args,
    //     },
    // };
};

export const ENS: ENSModule = {
    check: (tx) => {
        if (tx.chainId !== CHAINS.ETH_MAINNET) return false;

        return tx.to ? contractAddresses.includes(tx.to) : false;
    },
    resolve: async (tx, provider) => {
        switch (tx.to) {
            case CONTRACTS.ETHBaseRegistrar:
                return resolveETHBaseRegistrar(tx, provider);
            default:
                throw new Error();
        }
    },
};
