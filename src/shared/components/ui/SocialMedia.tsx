import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

const socialMedia = [
	{
		icon: IconBrandInstagram,
		link: "https://www.instagram.com/xakxa01/",
		label: "Instagram profile",
	},
	{
		icon: IconBrandLinkedin,
		link: "https://www.linkedin.com/in/carlosxgb/",
		label: "LinkedIn profile",
	},
	{
		icon: IconBrandGithub,
		link: "https://github.com/xakxa01",
		label: "GitHub profile",
	},
	{
		icon: IconMail,
		link: "mailto:carlosxaviergomezbarriento@gmail.com",
		label: "Send email",
	},
]

const SocialMedia = () => (
	<div className='flex items-center justify-end p-3 space-x-2 md:absolute md:top-0 md:right-0'>
		{socialMedia.map(({ icon: Icon, link, label }) => (
			<a
				href={link}
				target={link.startsWith("mailto:") ? undefined : "_blank"}
				rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
				key={link}
				className='cursor-pointer rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
				aria-label={label}
				title={label}
			>
				<Icon color="white" size={40} aria-hidden />
			</a>
		))}
	</div>
)

export default SocialMedia
