/* eslint-disable sonarjs/no-duplicate-string */
import { setupClassifier } from '../src';
import { MODULES } from './../src/modules';

it('exports', async () => {
    const classify = setupClassifier({
        modules: [
            MODULES.ENS,
            MODULES.Superfluid,
        ],
    });
    
    const result = await classify();
    
    switch(result.type) {
        case 'ens': {
            expect(result.action).toBe('');
        }
    }
});
