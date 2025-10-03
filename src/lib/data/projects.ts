export interface Project {
  title: string;
  image: string;
  date: string;
  categories: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Frontier of Hell',
    image: 'assets/images/projects/frontier-of-hell.webp',
    date: '6 October 2023',
    categories: 'Game',
    description: 'Frontier of Hell is a tower defense game that requires players to protect the base from enemy attacks at each stage.',
    url: 'https://github.com/BahramMuzaffarli/Frontier-of-Hell'
  },
  {
    title: 'Kitchen Counts',
    image: 'assets/images/projects/kitchen-counts.webp',
    date: '6 October 2022',
    categories: 'App',
    description: 'Stock management app for kitchen.',
    url: 'https://github.com/BahramMuzaffarli/Kitchen_Counts'
  },
  {
    title: 'Nekoya App',
    image: 'assets/images/projects/nekoya-app.webp',
    date: '30 May 2022',
    categories: 'App',
    description: 'Native application for Nekoya ~',
    url: 'https://github.com/Nekoya-Site/App'
  },
  {
    title: 'Nekoya Web',
    image: 'assets/images/projects/nekoya-web.webp',
    date: '22 November 2021',
    categories: 'Web',
    description: 'Web application for Nekoya ~',
    url: 'https://github.com/Nekoya-Site/Web'
  },
  {
    title: 'Easy Learn',
    image: 'assets/images/projects/easy-learn.webp',
    date: '15 August 2021',
    categories: 'App',
    description: 'Learning app for kids.',
    url: 'https://github.com/Easy-Learn/App'
  },
  {
    title: 'Neonime App',
    image: 'assets/images/projects/neonime-app.webp',
    date: '5 August 2020',
    categories: 'App',
    description:
        'App for streaming & download anime (Indo sub). Build with Flutter :)',
    url: 'https://github.com/BahramMuzaffarli/Neonime-App'
  },
  {
    title: 'Toaru Stickers',
    image: 'assets/images/projects/toaru-stickers.webp',
    date: '13 May 2020',
    categories: 'App',
    description:
        'Toaru Stickers Application for Whatsapp. Build with Flutter :)',
    url: 'https://github.com/BahramMuzaffarli/Toaru-Stickers'
  },
  {
    title: 'Moe API',
    image: 'assets/images/projects/moe-api.webp',
    date: '8 November 2019',
    categories: 'Web',
    description: 'Powerful API with modern features !!!',
    url: 'https://moe.team/'
  },
  {
    title: 'Whois Bot',
    image: 'assets/images/projects/whois.webp',
    date: ' 3 September 2019',
    categories: 'Bot',
    description:
        'Telegram bot that provide Information about domain, ip, and web hosting.',
    url: 'https://t.me/WhoisBot'
  },
  {
    title: 'Nepgear Bot',
    image: 'assets/images/projects/nepgear.webp',
    date: '23 November 2018',
    categories: 'Bot',
    description:
        'Telegram bot that allows you to search for your favorite Anime, Manga, Character with other useful features !!!',
    url: 'https://t.me/NepgearBot'
  }
];