import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Marcelo Caetano de Lima',
  role: {
    pt: 'Engenheiro de Software Backend · .NET & Python',
    en: 'Backend Software Engineer · .NET & Python',
  },
  location: {
    pt: 'Osasco, SP, Brasil',
    en: 'Osasco, SP, Brazil',
  },
  email: 'marceloc.lima349@gmail.com',
  github: 'https://github.com/MCaetan0',
  linkedin: 'https://www.linkedin.com/in/marcelo-caetano-4100a5199/',
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
