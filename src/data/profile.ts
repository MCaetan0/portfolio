import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Marcelo Caetano de Lima',
  role: {
    pt: 'Desenvolvedor Full-Stack',
    en: 'Software Engineer | Full-Stack',
  },
  location: {
    pt: 'Osasco, SP, Brasil',
    en: 'Osasco, SP, Brazil',
  },
  email: 'marceloc.lima349@gmail.com',
  github: 'https://github.com/MCaetan0',
  linkedin: 'https://www.linkedin.com/in/marcelo-caetano-4100a5199/',
  summary: {
    pt: 'Engenheiro de software, bacharel em Ciência da Computação, com experiência em todo o ciclo de vida do software: design, desenvolvimento, deploy e operação em produção. Construo APIs RESTful escaláveis, automações backend e serviços distribuídos com mensageria, pipelines de CI/CD e infraestrutura em nuvem (GCP). Trabalho com Python, C# (.NET), TypeScript, React e SQL, com boa base em estruturas de dados, algoritmos e resolução de problemas.',
    en: 'Software engineer with a B.Sc. in Computer Science and experience across the full software lifecycle: design, development, deploy, and production operations. I build scalable RESTful APIs, backend automations, and distributed services with messaging, CI/CD pipelines, and cloud infrastructure (GCP). I work with Python, C# (.NET), TypeScript, React, and SQL, with a solid foundation in data structures, algorithms, and problem solving.',
  },
  education: [
    {
      degree: {
        pt: 'Bacharelado em Ciência da Computação',
        en: 'B.Sc. in Computer Science',
      },
      institution: 'Universidade Paulista (UNIP)',
      period: '2020 – 2024',
    },
    {
      degree: {
        pt: 'Técnico em Informática',
        en: 'Technical Degree in IT',
      },
      institution: 'ETEC',
      period: '2017 – 2019',
    },
  ],
  languages: [
    { pt: 'Português (nativo)', en: 'Portuguese (native)' },
    { pt: 'Inglês (intermediário)', en: 'English (intermediate)' },
    { pt: 'Espanhol (intermediário)', en: 'Spanish (intermediate)' },
  ],
  resumePt: '/resume-pt.pdf',
  resumeEn: '/resume-en.pdf',
}
