import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesStackProps } from '@routes/app.routes'
import { Pressable, HStack, Text, VStack } from 'native-base'
import { Coffee } from 'src/reducers/Cart/reducer'

type CardProps = {
  item: Coffee
}

export function Card({ item }: CardProps) {
  const navigate = useNavigation<AppNavigatorRoutesStackProps>()

  return (
    <Pressable
      marginTop={6}
      onPress={() => navigate.navigate('detail', { ...item })}
    >
      <HStack
        py="4"
        px="2"
        background="gray.100"
        borderRadius={8}
        borderTopRightRadius={36}
        borderBottomLeftRadius={36}
        flexWrap="wrap"
      >
        {item.image}

        <VStack flex={1}>
          <Text mb={1} color="gray.900" fontSize="md" fontFamily="headingBaloo">
            {item.subName}
          </Text>

          <Text
            color="gray.600"
            fontSize="xs"
            fontFamily="Baloo2_400Regular"
            mb={1}
          >
            {item.description}
          </Text>

          <Text
            display="flex"
            alignItems="flex-end"
            color="blue.700"
            fontSize="lg"
            fontFamily="headingBaloo"
          >
            <Text fontSize="sm" fontFamily="Baloo2_400Regular">
              R$
            </Text>
            {String(item.price).replace(/\./g, ',')}
          </Text>
          {/* </VStack> */}
        </VStack>
      </HStack>
    </Pressable>
  )
}
