import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    position: 'relative',
    '-webkit-font-smoothing': 'antialiased',
  },
  body: {
    color: '$gray900',

    background: '$gray100',
  },
  'body,input,button,textarea': {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
  },
  'h1,h2,h3,h4,h5': {
    fontFamily: "'Barlow condensed', serif",
  },
  h1: {
    fontSize: '2rem',
  },
})
