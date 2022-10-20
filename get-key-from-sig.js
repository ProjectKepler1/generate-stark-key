import { generateStarkWalletFromSignedMessage } from '@imtbl/core-sdk'
import { verifyMessage } from '@ethersproject/wallet';
import { requireEnvironmentVariable } from './utils.js'

const DEFAULT_MESSAGE = 'Only sign this request if you’ve initiated an action with Immutable X.'

/**
 * The signature here must be of the message 'Only sign this request if you’ve initiated an action with Immutable X.'
 * For your convenience, it is possible to use this tool to create the signature https://tools.immutable.com/sign/
 * @param signature 0x prefixed hex string signature of DEFAULT_MESSAGE
 */
async function getStarkPrivateKeyFromSignedMessage(signature) {
  let walletAddress = verifyMessage(DEFAULT_MESSAGE, signature)
  const starkWallet = await generateStarkWalletFromSignedMessage(walletAddress, signature);
  console.log('wallet address:', walletAddress)
  console.log('stark key:', starkWallet.starkKeyPair.getPrivate("hex"));
}

try {
  const signature = requireEnvironmentVariable('SIGNATURE')
  await getStarkPrivateKeyFromSignedMessage(signature);
}
catch (err) {
  console.error(err.message)
}
