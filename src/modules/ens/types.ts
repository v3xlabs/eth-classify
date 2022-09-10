import { ethers } from 'ethers';
import { TransactionModule } from '../..';

export type ENSTransaction = { type: 'ens' } & (
    | {
          action: 'reclaim';
          data: {};
      }
    | {
          action: 'test';
          data: {};
      }
);

export type ENSModule = TransactionModule<ENSTransaction>;
