import { svg } from "../../assets";
import { cutArray } from "../../lib/cutArray";
import "../../styles/card/skills.css";

const { wave, whiteLogo, ...restIcons } = svg;

const skills = Object.values(restIcons)

const groupArray = cutArray(skills, 4);

const SkillComponent = (array: []) => (
	<div className='skills__container'>
		<div className='skills__containerIcons'>
			{array.map((skill, i) => (
				<img
					key={i}
					src={skill}
					alt="skill"
					className='skills__icon'
					draggable={false}
				/>
			))}
		</div>
	</div>
)

const Skills = () => ({
	skills: groupArray,
	SkillComponent,
});

export default Skills;