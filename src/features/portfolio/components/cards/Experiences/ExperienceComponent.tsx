import '@/styles/components/experiences.css'
import type { IExperience } from "@/shared/types";

const ExperienceComponent = (exp: IExperience) => (
	<div className='experiences__container'>
		<div className='experiences__picture'>
			<img
				src={exp.image}
				alt={`${exp.enterprise} logo`}
				draggable={false}
				loading='lazy'
				decoding='async'
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
				<ul className='experiences__skills__container' aria-label='Experience technologies'>
					{exp.skills?.map((Skill, i) => (
						<li className='experiences__skill' key={`experience-skill-${exp.enterprise}-${i}`}>
							<Skill size={30} aria-hidden />
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);

export default ExperienceComponent;
