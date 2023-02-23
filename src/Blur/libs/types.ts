import type { TypedDataDomain, TypedDataField } from 'ethers'

export type Bid = {
  price: string
  size: number
}

export type BidLevel = {
  price: string
  executableSize: number
}

export interface RESTAPIResponse {
  success?: boolean
  statusCode?: number
  message?: string
  error?: string
}

export interface FormatBidResponse extends RESTAPIResponse {
  signatures?: {
    type: string
    signData: {
      domain: TypedDataDomain
      types: Record<string, TypedDataField[]>
      value: Record<string, any>
    }
    marketplace: string
    marketplaceData: string
    tokens: any[]
  }[]
}

export interface SubmitBidResponse extends RESTAPIResponse {}

export interface CancelBidResponse extends RESTAPIResponse {}
