// Components
// Utilities
// Hooks
// Interfaces
import { ICard } from '@/interfaces/components'

export type SpanTextProps = {
  principal?: boolean
} & React.ComponentProps<'span'>

export function SpanText(props: SpanTextProps) {
  const { principal, ...rest } = props
  return (
    <span
      {...rest}
      className={` ${
        principal
          ? 'text-lg lg:text-sm  font-semibold text-white'
          : 'font-medium text-white'
      } `}
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
      <div className={`cardStyle group`} onClick={handlerClick}>
        <div
          className={`cardContent  ${
            principal
              ? 'bg-blue-500 flex flex-col h-auto rounded-none'
              : 'bg-transparent border-2 scale-95 border-white hover:scale-100'
          } effectTransition`}
        >
          {/*  <span
            className={` ${
              principal
                ? 'text-lg lg:text-xl  font-semibold text-white'
                : 'font-medium text-white'
            } `}
          ></span> */}
          {children}
        </div>
      </div>
    </>
  )
}
