import { cutArray } from "@/lib/cutArray";
import SkillComponent from "./SkillComponent";
import { skills } from "./skillList";

const groupArray = cutArray(skills, 4);

const Skills = () => ({
	skills: groupArray,
	SkillComponent,
});

export default Skills;