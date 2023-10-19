import { Spinner, Center } from 'native-base'

export function Loading() {
  return (
    <Center flex={1} bg="gray.800">
      <Spinner color="red.700" />
    </Center>
  )
}
