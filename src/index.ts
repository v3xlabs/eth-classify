import { ethers, Transaction } from 'ethers';
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { MODULES } from './modules';
type Awaitable<K> = Promise<K> | K;

type ClassifiedTransaction = {
    type: string; // 'ens'
    action: string; // 'register | renew'
    data?: {
        // custom type
    }
};

type UnknownTransaction = {
    type: 'unknown';
    action: '';
    data: undefined;
}

export type TransactionModule<K extends ClassifiedTransaction> = {
    check: (tx: TransactionResponse) => Awaitable<boolean>;
    resolve: (tx: TransactionResponse, provider: ethers.Signer | ethers.providers.Provider | undefined) => Awaitable<K>;
};

type ClassifierConfig<K extends TransactionModule<ClassifiedTransaction>> = {
    modules: K[];
    provider: ethers.Signer | ethers.providers.Provider | undefined;
};

export const setupClassifier = <K extends TransactionModule<ClassifiedTransaction>>(config: ClassifierConfig<K>) => {
    return (tx: TransactionResponse) => {
        for (const module of config.modules) {
            if (module.check(tx)) {
                return module.resolve(tx, config.provider) as ReturnType<K['resolve']>;
            }
        }
        // return {} as ReturnType<K['resolve']>;
        return {
            type: 'unknown',
            action: '',
            data: undefined,
        } as UnknownTransaction;
    };
};

(async () => {
    const provider = ethers.providers.getDefaultProvider('homestead');

    const classify = setupClassifier({
        modules: [
            MODULES.ENS,
            MODULES.Superfluid,
        ],
        provider,
    });


    // const tx = await provider.getTransaction('0x4ac8f09f97f0fd8087c613ba71ac7fa1e1e3ccacb1854f5b2913d073ea418fc2');
    // const tx = await provider.getTransaction('0xf9eb3f5d85502645759cc6f45805093d023ecbd83d19fea5254a42e591264e08');
    const tx = await provider.getTransaction('0xc3218dfd8d45600e7a1d86f2d382798dd21c31343e189288f15cfcc7db19c147');
    
    const result = await classify(tx);

    console.log({result, arguments: result.data});
})()