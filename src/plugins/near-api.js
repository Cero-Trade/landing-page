import { app } from '@/main';
import VueNear from 'vue-near';

const marketplaceContract = 'x.paras.near'

//* mintNFT
export const mintNFT = async () => {
  const near = app.config.globalProperties.$near;
  const wallet = near.walletConnection;

  if (!wallet.isSignedIn()) {
    wallet.requestSignIn(marketplaceContract);
    return;
  }

  const account = wallet.account();
  const contract = new near.nearApi.Contract(account, marketplaceContract, {
    viewMethods: ['nft_tokens_for_owner'],
    changeMethods: ['nft_mint'],
  });

  await contract.nft_mint({
    token_id: 'nft-1',
    metadata: {
      title: 'My First NFT',
      description: 'This is my first NFT',
      media: 'https://link.to/image.png',
    },
    receiver_id: wallet.getAccountId(),
  });

  console.log('NFT minted successfully!');
};

//* getNFTs
export const getNFTs = async (accountId) => {
  const response = await fetch('https://rpc.mainnet.near.org', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'query',
      params: {
        request_type: 'call_function',
        account_id: marketplaceContract,
        method_name: 'nft_tokens_for_owner',
        args_base64: Buffer.from(JSON.stringify({ account_id: accountId })).toString('base64'),
        finality: 'optimistic',
      },
      id: 158,
      jsonrpc: '2.0',
    }),
  });

  const resultArray = (await response.json()).result.result;

  const decodedResult = Buffer.from(resultArray, 'base64').toString('utf8');
  return JSON.parse(decodedResult);
};

//* getIPFSUrl
export function getIPFSUrl(mediaHash) {
  return `https://ipfs.io/ipfs/${mediaHash}`;
}

//* getNearBlocksUrlFromToken
export function getNearBlocksUrlFromToken(tokenId) {
  return `https://nearblocks.io/es/nft-token/x.paras.near/${tokenId}`;
}

const vueNearPlugin = async (app) => app.use(VueNear, {
  env: 'development',
});

export default (app) => vueNearPlugin(app);
