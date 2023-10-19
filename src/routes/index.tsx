import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { useTheme } from 'native-base'
import { AppRoutes } from './app.routes'

const linking = {
  prefixes: [
    'coffee_delivery_app://',
    'com.rocketseat.coffee_delivery_app://',
    'exp+coffee_delivery_app://',
  ],
  config: {
    screens: {
      home: {
        path: 'home',
      },
    },
  },
}

export function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[800]

  return (
    <NavigationContainer linking={linking} theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  )
}
