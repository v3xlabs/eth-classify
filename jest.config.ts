import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    transform: {
        '.ts': 'ts-jest',
    },
    testMatch: ['<rootDir>/tests/**/*.spec.[jt]s'],
};

export default config;
