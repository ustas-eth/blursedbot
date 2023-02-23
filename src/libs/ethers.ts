import { BigNumberish, Contract, ethers, JsonRpcProvider, Wallet } from 'ethers'
import { blur, providerUrl, seed } from '../config.js'

const provider = new JsonRpcProvider(providerUrl)

export const wallet = Wallet.fromPhrase(seed, provider)

const contract = new Contract(
  blur.contract,
  ['function balanceOf(address user) external view returns (uint256)'],
  wallet
)

export async function getBalance(): Promise<string> {
  const inWei: BigNumberish = await contract.getFunction('balanceOf')(wallet.address)
  return ethers.formatEther(inWei)
}
