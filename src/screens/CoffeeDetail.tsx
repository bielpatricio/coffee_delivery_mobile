import * as Header from '@components/Header'
import { useRoute } from '@react-navigation/native'
import { Button, HStack, Image, ScrollView, Text, VStack } from 'native-base'
import { useMemo, useState } from 'react'
import { Coffee } from 'src/reducers/Cart/reducer'
import { Tag } from '@components/Tag'
import coffeeDetail from '../assets/coffeeDetail.png'

export function CoffeeDetail() {
  const { params } = useRoute()
  const coffee = useMemo(() => params as Coffee, [params])

  const [sizeSelected, setSizeSelected] = useState('')

  return (
    <VStack px={4} flex={1} bg="gray.900">
      <Header.Root>
        <Header.BackButton />
        <Header.ShoppingCartButton quantity={0} />
      </Header.Root>

      <ScrollView px={2} mb={4}>
        <Tag variantColor="gray" tags={coffee.tags} />

        <HStack
          mb={2}
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            textAlign="center"
            color="gray.100"
            fontSize="lg"
            fontFamily="headingBaloo"
          >
            {coffee.name}
          </Text>

          <Text
            display="flex"
            alignItems="flex-end"
            color="blue.700"
            fontSize="xl"
            fontFamily="headingBaloo"
          >
            <Text fontSize="md" fontFamily="Baloo2_400Regular">
              R$
            </Text>
            {String(coffee.price).replace(/\./g, ',')}
          </Text>
        </HStack>

        <Text mb="6" color="gray.600" fontSize="md" fontFamily="bodyBaloo">
          {coffee.description}
        </Text>

        <Image source={coffeeDetail} alt="CoffeeDetail" resizeMode="contain" />

        <Text mb="2" color="gray.600" fontSize="sm" fontFamily="bodyBaloo">
          Selecione o tamanho:
        </Text>

        <HStack>
          <Button
            variant="Unstyled"
            mr="2"
            bg="gray.300"
            borderColor={sizeSelected === '114ml' ? 'purple.500' : 'gray.300'}
            flex={1}
            py="2"
            px="3"
            borderRadius="8"
            borderWidth="2"
            onPress={() => setSizeSelected('114ml')}
          >
            <Text
              color={sizeSelected === '114ml' ? 'purple.500' : 'gray.700'}
              fontSize="sm"
            >
              114ml
            </Text>
          </Button>

          <Button
            variant="Unstyled"
            mr="2"
            bg="gray.300"
            borderColor={sizeSelected === '140ml' ? 'purple.500' : 'gray.300'}
            borderWidth="2"
            flex={1}
            borderRadius="8"
            py="2"
            px="3"
            onPress={() => setSizeSelected('140ml')}
          >
            <Text
              color={sizeSelected === '140ml' ? 'purple.500' : 'gray.700'}
              fontSize="sm"
            >
              140ml
            </Text>
          </Button>

          <Button
            variant="Unstyled"
            mr="2"
            bg="gray.300"
            borderColor={sizeSelected === '227ml' ? 'purple.500' : 'gray.300'}
            flex={1}
            borderWidth="2"
            py="2"
            borderRadius="8"
            px="3"
            onPress={() => setSizeSelected('227ml')}
          >
            <Text
              color={sizeSelected === '227ml' ? 'purple.500' : 'gray.700'}
              fontSize="sm"
            >
              227ml
            </Text>
          </Button>
        </HStack>
      </ScrollView>
    </VStack>
  )
}
