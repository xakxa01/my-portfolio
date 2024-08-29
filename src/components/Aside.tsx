import { useDeckContext } from "../hook/useDeckContext"
import { findCardIndexByName } from "./cards";
import '../styles/aside.css'

const Aside = () => {
	const { moveToIndex } = useDeckContext()

	const navigateTo = (name: string) => {
		const indexFounded = findCardIndexByName(name)
		moveToIndex(indexFounded)
	}

	const options = [
		{
			value: 'home',
			event: () => navigateTo('PresentationCard'),
		},
		{
			value: 'skills',
			event: () => navigateTo('SkillsTitle'),
		},
		{
			value: 'experience',
			event: () => navigateTo('ExperienceTitle')
		},
		{
			value: 'projects',
			event: () => navigateTo('ProjectTitle'),
		}
	]

	return (
		<div className="aside__container">
			<ul className='aside__list'>
				{options.map(({ value, event }, i) => (
					<li
						key={i}
						onClick={event}
						className='aside__item'>
						{value}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Aside