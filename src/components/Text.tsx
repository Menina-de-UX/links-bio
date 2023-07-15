// Components
// Utilities
// Hooks
// Interfaces
import { IText } from '@/interfaces/components'

export function Text({ children, style }: IText) {
  return (
    <>
      <p className={style}>{children}</p>
    </>
  )
}
