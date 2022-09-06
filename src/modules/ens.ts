import { ethers } from 'ethers';
import { TransactionModule } from '..';

type ENSTransaction = { type: 'ens'; action: ''; data: {} };

type ENSModule = TransactionModule<ENSTransaction>;

const contracts = {
    // ENS: Base Registrar Implementation
    '0x225f137127d9067788314bc7fcc1f36746a3c3B5': {
        abi: [
            "event ControllerAdded(address indexed controller)",
            "event ControllerRemoved(address indexed controller)",
            "event NameMigrated(uint256 indexed id, address indexed owner, uint expires)",
            "event NameRegistered(uint256 indexed id, address indexed owner, uint expires)",
            "event NameRenewed(uint256 indexed id, uint expires)",
            "function addController(address controller) external",
            "function removeController(address controller) external",
            "function setResolver(address resolver) external",
            "function nameExpires(uint256 id) external view returns(uint)",
            "function available(uint256 id) public view returns(bool)",
            "function renew(uint256 id, uint duration) external returns(uint)",
        ]
    }
}
// [
//     '0x225f137127d9067788314bc7fcc1f36746a3c3B5', // ENS: Base Registrar Implementation
//     '0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5', //ENS: ETH Registrar Controller
// ];

export const ENS: ENSModule = {
    check: (tx) => {
        // return tx.to ? contracts.includes(tx.to) : false;
        return true;
    },
    resolve: (tx, provider) => {
        // const daiContract = new ethers.Contract('0x225f137127d9067788314bc7fcc1f36746a3c3B5', contracts['0x225f137127d9067788314bc7fcc1f36746a3c3B5'].abi, provider);
        // const test = daiContract.interface.decodeFunctionData('reclaim', tx.data);

        // console.log({test})

        throw new Error();
    },
};
