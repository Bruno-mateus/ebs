import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    // criando tema
    colors: {
      white: '#FFF',
      black: '#000',
      darkBlue: '#4054B2',
      lightBlue: '#6EC1E4',
      gray100: '#E1E1E6',
      gray200: '#A9A9B2',
      gray400: '#7C7C8A',
      gray500: '#505059',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#202024',
      gray900: '#121214',
    },
  },
})
