import { img, svg } from "../../../assets";
import { IconBrandBitbucket, IconBrandFigma, IconBrandFirebase, IconBrandGraphql, IconBrandNextjs, IconBrandReact, IconBrandRedux, IconBrandSass, IconBrandTailwind, IconBrandTypescript, IconBrandWordpress, IconBrandGit, IconBrandMysql } from "@tabler/icons-react";
const { Strapi, MaterialUI } = svg;

const
	frontend = "Frontend Developer",
	reactNative = "React Native Developer";

export const experiences = [
	{
		enterprise: "Thundercodes",
		position: `Senior ${frontend}`,
		period: "Jan 2024 – Mar 2025",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandGit, IconBrandRedux, IconBrandTypescript],
		image: img.thundercoders,
		link: "thundercoders.com",
		description: "At ThunderCoders, I onboarded over 5 new developers, which reduced ramp-up time by streamlining the integration process. I improved website performance by 40% by refactoring legacy code, compressing assets, and implementing lazy loading. I also standardized workflows and authored documentation that increased team efficiency across departments.",
	},
	{
		enterprise: "Helpmyteam",
		position: frontend,
		period: "Mar 2019 – May 2021",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandGraphql, IconBrandWordpress, IconBrandGit, Strapi],
		image: img.helpMyTeam,
		link: "helpmyteam.com",
		description: "At HelpMyTeam, I restructured the frontend architecture, which improved request form performance by 65%. I developed internal tools such as a modular form builder that sped up feature delivery. I also enhanced the mobile experience through responsive design improvements, which increased mobile traffic and reduced bounce rates.",
	},
	{
		enterprise: "Yisrael Technology",
		position: reactNative,
		period: "Jul 2022 – Jul 2023",
		skills: [IconBrandReact, IconBrandTypescript, IconBrandGit, IconBrandFigma, IconBrandBitbucket],
		image: img.yisraelTechnology,
		link: "yisraeltech.com",
		description: "At Yisrael Technology, I contributed to a U.S. healthcare app by optimizing mobile workflows, which improved the patient experience. I maintained and refactored internal libraries to reduce technical debt and increase code reusability. I also delivered a social networking app for event coordination, which enhanced user engagement through intuitive UI design.",
	},
	{
		enterprise: "Dofus Caribbean",
		position: frontend,
		period: "Sep 2023 – Dec 2023",
		skills: [IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandGit, IconBrandMysql, MaterialUI],
		image: img.dofuCaribbean,
		link: "dofu.com.do",
		description: "At Dofu Caribbean, I built a real-time email processing system in Python that improved message handling efficiency by 60%. I developed a task management dashboard used by over 150 employees, enabling real-time issue resolution. I also optimized backend logic and implemented advanced Excel export features to support over 8,000 weekly emails without performance loss.",
	},
	{
		enterprise: "Idoppril",
		position: frontend,
		period: "Oct 2021 – May 2022",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTypescript, MaterialUI],
		image: img.idoppril,
		description: "While working with IDOPPRIL, I designed and deployed a secure JWT-based authentication system that strengthened login protection. I built a responsive admin dashboard that streamlined user and data management workflows. I also implemented adaptive pagination logic based on API responses to improve system scalability and responsiveness.",
	},
	{
		enterprise: "NisakaComics",
		position: frontend,
		period: "Aug 2021 – Sep 2021",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandFirebase, IconBrandGit],
		image: img.nisakaComics,
		link: "nisakacomics.com",
		description: "At NisakaComics, I integrated the PayPal payment gateway, which reduced cart abandonment and improved transaction security. I collaborated on backend enhancements that decreased load times and improved server stability. I also launched a dynamic admin dashboard that simplified content management and boosted operational efficiency.",
	},
	{
		enterprise: "Melanie Tatis",
		position: frontend,
		period: "Jan 2019 – Feb 2019",
		skills: [IconBrandReact, IconBrandSass, IconBrandRedux, IconBrandGit],
		image: img.melanieTatis,
		link: "https://melanietaties.vercel.app/",
		description: "For this project, I deployed a custom email system that streamlined portfolio inquiries and improved professional communication. I optimized the layout and responsiveness for mobile devices, which increased cross-platform engagement. I also built an intuitive dashboard that simplified content uploads and management.",
	},
];