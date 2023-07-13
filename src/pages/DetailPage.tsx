import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Image, Heading, Text, Button, Link as ChakraLink, Spinner } from '@chakra-ui/react'
import { CollectionType } from '../config/AssetsTypes'

const DetailPage = () => {
  const [collection, setCollection] = useState<CollectionType>({
    name: '',
    description: '',
    image_url: '',
    permalink: '',
    collectionName: '',
  })
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams<{ asset_contract_address: string; token_id: string }>()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://testnets-api.opensea.io/api/v1/asset/${params.asset_contract_address}/${params.token_id}`
        )
        const { name, description, permalink, image_url } = response.data
        const { name: collectionName } = response.data.collection
        setCollection({
          name,
          description,
          collectionName,
          image_url,
          permalink,
        })
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [params])

  return (
    <Box p={4} borderWidth="medium" margin="10" borderRadius="3xl">
      <Button onClick={goBack} mb={4} marginBottom={10}>
        Go Back
      </Button>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading>{collection.collectionName}</Heading>
          <Image src={collection.image_url} alt={collection.name} width="100%" />

          <Text>{collection.name}</Text>
          <Text>{collection.description}</Text>
          <Button
            as={ChakraLink}
            href={collection.permalink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            mt={4}
          >
            View on OpenSea
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default DetailPage
