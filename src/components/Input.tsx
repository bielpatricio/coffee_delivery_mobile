import { HStack, IInputProps, Icon, Input as InputBase } from 'native-base'
import { MagnifyingGlass } from 'phosphor-react-native'

type InputProps = IInputProps & {
  placeholder: string
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <HStack>
      <InputBase
        InputLeftElement={
          <Icon
            as={<MagnifyingGlass color="#8D8686" weight="bold" />}
            width={24}
            height={24}
            ml="2"
          />
        }
        placeholder={placeholder}
        {...rest}
        // variant="filled"
        w="100%"
        p={2}
        color="gray.400"
        fontSize={14}
      />
    </HStack>
  )
}
