import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '$gray100',
  },
  'body,input,button,textarea': {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
  },
})
