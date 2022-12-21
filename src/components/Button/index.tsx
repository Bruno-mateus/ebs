import { ComponentProps } from 'react'
import { ButtonRadio, DefaultButton } from './styles'

interface ButtonProps extends ComponentProps<typeof DefaultButton> {
  title: string
  model?: 'default' | 'circle'
}

export function Button({ title, model = 'default' }: ButtonProps) {
  if (model === 'circle') {
    return <ButtonRadio>{title}</ButtonRadio>
  }
  return <DefaultButton>{title}</DefaultButton>
}
