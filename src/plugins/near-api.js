import VueNear from 'vue-near';

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
        account_id: 'x.paras.near',
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

export function getIPFSUrl(mediaHash) {
  return `https://ipfs.io/ipfs/${mediaHash}`;
}

export function getNearBlocksUrlFromToken(tokenId) {
  return `https://nearblocks.io/es/nft-token/x.paras.near/${tokenId}`;
}

const vueNearPlugin = async (app) => app.use(VueNear, {
  env: 'production',
});

export default (app) => vueNearPlugin(app);
