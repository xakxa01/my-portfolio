import AboutMe from "./AboutMe.tsx";
import PresentationCard from "./PresentationCard.tsx";
import SkillsTitle from "./SkillsTitle.tsx";
import ExperienceTitle from "./ExperienceTitle.tsx";
import Skills from "./Skills";
import Experiences from "./Experiences";
import ProjectTitle from "./ProjectTitle.tsx";
import AyudaConcho from "./AyudaConcho.tsx";
import Projects from "./Projects.tsx";
import { FC } from "react";
import moment from "moment";

const { skills, SkillComponent } = Skills();
const { experiences, ExperienceComponent } = Experiences();
const { projects, ProjectComponent } = Projects()

const sortedExperiences = experiences.sort((a: { period: string }, b: { period: string }) => {
	const getStartDate = (period: string) => {
		const startYear = period.split('-')[0];
		return moment(startYear, 'YYYY');
	};
	
	const aStartDate = getStartDate(a.period);
	const bStartDate = getStartDate(b.period);
	
	return bStartDate.valueOf() - aStartDate.valueOf();
});

const multiComponent = (array: [], component: FC, namePrefix: string) => (
	array.map((item: [], index) => ({
		component: () => component(item),
		name: `${namePrefix}-${index}`
	}))
);

export const findCardIndexByName = (name: string) => (
	cards.findIndex(card => card.name === name)
)

export const cards = [
	// me
	{ component: PresentationCard, name: 'PresentationCard' },
	{ component: AboutMe, name: 'AboutMe' },

	// experiences
	{ component: ExperienceTitle, name: 'ExperienceTitle' },
	...multiComponent(sortedExperiences as [], ExperienceComponent as FC, 'Experiences'),

	// projects
	{ component: ProjectTitle, name: 'ProjectTitle' },
	{ component: AyudaConcho, name: 'AyudaConcho' },
	...multiComponent(projects as [], ProjectComponent as FC, 'Projects'),

	// skills
	{ component: SkillsTitle, name: 'SkillsTitle' },
	...multiComponent(skills as [], SkillComponent as FC, 'Skills'),
].reverse();
