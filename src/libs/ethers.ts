import { BigNumberish, Contract, ethers, FallbackProvider, JsonRpcProvider, Wallet } from 'ethers'
import { blur, providerUrls, SEED } from '../config.js'
import { logger } from './logs.js'

const providers = []
for (const url of providerUrls) providers.push(new JsonRpcProvider(url))

const provider = new FallbackProvider(providers)

export const wallet = Wallet.fromPhrase(SEED, provider)

const contract = new Contract(
  blur.contract,
  ['function balanceOf(address user) external view returns (uint256)'],
  wallet
)

export async function getBalance(): Promise<string> {
  try {
    const inWei: BigNumberish = await contract.getFunction('balanceOf')(wallet.address)
    return ethers.formatEther(inWei)
  } catch (error) {
    logger.error(error)
    return '0'
  }
}

console.log(await getBalance())
