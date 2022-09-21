import { BigNumber } from 'ethers';

import { setupClassifier } from '../../src';
import { MODULES } from '../../src/modules';
import { ENSTransaction } from '../../src/modules/ens/types';
import { ModuleTest } from '../type';
import { provider } from '../util';
import { sleep } from './../util';

jest.setTimeout(60_000);

const ensTests: ModuleTest<ENSTransaction> = {
    // Base Registrar
    approve: [
        [
            '0x1be1f57e285691ac74c590458afe327fe598a5bdea3552552691eec31de53cce',
            {
                to: '0x0BacCDD05a729aB8B56e09Ef19c15f953E10885f',
                tokenId: BigNumber.from(
                    '70914580643172487421605423625822463256087857356289688003559769910430104720293'
                ),
            },
        ],
    ],

    reclaim: [
        [
            '0x644ff3b8ef18253f5c5378ce918d1414e6c6546cd7a950a974fa24507f5e1cc5',
            {
                id: BigNumber.from(
                    '91064673781546482725063908580288768177391007256886503922097066774557677528841'
                ),
                owner: '0xF5CC9A604169f25984ccF3A82FEbD958DDa7335B',
            },
        ],
    ],

    safeTransferFrom: [
        [
            '0xb2831c123d4b4c2da7830cb58722b2d5251961c7a7f7f8c0bd1680b4c42dbcce',
            {
                from: '0xB3d4839BA17A0C9B7dC9b19BF7ee4c946F16D240',
                to: '0x000000000000000000000000000000000000dEaD',
                tokenId: BigNumber.from(
                    '33554299737192823275811245947889043813124544520062834559393632069779848892162'
                ),
            },
        ],
    ],

    transferFrom: [
        [
            '0x80dace502c242a6912a62d8f4f91d16f57eff4188495b9da01b1b8a06e44e9b4',
            {
                from: '0x36e7972e12A5e858D758eDACb8db3EE7C9fB9dB6',
                to: '0x761989CF4dB9d6a878F924c91B53a68e647f28fC',
                tokenId: BigNumber.from(
                    '70221550899925896842238635806019184962853566947393161838015351538666591504804'
                ),
            },
        ],
    ],

    // Registrar Controller
    commit: [
        [
            '0xd8bbadefc7c26837a57ce9d9c59ecf42ac0b37778b114a4a2ec84c5f190e3c45',
            {
                commitment:
                    '0xe0daa2f1f34deb60d287cd274ba6f02e04a9cfef5bb97607052b073df5ba8ea6',
            },
        ],
    ],

    register: [
        [
            '0x29ef756c7f160b8254dafcdac9a713b14fcc06507b71c2e15bd316d8d79733fe',
            {
                value: BigNumber.from('8000000000000000'),
                name: '⚽️⚽️',
                owner: '0x6a025E821fd2A37A517f497126DB76fd9E420fFD',
                duration: BigNumber.from('2419200'),
                secret: '0x0000000000000000000000000000000000000000000000000000000000000000',
            },
        ],
    ],

    registerWithConfig: [
        [
            '0xa02c7c27b4272b3c6a6d34b14790dbdda19ae07703fa6f5d3f1288e533b5e0d8',
            {
                value: BigNumber.from('0x0af55e47193167'),
                name: '0xsurgical',
                owner: '0x9A17B72020B8813e5F2e0115861207C88dD77561',
                duration: BigNumber.from('31556952'),
                secret: '0x1a532cb490a9cb5ee652aa236905f709a30abf5f495b8acdc0b46d2230d4f54c',
                resolver: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
                addr: '0x9A17B72020B8813e5F2e0115861207C88dD77561',
            },
        ],
    ],

    renew: [
        [
            '0x7902f9326cada16bd01920811317b52c9e94e41f911f57b59c8bc17080153f78',
            {
                value: BigNumber.from('8000000000000000'),
                name: '_8790',
                duration: BigNumber.from('15778800'),
            },
        ],
    ],

    setReverseName: [
        [
            '0x5f61a12a1256a94b91f7a80f3d7ef730404886365f508f98ea8d67d07cf88e9b',
            {
                name: 'markgjones.eth',
            },
        ],
    ],
};

const classify = setupClassifier({
    modules: [MODULES.ENS],
    provider,
});

for (const [action, tests] of Object.entries(ensTests)) {
    describe(action, () => {
        for (const [address, test] of tests) {
            it(address, async () => {
                const tx = await provider.getTransaction(address);

                const result = await classify(tx);

                expect(result.data).toEqual(test);

                await sleep(500);
            });
        }
    });
}
