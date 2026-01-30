import type { Testimonial } from '~/types'

const testimonials: Testimonial = {
  title: 'Não acredite apenas na nossa palavra. Acredite na deles!',
  description: 'Veja o que nossos cliente falam sobre a Unitel',
  items: [
    {
      quote: 'Escolher a Unitel Telecom foi um diferencial estratégico, graças à qualidade dos serviços, suporte especializado e compromisso constante com a performance e a satisfação dos clientes.',
      user: {
        name: 'Silvana Carvalho dos Reis',
        description: 'Diretora executiva',
        target: '_blank',
        avatar: {
          src: '/uniteltelecom/images/testimonials/testimonial-1.avif'
        }
      }
    },
    {
      quote: 'Com a Unitel Telecom, nossa empresa alcançou mais eficiência operacional, internet estável e um atendimento comercial que entende o negócio e entrega soluções sob medida.',
      user: {
        name: 'Tarcísio Moreira',
        description: 'Líder de desenvolvimento',
        target: '_blank',
        avatar: {
          src: '/uniteltelecom/images/testimonials/testimonial-2.avif'
        }
      }
    },
    {
      quote: 'Com a Unitel Telecom, ganhamos segurança operacional, excelente desempenho de rede e um parceiro confiável, sempre disponível para apoiar o crescimento da empresa.',
      user: {
        name: 'Mateus Casanova',
        description: 'CEO das Indústrias FLANCO',
        target: '_blank',
        avatar: {
          src: '/uniteltelecom/images/testimonials/testimonial-3.avif'
        }
      }
    }
  ]
}

export { testimonials }