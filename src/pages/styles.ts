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
  '@media(max-width:760px)': {
    padding: '1rem',
  },
})
export const Background = styled('div', {
  width: '100%',
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
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  color: '$gray900',
  h1: {
    paddingBottom: '3rem',
  },
})

export const PresentationContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  '@media(max-width:760px)': {
    gridTemplateColumns: '1fr',

    div: {
      height: '480px',
    },
  },
  gap: '.5rem',
  h2: {
    fontSize: '1',
    background: '$darkBlue',
    padding: '1rem',
    color: '$white',
  },
  p: {
    lineHeight: '2rem',
    padding: '1rem',
    background: '$white',
    borderRadius: '0 0 5px 5px',
    textAlign: 'left',
  },
  iframe: {
    width: '100%',
    height: '100%',
  },
})

export const AboutEvent = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  marginTop: '4rem',
  padding: '1rem',
  gap: '2rem',
  '@media(max-width:760px)': {
    gridTemplateColumns: '1fr 1fr ',
  },
})
export const CardEvent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '.8rem',
  justifyContent: 'center',
  color: '$gray900',
  paddingBottom: '1rem',
  borderRadius: '10px',
  boxShadow: '1px 1px 1px rgba(0,0,0,0.1)',
  height: '200px',
  fontSize: '1rem',
  backgroundColor: '$white',
  p: {
    padding: '.4rem',
  },
  svg: {
    color: '$darkBlue',
  },
  header: {
    padding: 5,
    backgroundColor: '$darkBlue',
    color: '$white',
    width: '100%',
  },
})

export const MainEvent = styled('section', {
  marginTop: '2rem',
  h1: {
    color: '$gray900',
    borderBottom: '2px solid $darkBlue',
    display: 'inline',
  },
})

export const ListEvent = styled('div', {
  marginTop: '2rem',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem',
  '@media(max-width:800px)': {
    gridTemplateColumns: '1fr ',
    justifyContent: 'center',
    alignContent: 'center',
  },
})

export const ListCardEvent = styled('div', {
  boxShadow: '1px 1px 1px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  background: '$white',
  padding: '1rem',
  lineHeight: '1.5rem',
  borderRadius: '10px',
  margin: 'auto',
  h2: {
    color: '$darkBlue',
  },
  gap: '1rem',
  img: {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
  },
  '@media(max-width:760px)': {
    width: '80%',
  },
})
