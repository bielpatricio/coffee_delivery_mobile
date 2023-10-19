import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesStackProps } from '@routes/app.routes'
import { HStack, Image } from 'native-base'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import Animated, { Easing, FadeInRight } from 'react-native-reanimated'

export function InitialLoading() {
  const { navigate } = useNavigation<AppNavigatorRoutesStackProps>()

  useEffect(() => {
    setTimeout(() => {
      navigate('home')
    }, 3000)
  }, [])

  return (
    <HStack
      bg="purple.500"
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="full"
      w="full"
    >
      <Animated.View>
        <Image
          source={require('../assets/logo.png')}
          alt="Logo"
          resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
          h={75}
          w={75}
          alignSelf="center"
        />
      </Animated.View>
      <Animated.View
        entering={FadeInRight.delay(1000).duration(500).easing(Easing.ease)}
      >
        <Image
          source={require('../assets/logoName.png')}
          alt="Logo"
          resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
          h={75}
          w={75}
          alignSelf="center"
        />
      </Animated.View>
    </HStack>
  )
}
