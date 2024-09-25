import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  scheduleImage1,
  scheduleImage2,
  scheduleImage3,
  scheduleImage4,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  PartnerLogo1,
  PartnerLogo2,
  PartnerLogo3,
  PartnerLogo4
} from "../assets";

import yourLogo1 from "../assets/clients/your-logo-1.svg"
import yourLogo2 from "../assets/clients/your-logo-2.svg"
import yourLogo3 from "../assets/clients/your-logo-3.svg"
import yourLogo4 from "../assets/clients/your-logo-4.png"
import yourLogo5 from "../assets/clients/your-logo-5.svg"

export const navigation = [
  {
    id: "0",
    title: "Trainings",
    url: "#trainings",
  },
  {
    id: "2",
    title: "Why Us",
    url: "#why-us",
  },
  {
    id: "3",
    title: "Our Team",
    url: "#our-team",
  },
  {
    id: "4",
    title: "Schedule",
    url: "#schedule",
  },
  {
    id: "5",
    title: "Partners",
    url: "#partners",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Contact Us",
    url: "#contact-us",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourLogo1, yourLogo2, yourLogo3, yourLogo4, yourLogo5];
export const partnersLogos = [PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4]

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Cisco CCNA",
    text: "Prepare for a successful career in networking with Cisco CCNA training, covering essential skills in routing, switching, and network security.",
    date: "Jan 25 2024",
    status: "done",
    imageUrl: scheduleImage1,
    colorful: true,
  },
  {
    id: "1",
    title: "Microsoft Azure Administrator Associate",
    text: "Build your expertise in cloud management with Microsoft Azure Administrator Associate training, focusing on deploying, managing, and securing Azure environments.",
    date: "Sep 30 2024",
    status: "progress",
    imageUrl: scheduleImage2,
  },
  {
    id: "2",
    title: "Ms Power BI Data Analyst Associate",
    text: "Enhance your data analysis skills with Microsoft Power BI Data Analyst Associate training, empowering you to visualize and transform data for impactful business insights.",
    date: "Oct 13 2024",
    status: "progress",
    imageUrl: scheduleImage3,
  },
  {
    id: "3",
    title: "Power Platform App Maker Associate",
    text: "Unleash your creativity with Power Platform App Maker Associate training, enabling you to build custom business applications without needing extensive coding experience.",
    date: "Jan 15 2025",
    status: "progress",
    imageUrl: scheduleImage4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Years of Experince",
  },
  {
    id: "1",
    title: "Fully Equipped Environment",
  },
  {
    id: "2",
    title: "Tailored & Quality Trainings",
  },
  {
    id: "3",
    title: "Certified Trainers",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Microsoft Courses",
    text: "Enhance your skills with comprehensive Microsoft training courses designed to boost your expertise in cutting-edge technologies.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,

  },
  {
    id: "1",
    title: "Oracle Courses",
    text: "Unlock the power of enterprise technology with Oracle training, designed to help you master database management and cloud solutions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
  },
  {
    id: "2",
    title: "Comp TIA Courses",
    text: "Gain essential IT skills with CompTIA courses, covering everything from networking to cybersecurity certifications.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "EC-Council",
    text: "Advance your cybersecurity expertise with EC-Council courses, specializing in ethical hacking, penetration testing, and information security certifications.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
  },
  {
    id: "4",
    title: "Red Hat Courses",
    text: "Become proficient in open-source technologies with Red Hat courses, focused on Linux administration and advanced system solutions.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
  },
  {
    id: "5",
    title: "Programming Courses",
    text: "Sharpen your coding skills with programming courses, offering in-depth knowledge in popular languages like Python, Java, and more.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
