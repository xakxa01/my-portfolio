import { IconBrandFigma, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconLink, IconProps } from "@tabler/icons-react"
import { img } from "../../assets"
import '../../styles/card/projects.css'
import { FC } from "react";
import Express from "../../assets/svg/Express";

interface IProject {
	title: string;
	image: string;
	description: string;
	skills: FC<IconProps>[];
	link: string;
	github: string;
}

const { reactCraft, sanValentine, authCode, slide, chess } = img

const projects = [
	{
		title: 'ReactCraft',
		image: reactCraft,
		description: 'I developed a minimalist version of Minecraft using React, Tailwind, and Three.js. The project features movement, flying, and block placement functionalities, offering a streamlined yet engaging experience.',
		skills: [IconBrandReact, IconBrandTailwind],
		link: 'https://reactcraft.vercel.app/',
		github: 'https://github.com/xakxa01/reactcraft'
	},
	{
		title: 'San Valentine',
		image: sanValentine,
		description: 'I created a personalized Valentine’s Day card for my girlfriend using Next.js and Tailwind. This project functions as a virtual printer, generating a card that reveals a heartfelt message inside.',
		skills: [IconBrandNextjs, IconBrandReact, IconBrandTailwind],
		link: 'https://san-valentine-project.vercel.app/',
		github: 'https://github.com/xakxa01/san-valentine-project'
	},
	{
		title: 'auth jwt with express',
		image: authCode,
		description: 'I developed a REST API with authentication using Express and implemented protected routes to ensure secure access.',
		skills: [Express, IconBrandTypescript],
		github: 'https://github.com/xakxa01/auth-with-jwt-db-local-in-express'
	},
	{
		title: 'slide',
		image: slide,
		description: 'This slide was part of my presentation on Fast Learning in Software Development at the Gentleman Programming community. It was designed to help participants quickly learn the concepts needed to develop a Twitter clone',
		skills: [IconBrandJavascript, IconBrandHtml5],
		github: 'https://github.com/xakxa01/diapositiva-con-reveal.js'
	},
	{
		title: 'Rework Chess website',
		image: chess,
		description: 'This is a design project created using Figma for a website redesign competition. Over the course of one month, I developed the design. My efforts were recognized, and I was ranked among the top five finalists in the competition.',
		skills: [IconBrandFigma],
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
					{pro.skills?.map((Skill, i) => (
						<span className='projects__skill' key={i}>
							<Skill size={30} />
						</span>
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