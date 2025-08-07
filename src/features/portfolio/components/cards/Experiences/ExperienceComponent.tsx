import '@/styles/components/experiences.css'
import type { IExperience } from "@/shared/types";

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

export default ExperienceComponent;