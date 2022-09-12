import { TransactionResponse } from '@ethersproject/abstract-provider';

import {
    ClassifiedTransaction,
    ClassifierConfig,
    TransactionModule,
    UnknownTransaction,
} from './types/classifer';

export const setupClassifier = <
    K extends TransactionModule<ClassifiedTransaction>
>(
    config: ClassifierConfig<K>
) => {
    return (tx: TransactionResponse) => {
        for (const module of config.modules) {
            if (module.check(tx)) {
                return module.resolve(tx, config.provider) as ReturnType<
                    K['resolve']
                >;
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
