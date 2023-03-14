# Okapi SDK 
Javascript & Typescript

**Features**:

- Get the a wallet data by user
- Evaluate an objective with user and id
- Evaluate a reward with user and id
- Get a token gate status with user and id 

... and much more. Check the [official Okapi docs](https://okapi-1.gitbook.io/product-docs/) for more details.

### Quick start

If you're new to Okapi, check the [quickstart guide in the official docs](https://okapi-1.gitbook.io/product-docs/fundamentals/quickstart) on how to get started with Okapi.

If you're already familiar with Okapi and have your signed up, create tokens, objectives, rewards and token gates, follow along to connect your SDK:

#### Install Okapi

The easiest way to integrate the Okapi SDK into your JavaScript project is through the npm module.

Install the package via `npm`:

```shell
npm install @okapihq/sdk
```

or `yarn`:

```shell
yarn add @okapihq/sdk
```

Import Okapi:

```js
import { okApiClient } from '@okapihq/sdk';
```

#### Initialize Okapi

After your dependency is added, you simply need to initialize okapi via the `start` method:

> **⚠️ Warning**: Make sure to keep your api key private

```javascript
okApiClient.start(
  'YOUR_API_KEY'
)
```

After that you can use any Okapi functionalities as described in our [extensive docs](https://okapi-1.gitbook.io/product-docs)

### Star us ⭐️ 

If this JS SDK helps you build your dapps faster - please star this project, every star makes us very happy!

### Need help?

If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Discord link](https://discord.gg).


### Community

- [Discord](https://discord.gg)

# 