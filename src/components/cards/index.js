import AboutMe from "./AboutMe";
import PresentationCard from "./PresentationCard";
import SkillsTitle from "./SkillsTitle";
import ExperienceTitle from "./ExperienceTitle.jsx";
import Skills from "./Skills.jsx";
import Experiences from "./Experiences.jsx";
import ProjectTitle from "./ProjectTitle.jsx";
import AyudaConcho from "./AyudaConcho.jsx";
import Projects from "./Projects.jsx";

const { skills, SkillComponent } = Skills();
const { experiences, ExperienceComponent } = Experiences();
const { projects, ProjectComponent } = Projects()

const multiComponent = (array, component, namePrefix) => (
	array.map((item, index) => ({
		component: () => component(item),
		name: `${namePrefix}-${index}`
	}))
);

export const findCardIndexByName = (name) => (
	cards.findIndex(card => card.name === name)
)

export const cards = [
	// me
	{ component: PresentationCard, name: 'PresentationCard' },
	{ component: AboutMe, name: 'AboutMe' },

	// experiences
	{ component: ExperienceTitle, name: 'ExperienceTitle' },
	...multiComponent(experiences, ExperienceComponent, 'Experiences'),

	// projects
	{ component: ProjectTitle, name: 'ProjectTitle' },
	{ component: AyudaConcho, name: 'AyudaConcho' },
	...multiComponent(projects, ProjectComponent, 'Projects'),

	// skills
	{ component: SkillsTitle, name: 'SkillsTitle' },
	...multiComponent(skills, SkillComponent, 'Skills'),
].reverse();
