// Components
// Utilities
// Hooks
// Interfaces
import { ITitle } from '@/interfaces/components'

export function Title({ children, style }: ITitle) {
  return (
    <>
      <h2 className={style}>{children}</h2>
    </>
  )
}
