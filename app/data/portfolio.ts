import type { Portfolio } from '~/types'
import { baseURL } from './_'

const portfolios: Portfolio[] = [
  {
    title: 'Projeto de interligação dos laboratórios Labo',
    description: 'No final ano de 2013, a Unitel iniciou um projeto para interligação de uma das maiores redes de laboratórios médicos de Vitória da Conquista: Laboratórios Oliveira (LABO). O planejamento foi adequado à necessidade de maior eficiência de comunicação entre as filiais. A inteligação foi feita com uso de telefonia IP facilitando a comunicação de mais de 20 pontos de coleta localizados em Vitória da Conquista e região. O uso dessa tecnologia foi imprescindível já que a aquisição de plataformas de comunicação digital IP tornaria o projeto inviável.',
    id: 'features',
    orientation: 'horizontal',
    features: [
      {
        name: 'Telefonia IP',
        description: 'Interligação da telefonia analógica, digital e IP em todos os pontos garantindo a transferência de ligaçóes entre pontos com facilidade.',
        icon: 'lucide:circle-check-big'
      },
      {
        name: 'Agilidade nos serviços',
        description: 'Garantia de agilidade no atendimento e entrega do resultado de exames com maior velocidade ao cliente.',
        icon: 'lucide:circle-check-big'
      }
    ],
    image: `${baseURL}images/portfolio/projeto-interligacao-labo.avif`
  },
  {
    title: 'Projeto de fusão Lojas Maia / Magazine Luiza',
    description: 'Com a fusão das Lojas Maia com o grupo Magazine Luiza, foi elaborado um megaprojeto de interligação entre as diversas plataformas de comunicação Siemens em todo o Brasil. As lojas que não possuiam as plataformas precisaram se adequar a um novo padrão de comunicação interna e externa. Para facilitar a comunicação nacional, as lojas adotaram um número de atendimento único distribuído por diversas filiais no Brasil. A Unitel foi responsável por toda interligação do sudoeste da Bahia e algumas cidades na região de Jequié. Mais uma vez, a tecnologia IP favoreceu a execução desse projeto que foi conccluído com sucesso em 2013.',
    orientation: 'horizontal',
    features: [
      {
        name: 'Lojas',
        description: '14 pontos de venda com interligação completa pelo estado da Bahia.',
        icon: 'lucide:circle-check-big'
      },
      {
        name: 'Telefonia IP',
        description: 'Telefonia IP testada com 100% de conectividade e redundância de rede para garantir qualidade nas ligações.',
        icon: 'lucide:circle-check-big'
      },
      {
        name: 'Autenticação estabelecida',
        description: 'Níveis de acesso por tipo de usuário implementados em cada loja para garantir a segurança e hierarquia na comunicação.',
        icon: 'lucide:circle-check-big'
      }
    ],
    image: `${baseURL}images/portfolio/lojas-maia-magazine-luiza.avif`
  }
]

export { portfolios }