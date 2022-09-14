<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/v3xlabs/eth-classify/raw/master/public/eth-classify_white.webp" />
    <img alt="eth-classify" src="https://github.com/v3xlabs/eth-classify/raw/master/public/eth-classify_black.webp" width="400px" />
  </picture>
</p>

<p align="center">
<a href="https://bundlephobia.com/package/eth-classify" alt="Bundlephobia" target="_blank">
    <img src="https://img.shields.io/bundlephobia/min/eth-classify.svg" />
</a>
<img src="https://img.shields.io/badge/coverage-100%25-brightgreen.svg" />
<img src="https://img.shields.io/github/languages/top/v3xlabs/eth-classify" />
<a href="https://www.npmjs.com/package/eth-classify" alt="eth-classify NPM" target="_blank">
    <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" />
</a>
<a href="https://www.npmjs.com/package/eth-classify" alt="eth-classify NPM" target="_blank">
    <img src="https://img.shields.io/npm/dt/eth-classify" />
</a>
</p>

---

Classify Ethereum Transactions

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Quickstart](#quickstart)
- [Writing a module](#writing-a-module)
  - [Check function](#check-function)
  - [Resolve function](#resolve-function)
  - [Example](#example)
- [Contributors](#contributors)
- [LICENSE](#license)

## Installation

Using `npm`:

```sh
npm install eth-classify
```

or if you prefer to use the `yarn` package manager:

```sh
yarn add eth-classify
```

or if you prefer to use the `pnpm` package manager:

```sh
pnpm add eth-classify
```

## Usage

Getting started using `eth-classify` is very easy. We start by creating our classifier with the modules we want to use and a provider from ethers.js:

```ts
const provider = ethers.providers.getDefaultProvider('homestead');

const classify = setupClassifier({
    modules: [MODULES.ENS, MODULES.Polygon],
    provider,
});
```

Before we can classify we need to have a ethers.js transaction to classify.

```ts
const tx = await provider.getTransaction(
        '0xf9eb3f5d85502645759cc6f45805093d023ecbd83d19fea5254a42e591264e08'
    );
```

When we have our transaction we can classify it:

```ts
const data = await classify(tx);

console.log(data);
```

Result:

```js
{
  type: 'ens',
  action: 'registerWithConfig',
  data: {
    value: BigNumber,
    name: 'v3xlabs',
    owner: '0x225f137127d9067788314bc7fcc1f36746a3c3B5',
    duration: BigNumber,
    secret: '0x95319a2f72445a5097e248ed089b085dc61da9e0c9d1f6e8c887433e816f1c18',
    resolver: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    addr: '0x225f137127d9067788314bc7fcc1f36746a3c3B5'
  }
}
```

### Quickstart

Throwing all of the above together would look something like this:

```ts
import { ethers } from 'ethers';

import { setupClassifier } from 'eth-classify';
import { MODULES } from 'eth-classify/modules';

const provider = ethers.providers.getDefaultProvider('homestead');

const classify = setupClassifier({
    modules: [MODULES.ENS, MODULES.Polygon],
    provider,
});

const ourAsyncFunction = async () => {
    const tx = await provider.getTransaction(
        '0xf9eb3f5d85502645759cc6f45805093d023ecbd83d19fea5254a42e591264e08'
    );

    const data = await classify(tx);

    console.log(data);
};

ourAsyncFunction();
```

## Writing a module

The two basic parts of a module is the `check` function and the `resolve` function. The `check` function is used to check if the transaction is of the type that the module is for. The `resolve` function is used to parse the transaction data into a more readable format.

### Check function
The check function takes in an argument of type `TransactionResponse` from ethers.js and returns a boolean. If the transaction is of the type that the module is for it should return `true` otherwise it should return `false`.

When the check function returns true, the module finder stops and the resolve function is called.

### Resolve function

The resolve function takes in an argument of type `TransactionResponse` from ethers.js and also an ethers.js provider. It then returns either a promise containing the data or the data itself. The data should be an object following the following type:

```ts
type ClassifiedTransaction = {
    type: string; // 'ourModule'
    action: string; // 'anAction'
    data?: {
        // custom type
    };
};
```

### Example

```ts
export type OurTransaction = {
    type: "ourModule";
    action: "anAction";
    data: {
        field1: string;
        field2: string;
    };
};

export type OurModule = TransactionModule<OurTransaction>;

export const TestModule: OurModule = {
    check: (tx) => {
        // Only allow mainnet
        if (tx.chainId !== CHAINS.ETH_MAINNET) return false;

        // Check if the transaction is going to our contract
        return tx.to?.toLowerCase() === "CONTRACT_ADDRESS".toLowerCase();
    },
    resolve: async (tx, provider) => {
        // Parse the transaction data

        // Return in the standardized format
        return {
            type: "ourModule",
            action: "anAction",
            data: {
                field1: "value1",
                field2: "value2",
            },
        };
    },
};
```


## Contributors

[![](https://contrib.rocks/image?repo=v3xlabs/eth-classify)](https://github.com/v3xlabs/eth-classify/graphs/contributors)

## LICENSE

This package is licensed under the [GNU Lesser General Public License](https://www.gnu.org/licenses/lgpl-3.0).