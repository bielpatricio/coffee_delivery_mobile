import { Box, Pressable, Text } from 'native-base'
import { Tag } from './Tag'
import { Coffee } from 'src/reducers/Cart/reducer'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesStackProps } from '@routes/app.routes'

type CardProps = {
  item: Coffee
}

export function CardHeader({ item }: CardProps) {
  const navigate = useNavigation<AppNavigatorRoutesStackProps>()

  return (
    <Pressable
      onPress={() => navigate.navigate('detail', { ...item })}
      display="flex"
      alignItems="flex-end"
      justifyContent="flex-end"
      background="transparent"
      marginRight={4}
      h={272}
      w={238}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="2"
        py="4"
        flexDir="column"
        background="gray.100"
        borderRadius={8}
        borderTopRightRadius={36}
        borderBottomLeftRadius={36}
        h={232}
        w={228}
      >
        {item.image}

        <Tag variantColor="purple" tags={item.tags} />

        <Text mb={1} color="gray.900" fontSize="md" fontFamily="headingBaloo">
          {item.subName}
        </Text>

        <Text
          textAlign="center"
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
      </Box>
    </Pressable>
  )
}
