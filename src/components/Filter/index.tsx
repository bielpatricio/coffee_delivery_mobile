import { Pressable, PressableProps, Text, TouchableOpacity } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { Button, useTheme } from 'native-base'
import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

// const TYPE_COLORS = {
//   EASY: THEME.COLORS.BRAND_LIGHT,
//   HARD: THEME.COLORS.DANGER_LIGHT,
//   MEDIUM: THEME.COLORS.WARNING_LIGHT,
// }

type Props = PressableProps & {
  title: string
  isChecked?: boolean
  // type?: keyof typeof TYPE_COLORS
}

export function Filter({
  title,
  // type = 'EASY',
  isChecked = false,
  ...rest
}: Props) {
  const scale = useSharedValue(1)
  const checked = useSharedValue(1)
  const theme = useTheme()

  useEffect(() => {
    // withTiming((checked.value = isChecked ? 1 : 0))
    checked.value = isChecked ? 1 : 0
    scale.value = isChecked ? 1.1 : 1
  }, [isChecked, checked])

  // const COLOR = TYPE_COLORS[type]

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        ['transparent', theme.colors.purple[500]],
      ),
      borderColor: interpolateColor(
        checked.value,
        [0, 1],
        [theme.colors.purple[200], 'transparent'],
      ),
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [theme.colors.purple[200], theme.colors.gray[200]],
      ),
    }
  })

  function onPressIn() {
    scale.value = withTiming(1.1)
  }

  function onPressOut() {
    scale.value = withTiming(1)
  }

  return (
    <PressableAnimated
      style={[styles.container, animatedContainerStyle]}
      onPressIn={onPressIn}
      {...rest}
    >
      <Animated.Text style={[styles.title, animatedTextStyle]}>
        {title}
      </Animated.Text>
    </PressableAnimated>
  )
}
