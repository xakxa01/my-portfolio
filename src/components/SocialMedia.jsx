import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

const socialMedia = [
	{
		icon: IconBrandLinkedin,
		link: "http://www.linkedin.com/in/carlosxaviergb",
	},
	{
		icon: IconBrandGithub,
		link: "https://github.com/xakxa01",
	},
	{
		icon: IconMail,
		link: "mailto:carlosxaviergomezbarriento@gmail.com",
	}
]

const SocialMedia = () => (
	<div className='flex items-center justify-end p-3 space-x-2 md:absolute md:top-0 md:right-0'>
		{socialMedia.map(({ icon: Icon, link }) => (
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer" key={link}
				className='cursor-pointer'>
				<Icon color="white" size={40} />
			</a>
		))}
	</div>
)

export default SocialMedia