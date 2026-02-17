import '@/styles/components/skills.css'
import { TSkillIcon } from "@/shared/types";

const SkillComponent = (array: TSkillIcon[]) => (
	<div className='skills__container'>
		<div className='skills__containerIcons'>
			{array.map((Skill, i) => (
				<span className='skills__icon' key={`skill-${i}`}>
					<Skill size={100} />
				</span>
			))}
		</div>
	</div>
)

export default SkillComponent;
