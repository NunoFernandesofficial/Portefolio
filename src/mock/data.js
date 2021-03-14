import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nuno Fernandes',
  subtitle: 'JS and Kotlin Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'eu.jpg',
  paragraphOne: 'Hello my name is Nuno Fernandes, i am a small programmer who lives in Portugal and i love program',
  paragraphTwo: 'I have 18 years old , and im an informatic enginering studen',
  paragraphThree: 'I strated programming since 2018 , and my interestes is Web/android apps development',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'site.PNG',
    title: 'This was the last project that i did with React(javascript)',
    info: 'This is a just the frontend of the website',
    info2: '',
    url: '',
    repo: 'https://github.com/NunoFernandesofficial/React-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.PNG',
    title: 'This is a basic react todo app',
    info: 'Like i said its a basic todo app list',
    info2: '',
    url: '',
    repo: 'https://github.com/NunoFernandesofficial/React-Todo-App', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
