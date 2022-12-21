import { keyframes, styled } from '../../styles'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Dialog from '@radix-ui/react-dialog'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

export const HeaderContainer = styled('header', {
  background: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  color: '$white',
  div: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
})

export const NavHeader = styled('nav', {
  ul: {
    li: {
      listStyle: 'none',
    },
  },
})

export const NavTrigger = styled(NavigationMenu.Trigger, {
  background: 'transparent',
  color: '$white',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  padding: '1rem',
  borderRadius: '8px',
  transition: 'ease-out 250ms',
  '&[data-state="open"]': {
    background: '$gray700',
  },
  '&:hover': {
    background: '$gray700',
    transition: 'ease-in 250ms',
  },
})

export const NavContent = styled(NavigationMenu.Content, {
  color: '$white',
  position: 'absolute',
  top: 70,
  zIndex: 10,
  background: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  width: 240,
  maxHeight: 400,
  overflowY: 'auto',
  borderRadius: '0 0 8px 8px',
  '&::-webkit-scrollbar': {
    width: 5,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
    borderRadius: '10px',
  },
  padding: '1rem',
  '@media only screen and (min-width: 600px)': {},
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
})
export const NavLink = styled(NavigationMenu.NavigationMenuLink, {
  borderBottom: '1px solid $gray100',
  padding: '.6rem',
  cursor: 'pointer',
  transition: 'ease-out 250ms',
  width: '100%',
  '&:hover': {
    background: '$gray600',
    transition: 'ease-in 250ms',
  },
})

export const NavList = styled(NavigationMenu.List, {
  display: 'flex',
})

// menu mobile

export const HeaderContainerMobile = styled('header', {
  display: 'flex',
  alignItems: 'center',
  padding: '1.5rem',
  justifyContent: 'space-between',
  background: '$gray800',
})

export const ContentMenuMobile = styled(Dialog.Content, {
  position: 'absolute',

  top: 0,
  right: 0,
  padding: '1rem',
  width: '85%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  background: '$gray900',
  transition: 'ease-in 10s',
  color: '$white',
  header: {
    width: '100%',
    position: 'relative',
  },
  nav: {
    backgroundColor: 'transparent',
    marginTop: '3rem',

    fontFamily: 'roboto',
    fontSize: '.8rem',

    ul: {
      display: 'flex',
      gap: '1.5rem',
      flexDirection: 'column',
      li: {
        listStyle: 'none',
        padding: '.5rem',
        strong: {
          borderBottom: '1px solid $white',
          padding: '0.1px',
        },
        ul: {
          display: 'flex',
          gap: '.7rem',
          flexDirection: 'column',
          backgroundColor: '$gray800',
          padding: '1rem',
          cursor: 'pointer',
          li: {
            padding: '.4rem',
            backgroundColor: '$gray700',
            '&:hover': {
              backgroundColor: '$gray900',
            },
          },
        },
      },
    },
  },
})

export const CloseMobile = styled(Dialog.Close, {
  background: 'transparent',
  position: 'absolute',
  top: 0,
  right: 0,
  border: 'none',
  cursor: 'pointer',
  svg: {
    color: '$white',
    '&:hover': {
      color: '$gray100',
    },
  },
})

export const BurguerMenuMobile = styled(Dialog.Trigger, {
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  svg: {
    color: '$white',
    cursor: 'pointer',
    '&:hover': {
      color: '$gray100',
    },
  },
})
