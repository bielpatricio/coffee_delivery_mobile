import { Center, HStack, ICenterProps, Text } from 'native-base'

type TagProps = ICenterProps & {
  tags: string[]
  variantColor: 'purple' | 'gray'
}

export function Tag({ tags, variantColor = 'purple', ...rest }: TagProps) {
  return (
    <HStack mb={1} flexWrap="wrap">
      {tags.map((tag) => {
        return (
          <Center
            key={tag}
            bg={variantColor === 'purple' ? 'purple.100' : 'gray.800'}
            borderRadius="full"
            py={0.5}
            px={2}
            mr={1}
            mb={1}
            {...rest}
          >
            <Text
              textAlign="center"
              color={variantColor === 'purple' ? 'purple.500' : 'gray.100'}
              fontSize="xs"
              fontFamily="headingBaloo"
            >
              {tag}
            </Text>
          </Center>
        )
      })}
    </HStack>
  )
}
