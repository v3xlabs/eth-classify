export enum CONTRACTS {
    ETHBaseRegistrar = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85',
    ETHRegistrarController = '0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5',
    ETHReverseRegistrar = '0x084b1c3C81545d370f3634392De611CaaBFf8148',
}

export const contracts: Record<
    CONTRACTS,
    {
        abi: object[];
    }
> = {
    // ENS: Base Registrar Implementation
    [CONTRACTS.ETHBaseRegistrar]: {
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract ENS',
                        name: '_ens',
                        type: 'address',
                    },
                    {
                        internalType: 'bytes32',
                        name: '_baseNode',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'approved',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'Approval',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'bool',
                        name: 'approved',
                        type: 'bool',
                    },
                ],
                name: 'ApprovalForAll',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'controller',
                        type: 'address',
                    },
                ],
                name: 'ControllerAdded',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'controller',
                        type: 'address',
                    },
                ],
                name: 'ControllerRemoved',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'expires',
                        type: 'uint256',
                    },
                ],
                name: 'NameMigrated',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'expires',
                        type: 'uint256',
                    },
                ],
                name: 'NameRegistered',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'expires',
                        type: 'uint256',
                    },
                ],
                name: 'NameRenewed',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'previousOwner',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'OwnershipTransferred',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'Transfer',
                type: 'event',
            },
            {
                constant: true,
                inputs: [],
                name: 'GRACE_PERIOD',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'address',
                        name: 'controller',
                        type: 'address',
                    },
                ],
                name: 'addController',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'to', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'approve',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'available',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'address', name: 'owner', type: 'address' },
                ],
                name: 'balanceOf',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'baseNode',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                name: 'controllers',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'ens',
                outputs: [
                    { internalType: 'contract ENS', name: '', type: 'address' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'getApproved',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                ],
                name: 'isApprovedForAll',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'isOwner',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'nameExpires',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'owner',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'ownerOf',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                ],
                name: 'reclaim',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                ],
                name: 'register',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                ],
                name: 'registerOnly',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'address',
                        name: 'controller',
                        type: 'address',
                    },
                ],
                name: 'removeController',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                ],
                name: 'renew',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'safeTransferFrom',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                    { internalType: 'bytes', name: '_data', type: 'bytes' },
                ],
                name: 'safeTransferFrom',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'bool', name: 'approved', type: 'bool' },
                ],
                name: 'setApprovalForAll',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'address',
                        name: 'resolver',
                        type: 'address',
                    },
                ],
                name: 'setResolver',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        internalType: 'bytes4',
                        name: 'interfaceID',
                        type: 'bytes4',
                    },
                ],
                name: 'supportsInterface',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'transferFrom',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ],
    },
    [CONTRACTS.ETHRegistrarController]: {
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract BaseRegistrar',
                        name: '_base',
                        type: 'address',
                    },
                    {
                        internalType: 'contract PriceOracle',
                        name: '_prices',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: '_minCommitmentAge',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: '_maxCommitmentAge',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        indexed: true,
                        internalType: 'bytes32',
                        name: 'label',
                        type: 'bytes32',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'cost',
                        type: 'uint256',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'expires',
                        type: 'uint256',
                    },
                ],
                name: 'NameRegistered',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        indexed: true,
                        internalType: 'bytes32',
                        name: 'label',
                        type: 'bytes32',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'cost',
                        type: 'uint256',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'expires',
                        type: 'uint256',
                    },
                ],
                name: 'NameRenewed',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'oracle',
                        type: 'address',
                    },
                ],
                name: 'NewPriceOracle',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'previousOwner',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'OwnershipTransferred',
                type: 'event',
            },
            {
                constant: true,
                inputs: [],
                name: 'MIN_REGISTRATION_DURATION',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                ],
                name: 'available',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32',
                    },
                ],
                name: 'commit',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                name: 'commitments',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'isOwner',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'bytes32',
                        name: 'secret',
                        type: 'bytes32',
                    },
                ],
                name: 'makeCommitment',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'bytes32',
                        name: 'secret',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'address',
                        name: 'resolver',
                        type: 'address',
                    },
                    { internalType: 'address', name: 'addr', type: 'address' },
                ],
                name: 'makeCommitmentWithConfig',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'maxCommitmentAge',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'minCommitmentAge',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'owner',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'secret',
                        type: 'bytes32',
                    },
                ],
                name: 'register',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'secret',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'address',
                        name: 'resolver',
                        type: 'address',
                    },
                    { internalType: 'address', name: 'addr', type: 'address' },
                ],
                name: 'registerWithConfig',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                ],
                name: 'renew',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    {
                        internalType: 'uint256',
                        name: 'duration',
                        type: 'uint256',
                    },
                ],
                name: 'rentPrice',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'uint256',
                        name: '_minCommitmentAge',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: '_maxCommitmentAge',
                        type: 'uint256',
                    },
                ],
                name: 'setCommitmentAges',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'contract PriceOracle',
                        name: '_prices',
                        type: 'address',
                    },
                ],
                name: 'setPriceOracle',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        internalType: 'bytes4',
                        name: 'interfaceID',
                        type: 'bytes4',
                    },
                ],
                name: 'supportsInterface',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                ],
                name: 'valid',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'withdraw',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ],
    },
    [CONTRACTS.ETHReverseRegistrar]: {
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract ENS',
                        name: 'ensAddr',
                        type: 'address',
                    },
                    {
                        internalType: 'contract Resolver',
                        name: 'resolverAddr',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                constant: true,
                inputs: [],
                name: 'ADDR_REVERSE_NODE',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'owner', type: 'address' },
                ],
                name: 'claim',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'address', name: 'owner', type: 'address' },
                    {
                        internalType: 'address',
                        name: 'resolver',
                        type: 'address',
                    },
                ],
                name: 'claimWithResolver',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'defaultResolver',
                outputs: [
                    {
                        internalType: 'contract Resolver',
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'ens',
                outputs: [
                    { internalType: 'contract ENS', name: '', type: 'address' },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { internalType: 'address', name: 'addr', type: 'address' },
                ],
                name: 'node',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { internalType: 'string', name: 'name', type: 'string' },
                ],
                name: 'setName',
                outputs: [
                    { internalType: 'bytes32', name: '', type: 'bytes32' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ],
    },
};

export const contractAddresses = Object.keys(contracts);
