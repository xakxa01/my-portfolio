import { cutArray } from "@/shared/utils/cutArray";
import SkillComponent from "./SkillComponent";
import { skills } from '@/features/portfolio/data/skillList'

const groupArray = cutArray(skills, 4);

const Skills = () => ({
	skills: groupArray,
	SkillComponent,
});

export default Skills;