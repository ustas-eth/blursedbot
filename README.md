## Config example
`./src/config.ts`
```typescript
export const DEBUG = true
export const password = ''
export const seed = ''
export const providerUrl = 'https://eth.llamarpc.com'

export const blur: {
  contract: string
  collections: {
    name: string
    address: string
  }[]
} = {
  contract: '0x0000000000a39bb272e79075ade125fd351887ac',
  collections: [{ name: 'otherdeed', address: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258' }],
}

```