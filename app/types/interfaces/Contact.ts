export interface ContactItem {
  title: string
  description: string
  icon: string
  to?: string
  class?: string,
  image?: {
    path: string
    width?: number
    height?: number
  }
  orientation?: 'horizontal' | 'vertical'
}

export interface SocialItem {
  name: string
  icon: string
  href: string
  customClasses?: string
}
