import { TransactionModule } from "..";

type SuperfluidTransaction = { type: "superfluid"; action: ""; data: {} };

type SuperfluidModule = TransactionModule<SuperfluidTransaction>;

export const Superfluid: SuperfluidModule = {
    check: () => false,
    resolve: () => {
        throw new Error();
    },
};