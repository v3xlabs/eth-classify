import { PolygonTransaction } from './../../src/modules/polygon/types';
import { BigNumber, ethers } from 'ethers';
import { setupClassifier } from '../../src';
import { MODULES } from '../../src/modules';
import { ModuleTest } from '../type';

jest.setTimeout(10_000);

const polygonTests: ModuleTest<PolygonTransaction> = {
    depositEtherFor: [
        [
            '0x73ac1b52465476126d401a806fb8f0f30f48fa5af711c2e1321670dbca2ffffb',
            {
                value: BigNumber.from('0x04f94ae6af8000'),
                user: '0x829428e63ef32dEBE34283385F4cb51F72f9B173',
            },
        ],
    ],

    depositFor: [
        [
            '0xf6161f701d9d94d819d9da803966f6ddd1a6adb9257f89baabbfb7d216524663',
            {
                rootToken: '0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e',
                user: '0x65A8F07Bd9A8598E1b5B6C0a88F4779DBC077675',
            },
        ],
    ],

    exit: [
        [
            '0x260ccebe630c3b9a4efffe8f88e92040b7ef36b9ed9fed18386327f3268fe40d',
            {},
        ],
    ],
};
const provider = ethers.providers.getDefaultProvider('homestead');

const classify = setupClassifier({
    modules: [MODULES.Polygon],
    provider,
});

for (const [action, tests] of Object.entries(polygonTests)) {
    describe(action, () => {
        for (const [address, test] of tests) {
            it(address, async () => {
                const tx = await provider.getTransaction(address);

                const result = await classify(tx);

                expect(result.data).toEqual(test);
            });
        }
    });
}
