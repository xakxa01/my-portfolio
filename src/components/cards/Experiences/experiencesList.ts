import { img, svg } from "../../../assets";
import { IconBrandBitbucket, IconBrandFigma, IconBrandFirebase, IconBrandGraphql, IconBrandNextjs, IconBrandReact, IconBrandRedux, IconBrandSass, IconBrandTailwind, IconBrandTypescript, IconBrandWordpress, IconBrandGit, IconBrandMysql } from "@tabler/icons-react";
const { Strapi, MaterialUI } = svg;

const
	frontend = "Frontend Developer",
	reactNative = "React Native Developer";

export const experiences = [
	{
		enterprise: "Helpmyteam",
		position: frontend,
		period: "Jun 2022 - Aug 2024",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandGraphql, IconBrandWordpress, IconBrandGit, Strapi],
		image: img.helpMyTeam,
		link: "helpmyteam.com",
		description: "In my role at HelpMyTeam, I focused on refactoring, code optimization, and improving the interface. A key achievement was developing a real-time button update system, which enabled immediate changes without needing to restart the server. Additionally, I optimized data request handling, significantly boosting performance. Beyond this, I also contributed to several other key improvements that enhanced overall efficiency and user experience.",
	},
	{
		enterprise: "Yisrael Technology",
		position: reactNative,
		period: "Sep 2024 - Feb 2025",
		skills: [IconBrandReact, IconBrandTypescript, IconBrandGit, IconBrandFigma, IconBrandBitbucket],
		image: img.yisraelTechnology,
		link: "yisraeltech.com",
		description: "As a React Native Developer at Yisrael Technology, I collaborated on a U.S. medical project, utilizing Git, Figma, and Jira. I focused on performance optimization, implementing new features, and fixing bugs. Additionally, I contributed ideas, code, and solutions to support the team and enhance overall development efficiency.",
	},
	{
		enterprise: "Dofus Caribbean",
		position: frontend,
		period: "Jan 2025 - Feb 2025",
		skills: [IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandGit, IconBrandMysql, MaterialUI],
		image: img.dofuCaribbean,
		link: "dofu.com.do",
		description: "I worked on this project as a freelancer, developing and implementing a dashboard, a login system, and a user registration form with role management. The project includes full CRUD functionality, an analytics section with Excel export, and a script for extracting emails for private matters, focusing primarily on system optimization.",
	},
	{
		enterprise: "Idoppril",
		position: frontend,
		period: "Nov 2024 - Nov 2024",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTypescript, MaterialUI],
		image: img.idoppril,
		description: "I worked on this project as a freelancer, where I developed and implemented a dashboard, a login system, and a registration system. Each feature includes its respective validations, and the dashboard incorporates full CRUD functionality.",
	},
	{
		enterprise: "NisakaComics",
		position: frontend,
		period: "Nov 2021 - Jan 2023",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandFirebase, IconBrandGit],
		image: img.nisakaComics,
		link: "nisakacomics.com",
		description: "I designed, developed, and optimized the website to enhance user experience and performance. A key achievement was creating and managing the database for efficient data handling. I also developed a responsive mobile interface, integrated a secure payment system, and collaborated on front-end and backend integration for seamless functionality. Beyond these, I contributed to additional improvements that further refined the project.",
	},
	{
		enterprise: "Melanie Tatis",
		position: frontend,
		period: "May 2022 – May 2022",
		skills: [IconBrandReact, IconBrandSass, IconBrandRedux, IconBrandGit],
		image: img.melanieTatis,
		link: "https://melanietaties.vercel.app/",
		description: "Led the design of the website, focusing on elevating its visual appeal and optimizing the user experience. Crafted intuitive interfaces that engage users effectively while ensuring a seamless interaction. Additionally, developed a mobile-friendly interface that provides a responsive and user-centric experience on various devices, enhancing accessibility and consistency across platforms.",
	},
];