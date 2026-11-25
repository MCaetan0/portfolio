import type { WorkPrinciple } from '../types'

export const principles: WorkPrinciple[] = [
  {
    id: 'contract-first',
    title: {
      pt: 'Começo pelo contrato',
      en: 'Contract first',
    },
    body: {
      pt: 'Antes de escrever código, leio a documentação da plataforma que vou integrar e desenho a API. O contrato fica documentado em Swagger desde o início, então quem consome não depende de mim para entender.',
      en: "Before writing code, I read the docs of the platform I'm integrating and design the API. The contract is documented in Swagger from day one, so consumers don't depend on me to understand it.",
    },
    tags: ['api', 'dotnet', 'backend'],
  },
  {
    id: 'end-to-end',
    title: {
      pt: 'Entrego de ponta a ponta',
      en: 'End to end',
    },
    body: {
      pt: 'Cada entrega passa pelo mesmo caminho: Git flow, testes automatizados, Docker e deploy automático com GitHub Actions até a VM em produção. Se não está no ar, não está pronto.',
      en: "Every delivery follows the same path: Git flow, automated tests, Docker, and automated deploys with GitHub Actions to the production VM. If it's not live, it's not done.",
    },
    tags: ['cicd', 'docker', 'gcp', 'backend'],
  },
  {
    id: 'close-to-users',
    title: {
      pt: 'Perto de quem usa',
      en: 'Close to the people who use it',
    },
    body: {
      pt: 'Meu dia a dia é com as áreas de negócio, principalmente marketing e vendas. Ajusto fluxos de leads, corrijo integrações e, quando o problema é volume, resolvo com automações em Python em vez de trabalho manual.',
      en: 'I work daily with business teams, mostly marketing and sales. I adjust lead flows, fix integrations, and when the problem is volume, I solve it with Python automations instead of manual work.',
    },
    tags: ['python', 'automation', 'api'],
  },
  {
    id: 'build-when-it-pays',
    title: {
      pt: 'Construir quando faz sentido',
      en: 'Build when it pays off',
    },
    body: {
      pt: 'Olho para custo como requisito. Reestruturei dados no BigQuery para cortar mais da metade dos custos e desenvolvi sistemas internos (RH, DRE) que substituíram assinaturas de plataformas pagas.',
      en: 'I treat cost as a requirement. I restructured BigQuery data to cut costs by more than half and built internal systems (HR, P&L) that replaced paid platform subscriptions.',
    },
    tags: ['bigquery', 'data', 'backend', 'dotnet'],
  },
]
