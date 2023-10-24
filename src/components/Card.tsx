// Components
// Utilities
// Hooks
// Interfaces
import { ICard } from '@/interfaces/components'
import { ComponentProps } from 'react'

export type SpanTextProps = {
  principal?: boolean
} & ComponentProps<'span'>

export function SpanText(props: SpanTextProps) {
  const { principal, ...rest } = props
  return (
    <span
      {...rest}
      className={` ${
        principal
          ? 'text-sm lg:text-xs  font-semibold text-white'
          : 'font-medium text-white'
      } `}
    />
  )
}

export type CardTextProps = ComponentProps<'div'>

export function CardText(props: CardTextProps) {
  return (
    <div className="w-cardLink px-2 pb-3 flex flex-col" {...props} />
  )
}

export type CardImageProps = {
  bgImage: string
} & ComponentProps<'div'>

export function CardImage(props: CardImageProps) {
  const { bgImage, ...rest } = props
  return (
    <div
      className={`${bgImage} bg-center bg-cover w-cardLink h-cardLink rounded-t-2xl mb-auto`}
      {...rest}
    />
  )
}

export function Card({ principal, link, children }: ICard) {
  //  função que ao ser clicado abre uma nova janela e redireciona para o link sugerido
  function handlerClick() {
    window.open(link, '_blank')
  }

  return (
    <>
      <div
        className={`cardStyle ${principal ? 'w-cardLink' : 'h-[5.3rem]'}`}
        onClick={handlerClick}
      >
        <div
          className={`cardContent  ${
            principal
              ? 'bg-black-200 flex flex-col rounded-2xl h-cardLInk'
              : 'bg-transparent border-2 scale-95 border-white hover:scale-100 text-center w-card'
          } effectTransition`}
        >
          {children}
        </div>
      </div>
    </>
  )
}
