import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesStackProps } from '@routes/app.routes'
import {
  IconButton,
  Icon,
  HStack,
  Text,
  VStack,
  ITextProps,
  IIconButtonProps,
  Center,
} from 'native-base'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { ArrowLeft, MapPin, ShoppingCart } from 'phosphor-react-native'
import { ReactNode } from 'react'

type RootProps = IHStackProps & {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <HStack
      {...rest}
      alignItems="center"
      justifyContent="space-between"
      pb={6}
      pt={16}
    >
      {children}
    </HStack>
  )
}

type TitleProps = ITextProps & {
  title: string
  subtitle?: string
}

export function Title({ title, subtitle, ...rest }: TitleProps) {
  return (
    <HStack>
      <IconButton
        p="0"
        marginRight={1}
        icon={
          <Icon
            as={<MapPin color="#8047F8" weight="fill" />}
            width={24}
            height={24}
          />
        }
      />
      <VStack justifyContent="center">
        <Text
          {...rest}
          textAlign="center"
          fontSize="lg"
          fontFamily="heading"
          fontWeight="normal"
          mb={1}
        >
          {title}
        </Text>
        {Boolean(subtitle) && (
          <Text {...rest} textAlign="center" fontSize="sm">
            {subtitle}
          </Text>
        )}
      </VStack>
    </HStack>
  )
}

type ButtonProps = IIconButtonProps

export function BackButton({ ...rest }: ButtonProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <IconButton
      {...rest}
      marginRight={1}
      onPress={handleGoBack}
      icon={<Icon as={<ArrowLeft color="#FAFAFA" />} width={24} height={24} />}
    />
  )
}

type ShoppingCartButtonProps = IIconButtonProps & {
  quantity: number
}

export function ShoppingCartButton({
  quantity,
  ...rest
}: ShoppingCartButtonProps) {
  if (quantity > 0) {
    return (
      <HStack>
        <IconButton
          {...rest}
          icon={
            <Icon
              as={<ShoppingCart weight="fill" color="#8047F8" />}
              width={24}
              height={24}
            />
          }
        />
        <VStack>
          <Center
            bg="purple.300"
            w="6"
            h="6"
            p="1"
            ml="-3"
            mt="-1"
            rounded="full"
          >
            <Text p="0" m="0" mt="-1" color="white" fontSize="sm">
              {quantity}
            </Text>
          </Center>
        </VStack>
      </HStack>
    )
  }

  return (
    <IconButton
      {...rest}
      icon={
        <Icon
          as={<ShoppingCart weight="fill" color="#1565C0" />}
          width={24}
          height={24}
        />
      }
    />
  )
}
