// Components
// Utilities
// Hooks
// Interfaces
import { ICard } from '@/interfaces/components'

export function Card({ emoji, text, principal, link }: ICard) {
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
              : 'bg-white group-hover:bg-blue-500 '
          } effectTransition`}
        >
          <span
            className={` ${
              principal
                ? 'text-lg lg:text-xl  font-semibold text-white'
                : 'font-medium group-hover:text-white'
            } `}
          >
            {text}
          </span>
          <span className="text-3xl lg:text-4xl">{emoji}</span>
        </div>
      </div>
    </>
  )
}
