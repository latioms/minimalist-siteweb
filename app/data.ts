type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo: string
  missions: string[]
  description: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type ClientWebsite = {
  name: string
  client: string
  description: string
  link: string
  image: string
  year: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'ReachDem',
    description:
      'Powerful platform for sending messages. Helping businesses to communicate effectively with their customers.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/dsg874b6x/video/upload/v1751025219/ReachDem-tour_nf70xo.mp4',
    id: 'project1',
  },
  {
    name: 'Hublots',
    description: 'Une plateforme de services a la personne. Le but est de mettre en relation les prestataires de services et les clients.',
    link: 'https://lemon-sky-08fa4b50f.5.azurestaticapps.net/',
    video:
      'https://res.cloudinary.com/dsg874b6x/video/upload/v1751023912/Screen_Recording_2025-06-27_110348_omeiee.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Global Maths Club',
    title: 'Bénévole DevOps Engineer',
    start: 'Nov 2023',
    end: 'May 2025',
    link: 'https://gmathsclub.com',
    id: 'work1',
    logo: 'https://gmathsclub.com/logo-gmc.svg',
    description: 'Organisation à but non lucratif dédiée à la promotion des mathématiques et de l\'informatique auprès des jeunes.',
    missions: [
      'Mise en place et maintenance de l\'infrastructure cloud (AWS/Azure)',
      'Automatisation des processus de déploiement avec CI/CD',
      'Devellopement de la plateforme web et du CRM',
      'Formation des équipes aux bonnes pratiques DevOps',
      'Optimisation des performances et monitoring des applications'
    ]
  },
  {
    company: 'Hublots',
    title: 'CTO & Co-Founder',
    start: '2024',
    end: '2025',
    link: 'https://lemon-sky-08fa4b50f.5.azurestaticapps.net/',
    id: 'work3',
    logo: 'https://lemon-sky-08fa4b50f.5.azurestaticapps.net/logo.svg',
    description: 'Plateforme de services à la personne connectant prestataires et clients pour diverses prestations du quotidien.',
    missions: [
      'Direction technique et stratégie technologique de l\'entreprise',
      'Architecture et développement de la plateforme web (React, Node.js)',
      'Gestion d\'équipe technique et recrutement développeurs',
      'Mise en place des processus qualité et sécurité',
      'Interface avec les investisseurs et présentation de la roadmap technique',
      'Développement de l\'API et intégration des services tiers'
    ]
  },
  {
    company: 'Freelance',
    title: 'Web Designer & Software Engineer',
    start: '2022',
    end: 'Present',
    link: 'https://latioms.co',
    id: 'work2',
    logo: 'https://latioms.co/favicon.ico',
    description: 'Services de développement web et design pour clients variés, de la startup à l\'entreprise établie.',
    missions: [
      'Développement d\'applications web modernes (React, Next.js, TypeScript)',
      'Conception UX/UI et prototypage d\'interfaces utilisateur',
      'Développement d\'APIs REST et GraphQL (Node.js, Python)',
      'Intégration de solutions e-commerce et systèmes de paiement',
      'Consulting technique et audit de performance',
      'Formation et accompagnement des équipes clientes',
      'Maintenance et évolution d\'applications existantes'
    ]
  },
]

export const CLIENT_WEBSITES: ClientWebsite[] = [
  {
    name: 'Bantu Vibes',
    client: 'Bantu Vibes',
    description: 'Site web pour restaurant de cuisine africaine authentique à Houston, spécialisé dans la cuisine nigériane et camerounaise avec système de réservation en ligne.',
    link: 'https://bantuvibes.restaurant',
    image: '/bantuvibes.png',
    year: '2024',
    id: 'client-1'
  },
  {
    name: 'LoweJo Shop',
    client: 'LoweJo',
    description: 'Boutique e-commerce de luxe spécialisée dans les chaussures italiennes, maroquinerie et parfums haut de gamme avec collections curées.',
    link: 'https://lowejo.com',
    image: '/lowejo-shop.png',
    year: '2024',
    id: 'client-2'
  },
  {
    name: 'Makala Mboa e.V.',
    client: 'Makala Mboa e.V.',
    description: 'Site web pour association culturelle africaine en Allemagne promouvant l\'inclusion digitale pour les personnes autistes et organisant des événements culturels.',
    link: 'https://makala.mboa-ev.de',
    image: '/makala.png',
    year: '2024',
    id: 'client-3'
  },
  {
    name: 'LN-FOOT',
    client: 'LN-FOOT | LN-Shop',
    description: 'CRM pou une agence de magasin sportive dediee au football.',
    link: 'https://ln-foot.',
    image: '/luvnation.png',
    year: '2025',
    id: 'client-3'
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Coming Soon...',
    description: 'Exciting content is on the way! Stay tuned for insights on tech, development, and more.',
    link: '#',
    uid: 'blog-coming-soon',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/latioms',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/lbelrick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/belrick-stephane',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/latiomsan',
  },
]

export const EMAIL = 'belrick@latioms.co'
