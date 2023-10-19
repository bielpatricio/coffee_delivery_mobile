import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    blue: {
      700: '#1565C0',
      500: '#1E88E5',
    },
    gray: {
      900: '#272221',
      800: '#403937',
      700: '#574F4D',
      600: '#8D8686',
      500: '#E6E5E5',
      400: '#D7D5D5',
      300: '#EDEDED',
      200: '#F3F2F2',
      100: '#FAFAFA',
    },
    white: '#FFFFFF',
    red: {
      500: '#C44117',
      300: '#E8BAAB',
      100: '#F2DFD8',
    },
    purple: {
      500: '#4B2995',
      300: '#8047F8',
      200: '#c4b5fd',
      100: '#EBE5F9',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    headingBaloo: 'Baloo2_700Bold',
    bodyBaloo: 'Baloo2_400Regular',
  },
  fontSizes: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 36,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
