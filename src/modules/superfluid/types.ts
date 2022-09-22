import { TransactionModule } from '../../types/classifer';

export type SuperfluidTransaction = { type: 'superfluid' } & (
    | {
          action: 'callAgreement';
          data: {
              agreementClass: string;
              callData: string;
              userData: string;
          };
      }
    | {
          action: 'unknown';
          data: undefined;
      }
);

export type SuperfluidModule = TransactionModule<SuperfluidTransaction>;
