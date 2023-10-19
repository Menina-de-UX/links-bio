// Components
// Utilities
// Hooks
// Interfaces
import { ICard } from '@/interfaces/components'

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
              ? 'bg-blue-500 animate-bounce'
              : 'bg-transparent border-2 scale-95 border-white hover:scale-100'
          } effectTransition`}
        >
          <span
            className={` ${
              principal
                ? 'text-lg lg:text-xl  font-semibold text-white'
                : 'font-medium text-white'
            } `}
          >
            {children}
          </span>
        </div>
      </div>
    </>
  )
}
