import { generateStarkWallet } from '@imtbl/core-sdk'
import { Wallet } from '@ethersproject/wallet';
import { requireEnvironmentVariable } from './utils.js';

async function getStarkPrivateKey(privateKey) {
  const wallet = new Wallet(privateKey);
  const starkWallet = await generateStarkWallet(wallet);
  console.log('wallet address:', wallet.address)
  console.log('stark key:', starkWallet.starkKeyPair.getPrivate("hex"));
}

try {
  const signature = requireEnvironmentVariable('PRIVATE_KEY')
  await getStarkPrivateKey(signature);
}
catch (err) {
  console.error(err.message)
}
