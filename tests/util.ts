import { CHAINS } from './../src/chains';
import { ethers } from 'ethers';

export const homesteadProvider = ethers.providers.getDefaultProvider('homestead', {
    etherscan: process.env.ETHERSCAN_API_KEY,
});

export const polygonProvider = ethers.providers.getDefaultProvider(CHAINS.POLYGON_MAINNET);

export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

console.log('running util file');
