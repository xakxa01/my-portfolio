import AboutMe from "./AboutMe.tsx";
import PresentationCard from "./PresentationCard.tsx";
import SkillsTitle from "./SkillsTitle.tsx";
import ExperienceTitle from "./ExperienceTitle.tsx";
import Skills from "./Skills";
import Experiences from "./Experiences";
import ProjectTitle from "./ProjectTitle.tsx";
import AyudaConcho from "./AyudaConcho.tsx";
import Projects from "./Projects.tsx";
import { JSX } from "react";
import moment from "moment";
import { IDeckCard, IExperience } from "@/shared/types";

const { skills, SkillComponent } = Skills();
const { experiences, ExperienceComponent } = Experiences();
const { projects, ProjectComponent } = Projects()

const sortedExperiences = [...experiences].sort((a: IExperience, b: IExperience) => {
	const getStartDate = (period: string) => {
		const startYear = period.split('-')[0];
		return moment(startYear, 'YYYY');
	};
	
	const aStartDate = getStartDate(a.period);
	const bStartDate = getStartDate(b.period);
	
	return bStartDate.valueOf() - aStartDate.valueOf();
});

const multiComponent = <T,>(array: T[], component: (value: T) => JSX.Element, namePrefix: string): IDeckCard[] => (
	array.map((item, index) => ({
		component: () => component(item),
		name: `${namePrefix}-${index}`
	}))
);

export const findCardIndexByName = (name: string) => (
	cards.findIndex(card => card.name === name)
)

export const cards: IDeckCard[] = [
	// me
	{ component: PresentationCard, name: 'PresentationCard' },
	{ component: AboutMe, name: 'AboutMe' },

	// experiences
	{ component: ExperienceTitle, name: 'ExperienceTitle' },
	...multiComponent(sortedExperiences, ExperienceComponent, 'Experiences'),

	// projects
	{ component: ProjectTitle, name: 'ProjectTitle' },
	{ component: AyudaConcho, name: 'AyudaConcho' },
	...multiComponent(projects, ProjectComponent, 'Projects'),

	// skills
	{ component: SkillsTitle, name: 'SkillsTitle' },
	...multiComponent(skills, SkillComponent, 'Skills'),
].reverse();
