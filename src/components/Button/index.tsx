import { ComponentProps, ReactNode } from 'react'
import { ButtonRadio, DefaultButton } from './styles'

interface ButtonProps extends ComponentProps<typeof DefaultButton> {
  title: string
  model?: 'default' | 'circle'
  children?: ReactNode
}

export function Button({ title, children, model = 'default' }: ButtonProps) {
  if (model === 'circle') {
    return <ButtonRadio>{title}</ButtonRadio>
  }
  return (
    <DefaultButton>
      {title}
      {children}
    </DefaultButton>
  )
}
