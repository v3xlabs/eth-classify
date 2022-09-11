import { ClassifiedTransaction } from '../src';

export type ModuleTest<K extends ClassifiedTransaction> = Record<
    Exclude<K['action'], 'unknown'>,
    [[string, K['data']]]
>;