import { BigNumber } from 'ethers';

import { TransactionModule } from '../../types/classifer';

type BaseRegistrar =
    | {
          action: 'approve';
          data: {
              to: string;
              tokenId: BigNumber;
          };
      }
    | {
          action: 'reclaim';
          data: {
              owner: string;
              id: BigNumber;
          };
      }
    | {
          action: 'safeTransferFrom';
          data: {
              from: string;
              to: string;
              tokenId: BigNumber;
          };
      }
    | {
          action: 'transferFrom';
          data: {
              from: string;
              to: string;
              tokenId: BigNumber;
          };
      };

type Registrar =
    | {
          action: 'commit';
          data: {
              commitment: string;
          };
      }
    | {
          action: 'register';
          data: {
              value: BigNumber;
              name: string;
              owner: string;
              duration: BigNumber;
              secret: string;
          };
      }
    | {
          action: 'registerWithConfig';
          data: {
              value: BigNumber;
              name: string;
              owner: string;
              duration: BigNumber;
              secret: string;
              resolver: string;
              addr: string;
          };
      }
    | {
          action: 'renew';
          data: {
              value: BigNumber;
              name: string;
              duration: BigNumber;
          };
      };

export type ENSTransaction = { type: 'ens' } & (
    | BaseRegistrar
    | Registrar
    | {
          action: 'unknown';
          data: undefined;
      }
);

type test = ENSTransaction['action'];

export type ENSModule = TransactionModule<ENSTransaction>;
