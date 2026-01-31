import type { Feature } from '~/types'

const features: Feature = {
  title: 'Soluções inteligentes em telecomunicações para empresas que não podem parar',
  description: 'A Unitel ajuda sua empresa a reduzir falhas na comunicação, evitar interrupções operacionais, ter controle e rastreabilidade no atendimento, atender exigências legais e institucionais, além de proteger a reputação da marca',
  items: [
    {
      title: 'ComuniQ',
      description: 'Plataforma de comunicação corporativa da Unitel, desenvolvida para integrar telefonia, atendimento, mobilidade e gestão em um único ambiente inteligente, seguro e escalável.',
      icon: 'unitel:comuniq'
    },
    {
      title: 'Telefonia Corporativa',
      description: 'Ideal para empresas que querem modernizar atendimento interno e externo. Reduz custos de telefonia física. Integra com CRM e mobilidade.',
      icon: 'lucide:phone-call'
    },
    {
      title: 'Atendimento automatizado',
      description: 'A URA inteligente reduz tempo de espera e direciona ligações com precisão. Suporte à jornada do cliente.',
      icon: 'lucide:speech'
    },
    {
      title: 'Call Center',
      description: 'Utilizamos plataformas modernas e de alto desempenho para garantir estabilidade, escalabilidade e integração eficiente, atendendo desde operações de call center até empresas e instituições de diversos portes e segmentos.',
      icon: 'lucide:headset'
    },
    {
      title: 'Infraestrutura e Redes Estruturadas',
      description: 'Projetos feitos sob medida com foco em desempenho e segurança. Cuidados com a certificação dos pontos de rede.',
      icon: 'lucide:audio-lines'
    },
    {
      title: 'Ouvidoria',
      description: 'A ouvidoria é um canal institucional estratégico que promove a escuta qualificada, fortalece a transparência e contribui para a melhoria contínua dos serviços, assegurando o diálogo ético e respeitoso entre a organização e seus públicos.',
      icon: 'lucide:network'
    }
  ]
}

export { features }