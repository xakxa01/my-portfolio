import { IconBrandGithub, IconLink } from "@tabler/icons-react"
import { img, svg } from "../../assets"
import '../../styles/card/projects.css'

interface IProject {
    title: string;
    image: string;
    description: string;
    skills: string[];
    link: string;
    github: string;
}

const { figma ,react, tailwind, nextjs, express, typescript, javascript, html } = svg
const {reactCraft, sanValentine, authCode, slide, chess} = img

const projects = [
	{
		title: 'ReactCraft',
		image: reactCraft,
		description: 'I developed a minimalist version of Minecraft using React, Tailwind, and Three.js. The project features movement, flying, and block placement functionalities, offering a streamlined yet engaging experience.',
		skills: [react, tailwind],
		link: 'https://reactcraft.vercel.app/',
		github: 'https://github.com/xakxa01/reactcraft'
	},
	{
		title: 'San Valentine',
		image: sanValentine,
		description: 'I created a personalized Valentine’s Day card for my girlfriend using Next.js and Tailwind. This project functions as a virtual printer, generating a card that reveals a heartfelt message inside.',
		skills: [nextjs, react, tailwind],
		link: 'https://san-valentine-project.vercel.app/',
		github: 'https://github.com/xakxa01/san-valentine-project'
	},
	{
		title: 'auth jwt with express',
		image: authCode,
		description: 'I developed a REST API with authentication using Express and implemented protected routes to ensure secure access.',
		skills: [express, typescript],
		github: 'https://github.com/xakxa01/auth-with-jwt-db-local-in-express'
	},
	{
		title: 'slide',
		image: slide,
		description: 'This slide was part of my presentation on Fast Learning in Software Development at the Gentleman Programming community. It was designed to help participants quickly learn the concepts needed to develop a Twitter clone',
		skills: [javascript, html],
		github: 'https://github.com/xakxa01/auth-with-jwt-db-local-in-express'
	},
	{
		title: 'Rework Chess website',
		image: chess,
		description: 'This is a comprehensive design project created using Figma for a website redesign competition. Over the course of one month, I meticulously developed and refined the design, ensuring it met both aesthetic and functional requirements. My efforts were recognized, and I was ranked among the top five finalists in the competition.',
		skills: [figma],
		link: 'https://www.figma.com/design/AKPojKWeNOTA2K8kzoCXwi/chess.com?node-id=0-1&t=I6WLtJFqdDPdAyPo-1',
	},
]

const ProjectComponent = (pro: IProject) => (
	<div className='projects__container'>
		<div className='projects__picture'>
			<img
				alt="job"
				src={pro.image}
				draggable={false}
			/>
		</div>

		<div className='projects__content'>
			<h2 className='projects__title'>{pro.title}</h2>

			<p className='projects__description'>{pro.description}</p>

			<div className="projects__bottomContainer">
				<ul className='projects__skills__container'>
					{pro.skills?.map((skill, i) => (
						<embed
							key={i}
							src={skill}
							className='projects__skill'
						/>
					))}
				</ul>

				<div className='projects__buttons__container'>
					{pro.github &&
						<a href={pro.github} className='projects__githubBtn'>
							<IconBrandGithub size={30} color='white' />
							<span>watch code</span>
						</a>
					}

					{pro.link &&
						<a href={pro.link} className='projects__visitBtn'>
							<IconLink size={30} color='white' />
							<span>visit website</span>
						</a>
					}
				</div>

			</div>
		</div>
	</div>
)

const Projects = () => ({
	projects,
	ProjectComponent,
});

export default Projects