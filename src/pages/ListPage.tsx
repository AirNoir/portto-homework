import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { VStack, Box, Image, Spinner, Grid, GridItem } from '@chakra-ui/react'
import { AssetType } from '../config/AssetsTypes'

const ListPage = () => {
  const [assets, setAssets] = useState<AssetType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://testnets-api.opensea.io/api/v1/assets', {
          params: {
            owner: '0x85fD692D2a075908079261F5E351e7fE0267dB02',
            offset: 0,
            limit: 20,
          },
        })
        setAssets(response.data.assets)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleClickAsset = ({ address, tokenId }: { address: string; tokenId: string }) => {
    navigate(`/detail/${address}/${tokenId}`)
  }

  return (
    <VStack spacing={4}>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <Grid templateColumns="repeat(2, 1fr)" gap={3} padding={15}>
          {assets.map((asset: AssetType) => (
            <GridItem
              key={asset.id}
              p={4}
              borderWidth="2px"
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() =>
                handleClickAsset({ address: asset.asset_contract.address, tokenId: asset.token_id })
              }
            >
              <Image src={asset.image_url} alt={asset.name} />
              <Box>{asset.name}</Box>
            </GridItem>
          ))}
        </Grid>
      )}
    </VStack>
  )
}

export default ListPage
