import { ethers } from 'ethers';
import { TransactionModule } from '../..';

export type PolygonTransaction = { type: 'polygon' } & (
    | {
          action: 'reclaim';
          data: {
            owner: string;
          };
      }
    | {
          action: 'test';
          data: undefined;
      }
);

export type PolygonModule = TransactionModule<PolygonTransaction>;
