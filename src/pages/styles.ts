import { styled } from '../styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  alignItems: 'center',
})
export const HomeMain = styled('main', {
  width: '100%',
  padding: '1rem 2rem',
  marginTop: '72vh',
  maxWidth: 1200,
})
export const Background = styled('div', {
  width: '100vw',
  height: '72vh',
  backdropFilter: 'blur(1.2px)',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  color: '$white',
  fontFamily: "'Barlow condensed', serif",
  h1: {
    fontSize: '4rem',
    color: '$gray100',
  },
  span: {
    color: '$lightBlue',
  },
  p: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    marginTop: '1rem',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})
export const Overlay = styled('div', {
  background: '$black',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  opacity: 0.8,
})
export const TextBackground = styled('div', {
  zIndex: 1,
  position: 'absolute',
})
export const Presentation = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
})
