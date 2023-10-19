/* eslint-disable camelcase */
import { Loading } from '@components/Loading'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import {
  useFonts as useFontsBaloo2,
  Baloo2_400Regular,
  Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2'
import { Routes } from '@routes/index'
import { THEME } from './src/styles/theme'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ShoppingCartContextProvider } from '@hooks/useShoppingCart'

export default function App() {
  const [fontsRobotoLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  const [fontsBalooLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ShoppingCartContextProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsRobotoLoaded && fontsBalooLoaded ? <Routes /> : <Loading />}
        </ShoppingCartContextProvider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  )
}
