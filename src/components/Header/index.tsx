import Image from 'next/image'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Dialog from '@radix-ui/react-dialog'
import {
  HeaderContainerMobile,
  BurguerMenuMobile,
  ContentMenuMobile,
  HeaderContainer,
  NavContent,
  NavHeader,
  NavLink,
  NavList,
  NavTrigger,
} from './styles'

import { List } from 'phosphor-react'

import logo from '../../assets/logoEbs.png'
import { DefaultButton } from '../Button/styles'
import { useEffect, useState } from 'react'

export function Header() {
  const [screenSize, setScreenSize] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      const size = window.innerWidth
      return setScreenSize(size)
    })
  }, [])

  console.log(screenSize)
  if (screenSize < 960) {
    return (
      <HeaderContainerMobile>
        <Image src={logo} width={90} alt="" />

        <Dialog.Root>
          <BurguerMenuMobile>
            <List size={32} />
          </BurguerMenuMobile>
          <Dialog.Portal style={{ transition: 'ease 200ms' }}>
            <ContentMenuMobile>
              <header>
                <Dialog.Close
                  style={{ position: 'absolute', top: 0, right: 0 }}
                >
                  close
                </Dialog.Close>
              </header>
              <nav>
                <ul>
                  <li>
                    <header>
                      {' '}
                      <strong>A FEIRA</strong>
                    </header>
                    <ul>
                      <li>Feira EBS</li>
                      <li>Speed Meeting</li>
                      <li>Congresso MICE Brasil</li>
                      <li>Arenas Experience</li>
                      <li>Catálogo Oficial</li>
                      <li>Fotos 2022</li>
                      <li>Balanço Feira EBS 2022</li>
                      <li>Saiu na Mídia</li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </ContentMenuMobile>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContainerMobile>
    )
  }

  return (
    <HeaderContainer>
      <Image src={logo} alt="" width={180} />
      <div>
        <NavHeader>
          <NavigationMenu.Root>
            <NavList>
              <NavigationMenu.Item>
                <NavTrigger>A FEIRA</NavTrigger>
                <NavContent>
                  <NavLink>Feira EBS</NavLink>
                  <NavLink>Speed Meeting</NavLink>
                  <NavLink>Congresso MICE Brasil</NavLink>
                  <NavLink>Arenas Experience</NavLink>
                  <NavLink>Catálogo Oficial</NavLink>
                  <NavLink>Fotos 2022</NavLink>
                  <NavLink>Balanço Feira EBS 2022</NavLink>
                  <NavLink>Saiu na Mídia</NavLink>
                </NavContent>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavTrigger>EXPOSITOR</NavTrigger>
                <NavContent>
                  <NavLink>Perfil do Expositor</NavLink>
                  <NavLink>Seja Expositor</NavLink>
                  <NavLink>Lista de Expositores</NavLink>
                  <NavLink>Planta da feira EBS</NavLink>
                </NavContent>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavTrigger>VISITANTE</NavTrigger>
                <NavContent>
                  <NavLink>Quem visita</NavLink>
                  <NavLink>Termos e condições</NavLink>
                  <NavLink>Programa comprador convidado</NavLink>
                </NavContent>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavTrigger>PROGRAMAÇÃO</NavTrigger>
                <NavContent>
                  <NavLink>Congresso MICE</NavLink>
                  <NavLink>Arena Expirience</NavLink>
                  <NavLink> Palestrantes</NavLink>
                </NavContent>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavTrigger>CONTATO</NavTrigger>
              </NavigationMenu.Item>
            </NavList>
          </NavigationMenu.Root>
        </NavHeader>
        <DefaultButton>Seja expositor</DefaultButton>
      </div>
    </HeaderContainer>
  )
}
