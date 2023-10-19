import { InitialLoading } from '@components/InitialLoading'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { CoffeeDetail } from '@screens/CoffeeDetail'
import { Home } from '@screens/Home'
import { Coffee } from 'src/reducers/Cart/reducer'

export type AppRoutesStackType = {
  home: undefined
  initial: undefined
  detail: Coffee
}

export type AppNavigatorRoutesStackProps =
  NativeStackNavigationProp<AppRoutesStackType>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesStackType>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        // options={{ headerShown: false }}
        name="initial"
        component={InitialLoading}
      />
      <Screen
        // options={{ headerShown: false }}
        name="home"
        component={Home}
      />
      <Screen name="detail" component={CoffeeDetail} />

      {/* <Group
        screenOptions={{
          gestureEnabled: false,
        }}
      >
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group> */}
    </Navigator>
  )
}
