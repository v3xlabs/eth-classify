import { ethers } from 'ethers';

export const provider = ethers.providers.getDefaultProvider('homestead', {
    etherscan: process.env.ETHERSCAN_API_KEY,
});

export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

console.log('running util file');
