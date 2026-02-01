// data/navigation.ts
import type { NavigationItem } from '~/types'

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: 'fa7-solid:home'
  },
  {
    label: 'Sobre',
    to: '/sobre',
    icon: 'fa7-solid:book-open'
  },
  {
    label: 'Serviços',
    to: '/servicos',
    icon: 'fa7-solid:cog'
  },
  {
    label: 'Portfólio',
    to: '/portfolio',
    icon: 'fa7-solid:folder-open'
  },
  {
    label: 'Contato',
    to: '/contato',
    icon: 'fa7-solid:contact-book'
  }
]
