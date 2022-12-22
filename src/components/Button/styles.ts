import { styled } from '../../styles'

export const DefaultButton = styled('button', {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  maxWidth: '180px',
  display: 'flex',

  gap: '.5rem',
  border: '2px solid $white',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'ease-out 200ms',
  background: 'transparent',
  color: '$white',
  '&:hover': {
    background: '$gray700',
  },
})

export const ButtonRadio = styled('button', {
  width: '150px',
  height: '150px',
  background: '$gray100',
  marginTop: '5rem',
  border: 'none',
  borderRadius: '100%',
  fontSize: '1.25rem',
  fontFamily: 'bellefair',
  cursor: 'pointer',
  transition: 'ease-out 200ms',

  '&:hover': {
    boxShadow: '0 0 0 3rem rgba(255,255,255,0.1)',
    transition: 'ease 200ms',
  },
})
