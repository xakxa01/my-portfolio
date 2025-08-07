import '@/styles/components/skills.css'
import { IconProps } from "@tabler/icons-react";
import { FC } from "react";

const SkillComponent = (array: []) => (
	<div className='skills__container'>
		<div className='skills__containerIcons'>
			{array.map((Skill: FC<IconProps>, i) => (
				<span className='skills__icon' key={i}>
					<Skill size={100} />
				</span>
			))}
		</div>
	</div>
)

export default SkillComponent;