import Image from 'next/image'
import YouTube from 'react-youtube'
import { Button } from '../components/Button'
import { Fade, Slide, Zoom, Reveal } from 'react-awesome-reveal'
import { Cake, Clock, Handshake, MapPin, User } from 'phosphor-react'
import {
  AboutEvent,
  Background,
  CardEvent,
  HomeContainer,
  HomeMain,
  ListCardEvent,
  ListEvent,
  MainEvent,
  Overlay,
  Presentation,
  PresentationContainer,
  TextBackground,
} from './styles'

import bg from '../public/assets/bg.jpg'
import imgEBS from '../public/assets/feiraEBS.jpg'
import mice from '../public/assets/congressoMice.jpg'
import speedMeeting from '../public/assets/speedMeeting.jpg'

export default function App() {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  }

  return (
    <HomeContainer>
      <Background>
        <Image src={bg.src} alt="" width={600} height={600} sizes="100%" />
        <Overlay></Overlay>
        <TextBackground>
          <Fade>
            <h1>
              FEIRA EBS <span>2023</span>{' '}
            </h1>
          </Fade>

          <Fade delay={250}>
            <p>
              <strong>
                21ª Feira da Indústria dos Eventos Corporativos, Incentivos,
                Congressos, Feiras e Treinamentos & Desenvolvimento
              </strong>
            </p>
          </Fade>
          <Fade delay={300}>
            <p>31 de Maio e 01 de Junho Centro de Convenções Rebouças</p>
          </Fade>
          <Slide>
            <Button model={'circle'} title="PARTICIPE" />
          </Slide>
        </TextBackground>
      </Background>
      <HomeMain>
        <Presentation>
          <Zoom delay={350}>
            <h1>UM OCEANO DE OPORTUNIDADES</h1>
          </Zoom>
          <Fade>
            <PresentationContainer>
              <YouTube videoId="J1rKAh_IeP4" opts={videoOptions} />

              <div>
                <h2>
                  PARA VOCÊ QUE REALIZA, PROMOVE, ORGANIZA EVENTOS E
                  TREINAMENTOS
                </h2>
                <p>
                  A Feira EBS completou 20 anos, consolidou-se como o maior
                  evento dirigido aos segmentos MICE e T&D realizado no país,
                  englobando a indústria de eventos corporativos, incentivos,
                  treinamentos, congressos e feiras. O evento reuniu toda a
                  cadeia produtiva deste mercado em um único lugar: clientes
                  finais, agências e fornecedores de produtos e serviços, todos
                  em busca de conteúdo, networking qualificado e principalmente
                  oportunidades de negócios.
                </p>
              </div>
            </PresentationContainer>
          </Fade>
        </Presentation>
        <AboutEvent>
          <Reveal delay={200}>
            {' '}
            <CardEvent>
              <header>
                <strong>21 ANOS</strong>
              </header>
              <Cake size={60} />

              <p>Gerando relacionamento e oportunidades de negócios</p>
            </CardEvent>
          </Reveal>
          <Reveal delay={350}>
            {' '}
            <CardEvent>
              <header>
                <strong>+70 Expositores</strong>
              </header>
              <User size={60} />

              <p>
                Destinos, Espaços, Fornecedores, tudo o que seu evento precisa.
              </p>
            </CardEvent>
          </Reveal>
          <Reveal delay={500}>
            {' '}
            <CardEvent>
              <header>
                <strong>+24 Horas</strong>
              </header>
              <Clock size={60} />

              <p>Diversos temas sobre Eventos, Marketing, RH e Treinamento</p>
            </CardEvent>
          </Reveal>
          <Reveal delay={650}>
            {' '}
            <CardEvent>
              <header>
                <strong> Reuniões de negócios</strong>
              </header>
              <Handshake size={60} />

              <p>Frente a frente compradores e fornecedores</p>
            </CardEvent>
          </Reveal>
          <Reveal delay={800}>
            {' '}
            <CardEvent>
              <header>
                <strong>Localização</strong>
              </header>
              <MapPin size={60} />

              <p>
                Centro de Convenções Rebouças, Av. Rebouças, 600 - Pinheiros -
                São Paulo - SP
              </p>
            </CardEvent>
          </Reveal>
        </AboutEvent>
        <MainEvent>
          <h1>O que você vai encontrar na EBS 2023?</h1>
          <ListEvent>
            <Reveal delay={200}>
              <ListCardEvent>
                <h2>Feira EBS</h2>
                <Image src={imgEBS.src} width={600} height={600} alt="" />
                <p>
                  A <strong>Feira EBS </strong> apresenta a maior exposição de
                  empresas fornecedoras de soluções para eventos corporativos,
                  incentivos, treinamentos, congressos e feiras. A edição de
                  2022 reuniu mais de +60 expositores de soluções para atender
                  as demandas.
                </p>
              </ListCardEvent>
            </Reveal>
            <Reveal delay={350}>
              <ListCardEvent>
                <h2>Congresso MICE</h2>
                <Image src={mice.src} width={600} height={600} alt="" />
                <p>
                  O <strong>Congresso MICE Brasil</strong> proporciona conteúdos
                  de alto nível, trazendo uma visão do futuro dos eventos, novas
                  tecnologias, além de promover o intercâmbio de experiências,
                  integrando toda a indústria de eventos corporativos,
                  incentivos, feiras e congressos.
                </p>
              </ListCardEvent>
            </Reveal>
            <Reveal delay={500}>
              <ListCardEvent>
                <h2>Speed Meeting</h2>
                <Image src={speedMeeting.src} width={600} height={600} alt="" />
                <p>
                  O <strong>Speed Meeting EBS</strong> é a rodada de negócios da
                  Feira EBS, que tem como objetivo aproximar expositores e
                  compradores de soluções para eventos corporativos, incentivos
                  e treinamentos. Em 2022, reuniu +150 empresas compradoras.
                </p>
              </ListCardEvent>
            </Reveal>
          </ListEvent>
        </MainEvent>
      </HomeMain>
    </HomeContainer>
  )
}
