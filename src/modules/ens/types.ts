import { BigNumber, ethers } from 'ethers';
import { TransactionModule } from '../..';

export type ENSTransaction = { type: 'ens' } & (
    | {
          action: 'reclaim';
          data: {
              owner: string;
              id: BigNumber;
          };
      }
    | {
          action: 'unknown';
          data: undefined;
      }
);

export type ENSModule = TransactionModule<ENSTransaction>;
