import type { ContactItem, SocialItem } from '@/types'

const phoneNumber: string = '557721013300'
const message: string = 'Olá, estou entrando em contato através do site da Unitel.'

const contacts: ContactItem[] = [
  {
    title: 'Telefone',
    description: '+55 (77) 2101-3300',
    icon: 'fa7-solid:phone',
    to: 'tel:+557721013300',
    image: {
      path: '/uniteltelecom/images/telefone',
      width: 363,
      height: 206
    },
    orientation: 'horizontal'
  },
  {
    title: 'Atendimento Geral',
    description: 'atendimento@uniteltelecom.com.br',
    icon: 'fa7-solid:envelope',
    to: 'mailto:atendimento@uniteltelecom.com.br',
    image: {
      path: '/uniteltelecom/images/atendimento',
      width: 363,
      height: 203
    },
    orientation: 'horizontal'
  },
  {
    title: 'WhatsApp',
    description: 'Atendimento rápido pelo WhatsApp',
    icon: 'fa7-brands:whatsapp',
    to: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    image: {
      path: '/uniteltelecom/images/whatsapp',
      width: 117,
      height: 130
    },
    orientation: 'horizontal'
  },
  {
    title: 'Departamento comercial',
    description: 'comercial@uniteltelecom.com.br',
    icon: 'fa7-solid:envelope',
    to: 'mailto:comercial@uniteltelecom.com.br',
    image: {
      path: '/uniteltelecom/images/comercial',
      width: 363,
      height: 170
    },
    orientation: 'horizontal'
  },
]

const socials: SocialItem[] = [
  {
    name: 'Instagram',
    icon: 'lucide:instagram',
    href: 'https://www.instagram.com/uniteltelecom_/',
    customClasses: 'border-pink-500 text-pink-500 hover:bg-linear-to-r hover:from-pink-400 hover:to-yellow-400 hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    href: 'https://www.linkedin.com/company/uniteltelecomvca',
    customClasses: 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
  },
  {
    name: 'X (Twitter)',
    icon: 'fa7-brands:x-twitter',
    href: 'https://x.com',
    customClasses: 'border-black text-black dark:text-white hover:bg-black hover:text-white'
  },
]

export { contacts, socials }