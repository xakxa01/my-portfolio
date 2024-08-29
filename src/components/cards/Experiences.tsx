import "../../styles/card/experiences.css";
import { img, svg } from "../../assets";
import { IExperience } from "../../../type";
const { nextjs, react, tailwind, graphql, wordpress, sass, redux, firebase } = svg

const experiences = [
	{
		enterprise: "Helpmyteam",
		position: "Front-end Developer",
		period: "Jun 2022 - Aug 2024",
		skills: [nextjs, react, tailwind, graphql, wordpress],
		image: img.helpMyTeam,
		link: "helpmyteam.com",
		description: "In my role at HelpMyTeam, I focused on refactoring, code optimization, and improving the interface. A key achievement was developing a real-time button update system, which enabled immediate changes without needing to restart the server. Additionally, I optimized data request handling, significantly boosting performance. Beyond this, I also contributed to several other key improvements that enhanced overall efficiency and user experience.",
	},
	{
		enterprise: "NisakaComics",
		position: "Front-end Developer",
		period: "Nov 2021 - Jan 2023",
		skills: [nextjs, react, firebase],
		image: img.nisakaComics,
		link: "nisakacomics.com",
		description: "I designed, developed, and optimized the website to enhance user experience and performance. A key achievement was creating and managing the database for efficient data handling. I also developed a responsive mobile interface, integrated a secure payment system, and collaborated on front-end and backend integration for seamless functionality. Beyond these, I contributed to additional improvements that further refined the project.",
	},
	{
		enterprise: "Melanie Tatis",
		position: "Front-end Developer",
		period: "May 2022 – May 2022",
		skills: [react, sass, redux],
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
					{exp.skills?.map((skill, i) => (
						<embed
							key={i}
							src={skill}
							className='experiences__skill'
						/>
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