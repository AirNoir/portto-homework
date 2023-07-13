export type AssetType = {
  id: number,
  image_url: string
  name: string
  collection: {
    name: string
  };
  description: string
  permalink: string
  token_id: string
  asset_contract: AssetContract
}


export type AssetContract = {
  address: string
  asset_contract_type: string
  buyer_fee_basis_points: number
  chain_identifier: string
  created_date: string
  default_to_fiat: boolean
  description: string
  dev_buyer_fee_basis_points: number
  dev_seller_fee_basis_points: number
  external_link: string
  image_url: string
  name: string
  nft_version: string
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: number
  opensea_seller_fee_basis_points: number
  opensea_version: null | string
  owner: number
  payout_address: null
  schema_name: string
  seller_fee_basis_points: number
  symbol: string
  total_supply: string
}

export type CollectionType = {
  image_url: string
  name: string
  permalink: string
  description: string
  collectionName: string
}