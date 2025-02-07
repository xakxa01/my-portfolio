import "../../styles/card/experiences.css";
import { img } from "../../assets";
import { IconBrandBitbucket, IconBrandFigma, IconBrandFirebase, IconBrandGraphql, IconBrandNextjs, IconBrandReact, IconBrandRedux, IconBrandSass, IconBrandTailwind, IconBrandTypescript, IconBrandWordpress, IconBrandGit, IconProps } from "@tabler/icons-react";
import { FC } from "react";

interface IExperience {
	enterprise: string;
	position: string;
	period: string;
	skills: FC<IconProps>[];
	image: string;
	link: string;
	description: string;
}

const
	frontend = "Frontend Developer",
	reactNative = "React Native Developer";

const experiences = [
	{
		enterprise: "Helpmyteam",
		position: frontend,
		period: "Jun 2022 - Aug 2024",
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandGraphql, IconBrandWordpress, IconBrandGit],
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
		enterprise: "Idoppril",
		position: frontend,
		period: "Sep 2024 - Feb 2025",
		skills: [IconBrandReact, IconBrandTypescript, IconBrandNextjs],
		image: img.yisraelTechnology,
		link: "yisraeltech.com",
		description: "As a React Native Developer at Yisrael Technology, I collaborated on a U.S. medical project, utilizing Git, Figma, and Jira. I focused on performance optimization, implementing new features, and fixing bugs. Additionally, I contributed ideas, code, and solutions to support the team and enhance overall development efficiency.",
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

const ExperienceComponent = (exp: IExperience) => (
	<div className='experiences__container'>
		<div className='experiences__picture'>
			<img
				src={exp.image}
				alt="job"
				draggable={false}
			/>
		</div>

		<div className='experiences__content'>
			<h2 className='experiences__titleEnterprise'>{exp.enterprise}</h2>

			<div className="experiences__topContainer">
				<h3 className='experiences__position'>{exp.position}</h3>
				<p className='capitalize'>{exp.period}</p>
			</div>

			<p className='h-full md:text-sm'>{exp.description}</p>
			<div className="experiences__bottomContainer">
				<ul className='experiences__skills__container'>
					{exp.skills?.map((Skill, i) => (
						<span className='experiences__skill' key={i}>
							<Skill size={30} />
						</span>
					))}
				</ul>
			</div>
		</div>
	</div>
);

const Experiences = () => ({
	experiences,
	ExperienceComponent,
});

export default Experiences;