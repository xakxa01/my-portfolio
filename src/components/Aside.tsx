import { useDeckContext } from "../hook/useDeckContext"
import { findCardIndexByName } from "./cards";
import '../styles/aside.css'
import { useCallback, useMemo } from 'react';

const Aside = () => {
	const { moveToIndex } = useDeckContext()

	const navigateTo = useCallback((name: string) => {
		const indexFounded = findCardIndexByName(name)
		moveToIndex(indexFounded)
	}, [moveToIndex])

	const options = useMemo(() => [
		{
			value: 'home',
			event: () => navigateTo('PresentationCard'),
		},
		{
			value: 'experience',
			event: () => navigateTo('ExperienceTitle')
		},
		{
			value: 'projects',
			event: () => navigateTo('ProjectTitle'),
		},
		{
			value: 'skills',
			event: () => navigateTo('SkillsTitle'),
		},
	], [navigateTo])

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