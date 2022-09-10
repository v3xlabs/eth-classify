import { ethers } from 'ethers';
import { contractAddresses, contracts, CONTRACTS } from './data';
import { ENSModule } from './types';

const resolveETHBaseRegistrar: ENSModule['resolve'] = async (tx, provider) => {
    const ETHBaseRegistrar = new ethers.Contract(
        CONTRACTS.ETHBaseRegistrar,
        contracts[CONTRACTS.ETHBaseRegistrar].abi,
        provider
    );

    const parsedTransaction = ETHBaseRegistrar.interface.parseTransaction(tx);

    console.log({ parsedTransaction });

    return {
        type: 'ens',
        action: parsedTransaction.functionFragment.name,
        data: {
            arguments: parsedTransaction.args,
        },
    };
};

export const ENS: ENSModule = {
    check: (tx) => {
        console.log(tx.to);
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
