import { styled } from '../..'

export const PageMiceContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  alignItems: 'center',
  marginTop: '2rem',
  h1: {
    fontSize: '3rem',
  },
  span: {
    color: '$lightBlue',
  },
})
export const PageMiceMain = styled('main', {
  width: '100%',
  padding: '1rem 2rem',
  maxWidth: 1200,

  '@media(max-width:760px)': {
    padding: '1rem',
  },
})
export const Attention = styled('div', {
  width: '100%',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  gap: '1rem',
  background: '$gray900',
  marginTop: '2rem',
  h2: {
    color: '$white',
  },
})
