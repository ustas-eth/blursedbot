export const PASSWORD = ''
export const SEED = ''

export const CAPTCHA_KEY = '' // 2captcha.com

export const DEBUG = false

export const providerUrls = [
  'https://eth.llamarpc.com',
  'https://eth-rpc.gateway.pokt.network',
  'https://ethereum.publicnode.com',
  'https://api.zmok.io/mainnet/oaen6dy8ff6hju9k',
]

export const strategy = {
  coef1: '0.025', // Safety. The coefficient for target level calculation. Example 0.04 = 4% from daily volume
  coef2: '1.1', // Sensitivity to step up. The coefficient for target level slippage in comparison to the previous bid. Example 1.2 = 20%
  coef3: '0.9', // Sensitivity to step down. The coefficient for target level slippage in comparison to the previous bid. Example 0.8 = 20%
  num1: 5, // Number of levels to bid under the target price. Only for the ladder strategy
}

export const timings = {
  start: {
    min: 20 * 1000, // 20 seconds
    max: 50 * 1000, // 50 seconds
  },
  // reloads are important for optimization and garbage collection
  reload: {
    min: 20 * 60 * 1000, // 20 minutes
    max: 30 * 60 * 1000, // 30 minutes
  },
}

export const blur: {
  contract: string
  collections: {
    name: string
    address: string
  }[]
} = {
  contract: '0x0000000000a39bb272e79075ade125fd351887ac', // Blur's wrapped ETH contract
  collections: [
    // List of collections to target
    // name: name of a collection as in the link
    // address: collection's contract address (check out the Etherscan button on a collection's page)
    { name: 'otherdeed', address: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258' },
    { name: 'mocaverse', address: '0x59325733eb952a92e069c87f0a6168b29e80627f' },
    { name: 'clonex', address: '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b' },
    { name: 'doodles-official', address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e' },
    { name: '0n1-force', address: '0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d' },
    { name: 'the-weirdo-ghost-gang', address: '0x9401518f4ebba857baa879d9f76e1cc8b31ed197' },
    { name: 'vv-checks', address: '0x34eebee6942d8def3c125458d1a86e0a897fd6f9' },
    { name: 'thecaptainz', address: '0x769272677fab02575e84945f03eca517acc544cc' },
    // { name: 'mgland', address: '0xe75512aa3bec8f00434bbd6ad8b0a3fbff100ad6' },
    // { name: 'opepen-edition', address: '0x6339e5e072086621540d0362c4e3cea0d643e114' },
    // { name: 'pudgypenguins', address: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8' },
    // { name: 'thepotatoz', address: '0x39ee2c7b3cb80254225884ca001f57118c8f21b6' }, warn 3.3 royalty
    // { name: 'megapunks-pop', address: '0xf7479f9527c57167caff6386daa588b7bf05727f' },
    // { name: 'renga', address: '0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91' },
    // { name: 'rektguy', address: '0xb852c6b5892256c264cc2c888ea462189154d8d7' },
    // { name: 'matr1x-2061-1', address: '0x9a27d13a4896baa03843a0728dff6007d665f8ee' },
    // { name: 'sappy-seals', address: '0x364c828ee171616a39897688a831c2499ad972ec' },
    // { name: 'beanzofficial', address: '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949' },
    // { name: 'moonbirds-oddities', address: '0x1792a96e5668ad7c167ab804a100ce42395ce54d' },
    // { name: 'vv-checks-originals', address: '0x036721e5a769cc48b3189efbb9cce4471e8a48b1' },
    // { name: 'invisiblefriends', address: '0x59468516a8259058bad1ca5f8f4bff190d30e066' },
    // { name: 'mistfitsnft', address: '0x5d62fb8dcd9b480960f55956fbdd8d9f07f2b402' },
    // { name: 'angrycat-official', address: '0xdcf68c8ebb18df1419c7dff17ed33505faf8a20c' },
  ],
}
