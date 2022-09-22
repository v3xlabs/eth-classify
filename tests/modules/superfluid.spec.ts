import { polygonProvider, sleep } from './../util';
import { SuperfluidTransaction } from './../../src/modules/superfluid/types';

import { setupClassifier } from '../../src';
import { MODULES } from '../../src/modules';
import { ModuleTest } from '../type';

jest.setTimeout(10_000);

const superfluidTests: ModuleTest<SuperfluidTransaction> = {
    callAgreement: [
        [
            '0x98d6c1219784c6d400a2310b629bcd833dc4ee49aceb9d4a2327060fe8721509',
            {
                agreementClass: '0x6EeE6060f715257b970700bc2656De21dEdF074C',
                callData:
                    '0xb4b333c60000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000225f137127d9067788314bc7fcc1f36746a3c3b50000000000000000000000002b5c7025998f88550ef2fece8bf87935f542c19000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000',
                userData: '0x',
            },
        ],
    ],
};

const classify = setupClassifier({
    modules: [MODULES.Superfluid],
    provider: polygonProvider,
});

for (const [action, tests] of Object.entries(superfluidTests)) {
    describe(action, () => {
        for (const [address, test] of tests) {
            it(address, async () => {
                const tx = await polygonProvider.getTransaction(address);

                const result = await classify(tx);

                expect(result.data).toEqual(test);
                await sleep(500);
            });
        }
    });
}
