import Image from 'next/image'
import {
  Background,
  HomeContainer,
  HomeMain,
  Overlay,
  Presentation,
  PresentationContainer,
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
        <Presentation>
          <h1>UM OCEANO DE OPORTUNIDADES</h1>
          <PresentationContainer>
            <iframe
              width="541"
              height="314"
              src="https://www.youtube.com/embed/J1rKAh_IeP4"
              title="Feira EBS + Congresso MICE Brasil +  Speed Meeting 2022"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <div>
              <h2>
                PARA VOCÊ QUE REALIZA, PROMOVE, ORGANIZA EVENTOS E TREINAMENTOS
              </h2>
              <p>
                A Feira EBS completou 20 anos, consolidou-se como o maior evento
                dirigido aos segmentos MICE e T&D realizado no país, englobando
                a indústria de eventos corporativos, incentivos, treinamentos,
                congressos e feiras. O evento reuniu toda a cadeia produtiva
                deste mercado em um único lugar: clientes finais, agências e
                fornecedores de produtos e serviços, todos em busca de conteúdo,
                networking qualificado e principalmente oportunidades de
                negócios.
              </p>
            </div>
          </PresentationContainer>
        </Presentation>
      </HomeMain>
    </HomeContainer>
  )
}
