export interface ICard {
  emoji: string
  text: string
  principal?: boolean
  link: string
}

export interface ITitle {
  children: React.ReactNode
  style: string
}

export type IText = ITitle
