import { Zoom } from 'react-awesome-reveal'
import { Attention, PageMiceContainer, PageMiceMain } from './styles'
import { Button } from '../../components/Button'
import { Pencil } from 'phosphor-react'
import { Lecture } from '../../components/Lecture'

export default function Progamation() {
  return (
    <PageMiceContainer>
      <Zoom>
        <h1>
          Congresso MICE <span>|</span> Programação{' '}
        </h1>
      </Zoom>

      <PageMiceMain>
        <Attention>
          <h2>VAGAS LIMITADAS</h2>
          <Button title="Inscreva-se">
            <Pencil size={20} />
          </Button>
        </Attention>
        <Lecture />
      </PageMiceMain>
    </PageMiceContainer>
  )
}
