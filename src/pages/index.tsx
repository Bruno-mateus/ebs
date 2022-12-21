import Image from 'next/image'
import {
  Background,
  HomeContainer,
  HomeMain,
  Overlay,
  Presentation,
  TextBackground,
} from './styles'
import bg from '../assets/bg.jpg'
import { Button } from '../components/Button'

export default function App() {
  return (
    <HomeContainer>
      <Background>
        <Image src={bg} alt="" sizes="100%" />
        <Overlay></Overlay>
        <TextBackground>
          <h1>
            FEIRA EBS <span>2023</span>{' '}
          </h1>
          <p>
            <strong>
              21ª Feira da Indústria dos Eventos Corporativos, Incentivos,
              Congressos, Feiras e Treinamentos & Desenvolvimento
            </strong>
          </p>
          <p>31 de Maio e 01 de Junho Centro de Convenções Rebouças</p>
          <Button model={'circle'} title="PARTICIPE" />
        </TextBackground>
      </Background>
      <HomeMain>
        <Presentation></Presentation>
      </HomeMain>
    </HomeContainer>
  )
}
