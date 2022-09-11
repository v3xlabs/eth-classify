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

    const { args } = parsedTransaction;

    switch (functionName) {
        case 'approve':
            return {
                type: 'ens',
                action: 'approve',
                data: {
                    to: args.to as string,
                    tokenId: args.tokenId as BigNumber,
                },
            };
        case 'reclaim':
            return {
                type: 'ens',
                action: 'reclaim',
                data: {
                    owner: args.owner as string,
                    id: args.id as BigNumber,
                },
            };
        case 'safeTransferFrom':
            return {
                type: 'ens',
                action: 'safeTransferFrom',
                data: {
                    from: args.from as string,
                    to: args.to as string,
                    tokenId: args.tokenId as BigNumber,
                },
            };
        case 'transferFrom':
            return {
                type: 'ens',
                action: 'transferFrom',
                data: {
                    from: args.from as string,
                    to: args.to as string,
                    tokenId: args.tokenId as BigNumber,
                },
            };

        default:
            return {
                type: 'ens',
                action: 'unknown',
                data: undefined,
            };
    }
};

const resolveETHRegistrarController: ENSModule['resolve'] = async (
    tx,
    provider
) => {
    const ETHRegistrarController = new ethers.Contract(
        CONTRACTS.ETHRegistrarController,
        contracts[CONTRACTS.ETHRegistrarController].abi,
        provider
    );

    const parsedTransaction =
        ETHRegistrarController.interface.parseTransaction(tx);

    console.log({ parsedTransaction });

    const functionName = parsedTransaction.functionFragment.name;

    const { args } = parsedTransaction;

    switch (functionName) {
        case 'commit':
            return {
                type: 'ens',
                action: 'commit',
                data: {
                    commitment: args.commitment as string,
                },
            };

        case 'register':
            return {
                type: 'ens',
                action: 'register',
                data: {
                    value: parsedTransaction.value,
                    name: args.name as string,
                    owner: args.owner as string,
                    duration: args.duration as BigNumber,
                    secret: args.secret as string,
                },
            };

        case 'registerWithConfig':
            return {
                type: 'ens',
                action: 'registerWithConfig',
                data: {
                    value: parsedTransaction.value,
                    name: args.name as string,
                    owner: args.owner as string,
                    duration: args.duration as BigNumber,
                    secret: args.secret as string,
                    resolver: args.resolver as string,
                    addr: args.addr as string,
                },
            };

        case 'renew':
            return {
                type: 'ens',
                action: 'renew',
                data: {
                    value: parsedTransaction.value,
                    name: args.name as string,
                    duration: args.duration as BigNumber,
                },
            };

        default:
            return {
                type: 'ens',
                action: 'unknown',
                data: undefined,
            };
    }
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

            case CONTRACTS.ETHRegistrarController:
                return resolveETHRegistrarController(tx, provider);

            default:
                throw new Error();
        }
    },
};
