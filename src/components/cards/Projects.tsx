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

const { react, tailwind, nextjs, express, typescript, javascript, html } = svg

const projects = [
	{
		title: 'ReactCraft',
		image: img.reactCraft,
		description: 'I developed a minimalist version of Minecraft using React, Tailwind, and Three.js. The project features movement, flying, and block placement functionalities, offering a streamlined yet engaging experience.',
		skills: [react, tailwind],
		link: 'https://reactcraft.vercel.app/',
		github: 'https://github.com/xakxa01/reactcraft'
	},
	{
		title: 'San Valentine',
		image: img.sanValentine,
		description: 'I created a personalized Valentine’s Day card for my girlfriend using Next.js and Tailwind. This project functions as a virtual printer, generating a card that reveals a heartfelt message inside.',
		skills: [nextjs, react, tailwind],
		link: 'https://san-valentine-project.vercel.app/',
		github: 'https://github.com/xakxa01/san-valentine-project'
	},
	{
		title: 'auth jwt with express',
		image: img.authCode,
		description: 'I developed a REST API with authentication using Express and implemented protected routes to ensure secure access.',
		skills: [express, typescript],
		github: 'https://github.com/xakxa01/auth-with-jwt-db-local-in-express'
	},
	{
		title: 'slide',
		image: img.slide,
		description: 'This slide was part of my presentation on Fast Learning in Software Development at the Gentleman Programming community. It was designed to help participants quickly learn the concepts needed to develop a Twitter clone',
		skills: [javascript, html],
		github: 'https://github.com/xakxa01/auth-with-jwt-db-local-in-express'
	},
	{
		title: 'stripe project',
		image: img.stripe,
		description: 'This is a Stripe integration project I worked on to practice implementing the payment tool for my role at HelpMyTeam. Ultimately, I successfully integrated this payment method into our service plans.',
		skills: [nextjs, typescript],
		link: 'https://stripe-suscription-pw4fo5vdk-xakxa01s-projects.vercel.app/',
		github: 'https://github.com/xakxa01/auth-with-jwt-db-local-in-express'
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