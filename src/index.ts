import { ethers, Transaction } from 'ethers';
import { MODULES } from './modules';
type Awaitable<K> = Promise<K> | K;

type ClassifiedTransaction = {
    type: string; // 'ens'
    action: string; // 'register | renew'
    data: {
        // custom type
    }
};

export type TransactionModule<K extends ClassifiedTransaction> = {
    check: (tx: Transaction) => Awaitable<boolean>;
    resolve: (tx: Transaction, provider: ethers.Signer | ethers.providers.Provider | undefined) => Awaitable<K>;
};

type ClassifierConfig<K extends TransactionModule<ClassifiedTransaction>> = {
    modules: K[];
    provider: ethers.Signer | ethers.providers.Provider | undefined;
};

export const setupClassifier = <K extends TransactionModule<ClassifiedTransaction>>(config: ClassifierConfig<K>) => {
    return (tx: Transaction) => {
        for (const module of config.modules) {
            if (module.check(tx)) {
                return module.resolve(tx, config.provider);
            }
        }
        // return {} as ReturnType<K['resolve']>;
        return {
            type: 'unknown',
            action: '',
            data: tx.data,
        }
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
    const tx = await provider.getTransaction('0xf9eb3f5d85502645759cc6f45805093d023ecbd83d19fea5254a42e591264e08');
    
    const result = await classify(tx);

    console.log({result, tx});
})()