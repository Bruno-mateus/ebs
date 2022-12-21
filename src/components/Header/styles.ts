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
  background: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  width: 240,
  maxHeight: 400,
  overflowY: 'auto',

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
  padding: '2rem',
  width: '75%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',

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
    letterSpacing: '.4rem',
    fontFamily: 'roboto',
    fontSize: '.8rem',

    ul: {
      display: 'flex',
      gap: '1.5rem',
      flexDirection: 'column',
      li: {
        listStyle: 'none',
        ul: {
          display: 'flex',
          gap: '.7rem',
          flexDirection: 'column',
          backgroundColor: '$gray800',
          padding: '1rem',
          cursor: 'pointer',
          li: {
            padding: '.4rem',
            '&:hover': {
              backgroundColor: '$gray700',
            },
          },
        },
      },
    },
  },
})

export const BurguerMenuMobile = styled(Dialog.Trigger, {
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  svg: {
    color: '$secoundaryColor',
  },
})
