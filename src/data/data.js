import Api from '../assets/Api.mp4'
import Ai from '../assets/Ai.mp4'
import Web from '../assets/Web.mp4'
import { FaWallet } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'
import { CiRainbow } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
import { TbAuth2Fa } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";

// team
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { LuCombine } from "react-icons/lu";


// Ai 
import { RiMessage2Line } from "react-icons/ri";


export const btnHeadersData = ['products', 'pricing', 'solution', 'capabillitates']
export const featers = ['soloution', 'capatitates', 'pricing', 'all feathers']


export const dataCards = [

  {
    id: 1,
    title: 'Web Developing',
    text: ` for veb developing what is exactly matter in this way ! , 
    is the intresst anad pations and absolut no giving Up
    `
  },
  {
    id: 2,
    title: 'Ai Generation',
    text: `Ai is one of the most biggest chalenge for all of those who are Senjor and even 
    Junior Coder or Vibe Coder, take your time and push your self
    `
  }
  , {
    id: 3,
    title: 'Api Services',
    text: `Application Programm Interface is the real name of it and it is the most important thin in the developing`,
  }
]

export const videos = [
  {
    id: 1,
    src: Web,
  },
  {
    id: 2,
    src: Ai,
  }, {
    id: 3,
    src: Api,
  },
]

export const cards = [

  {
    id: 1,
    icon: FaWallet,
    title: 'Web Security',
    text: `Protecting user data is at the core of every modern web application. 
    Strong authentication, secure APIs, and proper access control help prevent
    unauthorized access and data breaches. We build with security in mind at every layer`,
    btn: 'see Web feathers'
  },
  {
    id: 2,
    icon: CiRainbow,
    title: 'Ai Integration',
    text: `Turn your existing presentations, videos, or documents into a full course.
     Get modules and quizzes in minutes or turn recorded workflows into interactive 
     simulations. The courses come out grounded in what actually makes people learn.`
    , btn: 'see Ai integration feathers'
  }
  ,
  {
    id: 3,
    icon: MdWeb,
    title: 'Web Experience',
    text: `A portal that feels like an app your team actually wants to open. Branded to your company,
     available in multiple languages, with content organized so people find what they need.,`
    , btn: 'see Web experience feathers'
  },
  {
    id: 4,
    icon: TbAuth2Fa,
    title: 'Authorization',
    text: `this is the most way to get safty webseit at the moment as first step to security . 
    building the web seit by its cover it today the most important thing`,
    btn: 'see Web Authorizathions feathers'
  },
  {
    id: 5,
    icon: AiOutlineApi,
    title: 'Api integration',
    text: `one of the most way to get the ompereson way to connecting with whole sestem 
    in the browser asmuch you can in the secon at browser`,
    btn: 'see Web Api feathers'

  },
  {
    id: 6,
    icon: BsStars,
    title: 'Analytics',
    text: `Track who completed what, where quiz scores dropped, and which content needs sharpening.`,
    btn: 'see Web Analytices feathers'
  }
]

export const teamInfo = [

  {
    id: 1,
    icon: RiTeamLine,
    title: 'Team lead',
    text: 'if you have experience to this matter than you can join your self to us that we grow toghter'
  }
  ,
  {
    id: 2,
    icon: AiOutlineTeam,
    title: 'Personal',
    text: 'we are all from diffrence culture and countries to get a family and if you looking for a same place than huury up'
  },
  {

    id: 3,
    icon: FaRegLightbulb,
    title: 'Digital Transformation',
    text: 'You’re rolling out a new system. Training always comes six months too late. Now you embed it in the rollout'

  },
  {
    id: 4,
    icon: LuCombine,
    title: 'Computer Sinces',
    text: 'Scale your team’s reach without becoming the permanent bottleneck. Domain experts build. You govern, deploy, and prove impact.'
  }

]

///----------------Footer-Data------------

export const footerData = [
  // {},
  {
    id: 1,
    title: "Product",
    links: [
      { id: 1, label: "Overview", path: "/product/overview" },
      { id: 2, label: "Features", path: "/product/features" },
      { id: 3, label: "Integrations", path: "/product/integrations" },
      { id: 4, label: "Automation", path: "/product/automation" },
      { id: 5, label: "Analytics", path: "/product/analytics" },
      { id: 6, label: "Security", path: "/product/security" },

    ],
  },

  {
    id: 2,
    title: "Solutions",
    links: [
      { id: 1, label: "Sales", path: "/solutions/sales" },
      { id: 2, label: "Marketing", path: "/solutions/marketing" },
      { id: 3, label: "Customer Service", path: "/solutions/customer-service" },
      { id: 5, label: "Finance", path: "/solutions/finance" },
      { id: 6, label: "IT", path: "/solutions/it" },
      { id: 7, label: "E-Commerce", path: "/solutions/ecommerce" },
      { id: 8, label: "Startups", path: "/solutions/startups" },

    ],
  },

  {
    id: 3,
    title: "Company",
    links: [
      { id: 1, label: "About", path: "/company/about" },
      { id: 2, label: "Careers", path: "/company/careers" },
      { id: 3, label: "Leadership", path: "/company/leadership" },
      { id: 5, label: "Partners", path: "/company/partners" },
      { id: 6, label: "Investors", path: "/company/investors" },

    ],
  },

  {
    id: 4,
    title: "About Us",
    links: [
      { id: 1, label: "Our Story", path: "/about/our-story" },
      { id: 2, label: "Our Mission", path: "/about/mission" },
      { id: 4, label: "Our Team", path: "/about/team" },
      { id: 5, label: "Values", path: "/about/values" },
      { id: 7, label: "Blog", path: "/about/blog" },
      { id: 9, label: "Help Center", path: "/about/help" },
      { id: 10, label: "Support", path: "/about/support" },

    ],
  },
];



// Ai information 

export const aiOptions = [

  {
    id: 1,
    icon: RiMessage2Line,
    title: 'Web Service',
  },
  {
    id: 2
    , icon: RiMessage2Line,
    title: 'Pricing Information',
  },
  {
    id: 3,
    icon: RiMessage2Line,
    title: 'Contact details',
  },
  {
    id: 4,
    icon: RiMessage2Line,
    title: 'Create Website'
  },
  {
    id: 5,
    icon: RiMessage2Line,
    title: 'Technical support'
  }

]