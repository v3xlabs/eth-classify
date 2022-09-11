import { TransactionResponse } from '@ethersproject/abstract-provider';
import { ethers } from 'ethers';
import { Awaitable } from './util';

export type ClassifiedTransaction = {
    type: string; // 'ens'
    action: string; // 'register | renew'
    data?: {
        // custom type
    }
};

export type UnknownTransaction = {
    type: 'unknown';
    action: '';
    data: undefined;
}

export type TransactionModule<K extends ClassifiedTransaction> = {
    check: (tx: TransactionResponse) => Awaitable<boolean>;
    resolve: (tx: TransactionResponse, provider: ethers.Signer | ethers.providers.Provider | undefined) => Awaitable<K>;
};

export type ClassifierConfig<K extends TransactionModule<ClassifiedTransaction>> = {
    modules: K[];
    provider: ethers.Signer | ethers.providers.Provider | undefined;
};