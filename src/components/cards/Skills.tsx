import { IconBrandAstro, IconBrandAws, IconBrandBootstrap, IconBrandCss3, IconBrandFigma, IconBrandFirebase, IconBrandGit, IconBrandGithub, IconBrandGraphql, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandRedux, IconBrandSass, IconBrandSwift, IconBrandTailwind, IconBrandTypescript, IconProps } from "@tabler/icons-react";
import { cutArray } from "../../lib/cutArray";
import { svg } from "../../assets";
import "../../styles/card/skills.css";
import { FC } from "react";

const { Express, Java, Strapi } = svg

const skills = [IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandTypescript, IconBrandNodejs, IconBrandPython, Java, IconBrandSwift, IconBrandReact, IconBrandNextjs, Express, IconBrandRedux, IconBrandReactNative, IconBrandAstro, IconBrandTailwind, IconBrandBootstrap, IconBrandAws, IconBrandFirebase, IconBrandGraphql, IconBrandSass, IconBrandFigma, IconBrandGit, IconBrandGithub, IconBrandMongodb, Strapi]

const groupArray = cutArray(skills, 5);

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

const Skills = () => ({
	skills: groupArray,
	SkillComponent,
});

export default Skills;