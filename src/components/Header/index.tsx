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
  CloseMobile,
} from './styles'

import { List, X } from 'phosphor-react'

import logo from '../../public/assets/logoEbs.png'
import { DefaultButton } from '../Button/styles'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [screenSize, setScreenSize] = useState(0)
  useEffect(() => {
    const initialSize = window.innerWidth
    setScreenSize(initialSize)
    window.addEventListener('resize', () => {
      const size = window.innerWidth
      return setScreenSize(size)
    })
  }, [])

  if (screenSize < 960) {
    return (
      <HeaderContainerMobile>
        <Link href={'/'}>
          <Image src={logo} width={90} alt="" />
        </Link>

        <Dialog.Root>
          <BurguerMenuMobile>
            <List size={32} />
          </BurguerMenuMobile>
          <Dialog.Portal style={{ animation: 'ease 200ms' }}>
            <ContentMenuMobile>
              <header>
                <CloseMobile>
                  <X size={32} />
                </CloseMobile>
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
                  <li>
                    <header>
                      {' '}
                      <strong>EXPOSITOR</strong>
                    </header>
                    <ul>
                      <li>Perfil do Expositor</li>
                      <li>Seja Expositor</li>
                      <li>Lista de Expositores</li>
                      <li>Planta da feira EBS</li>
                    </ul>
                  </li>
                  <li>
                    <header>
                      {' '}
                      <strong>VISITANTE</strong>
                    </header>
                    <ul>
                      <li>Quem visita</li>
                      <li>Termos e condições</li>
                      <li>Programa comprador convidado</li>
                    </ul>
                  </li>
                  <li>
                    <header>
                      {' '}
                      <strong>PROGRAMAÇÃO</strong>
                    </header>
                    <ul>
                      <li>Congresso MICE</li>
                      <li>Arena Expirience</li>
                      <li> Palestrantes</li>
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
      <Link href={'/'}>
        <Image src={logo} width={180} alt="" />
      </Link>
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
