export interface ICard {
  emoji: string
  principal?: boolean
  link: string
  children: React.ReactNode
}

export interface ITitle {
  children: React.ReactNode
  style: string
}

export type IText = ITitle
