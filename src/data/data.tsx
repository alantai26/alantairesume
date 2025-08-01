import {AcademicCapIcon, CalendarIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alan Tai' + '\'s' + ' Resume',
  description: "Projects, resume, and contact information for Alan Tai",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alan Tai`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an aspiring <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently a student at{' '}
        <strong className="text-stone-100">Northeastern University</strong> as a Computer Science Major, Economics
        minor.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Lifting Weights</strong>, playing{' '}
        <strong className="text-stone-100">Valorant</strong>, or exploring different{' '}
        <strong className="text-stone-100">Restauraunts</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My name is Alan Tai, and I am currently a second-year student at Northeastern University pursuing a major in Computer Science with a minor in Economics. I am particularly interested in specializing in Software Engineering, as I am fascinated by the process of designing efficient and scalable software systems. I am eager to expand my knowledge in these areas through both rigorous coursework and practical experiences, such as co-op opportunities and projects. 

Please feel free to contact me at talan4030@gmail.com for any inquiries or collaboration opportunities.`,
  aboutItems: [
    {label: 'Location', text: 'New Jersey or Boston, MA', Icon: MapIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Lifting, Eating, Playing Valorant', Icon: SparklesIcon},
    {label: 'Study', text: 'Northeastern University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Cantonese',
        level: 6.5,
      },
      {
        name: 'Mandarin',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GYMBROAI',
    description: 'A web app that assists users with their workout form and gives real time feedback using AI voice.',
    url: 'https://youtu.be/N7-vfCMKyMo?si=qW98lBnJ4ixdCBXG',
    image: '/images/asdasd.png',
    width: 1200, // <-- Add width
    height: 900, // <-- Add height
  },
  {
    title: 'NUGuessr',
    description: 'NUGuessr won Beginner Award at HackBeanPot 2025! Click hear to learn more.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7294796933263458304/',
    image: '/images/resume1.jpg',
    width: 1200, // <-- Add width
    height: 900, // <-- Add height
  },
  {
    title: 'PostureMAXX',
    description: 'PostureMAXX won third place at ViTAL' + "'s" + ' First Hackathon EVER! Click hear to learn more.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7312631674532446208/',
    image: '/images/posturemaxx.png',
    width: 1200, // <-- Add width
    height: 900, // <-- Add height
  },
  {
    title: 'ADHDList',
    description: 'ADHDList is a personal project to help users manage their daily tasks and routines.',
    url: '',
    image: '/images/ADHDLIST.png',
    width: 1200, // <-- Add width
    height: 900, // <-- Add height
  },
  {
    title: 'WaterMinder',
    description: 'A simple web app that tailors a schedule for the user to drink water based on their preferences.',
    url: 'https://alantai26.github.io/watereminder1/',
    image: '/images/icon.png',
    width: 1200, // <-- Add width
    height: 900, // <-- Add height
  },
  
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me if you have any questions, want to collaborate, or just want to say hi!',
  items: [
    {
      type: ContactType.Email,
      text: 'talan4030@gmail.com',
      href: 'mailto:talan4030@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boston, Massachusetts',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@alantai26',
      href: 'https://www.instagram.com/alantai26/',
    },
    {
      type: ContactType.Github,
      text: 'alantai26',
      href: 'https://github.com/alantai26',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/alantai26'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alantaineu/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alantai26/'},
];
