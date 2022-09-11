import { ethers, BigNumber } from 'ethers';
import { TransactionModule } from '../../types/classifer';

export type PolygonTransaction = { type: 'polygon' } & (
    | {
          action: 'depositFor';
          data: {
              user: string;
              rootToken: string;

              // TODO: Parse opaque depositData
              // depositData: string;
          };
      }
    | {
          action: 'depositEtherFor';
          data: {
              value: BigNumber;
              user: string;
          };
      }
    | {
          action: 'exit';
          // TODO: Parse opaque data
          data: {};
      }
    | {
          action: 'unknown';
          data: undefined;
      }
);

export type PolygonModule = TransactionModule<PolygonTransaction>;
