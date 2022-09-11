/* eslint-disable sonarjs/no-duplicate-string */
import { setupClassifier } from '../src';
import { MODULES } from './../src/modules';

it('exports', async () => {
    expect(setupClassifier).toBeDefined();
});
