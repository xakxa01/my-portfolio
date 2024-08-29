import { createContext, createElement } from 'react'
import { useState } from 'react'
import { useSprings } from '@react-spring/web'
import { cards } from '../components/cards'
import {IDeckContext, TChildren} from '../../type.d'

const deckContext = createContext({} as IDeckContext)

const to = (i: number, delay?: number) => ({
	x: 0,
	y: 0,
	scale: 1,
	rot: -2 + Math.random() * 5,
	delay: i * delay!,
})

const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -10000 })

export const DeckProvider = ({ children }: TChildren) => {
	const [gone] = useState(new Set())
	const [props, api] = useSprings(cards.length, i => ({
		...to(i, 100),
		from: from()
	}))
	const [selectedIndex, setSelectedIndex] = useState(cards.length - 1)

	const updateIndex = (index: number) => setSelectedIndex(index)

	const getOneCardAgain = () => {
		if (gone.size > 0) {
			const lastCardIndex = Array.from(gone).pop()
			gone.delete(lastCardIndex)
			api.start(i => (i === lastCardIndex ? to(i) : null))
		}
	}

	// const swipeOneCard = () => {
	// 	const availableIndex = cards.length - gone.size - 1

	// 	if (availableIndex >= 0) {
	// 		gone.add(availableIndex)
	// 		api.start(i => (i === availableIndex ? from(i) : null))

	// 		if (gone.size === cards.length) {
	// 			setTimeout(() => {
	// 				gone.clear()
	// 				api.start(i => to(i))
	// 			}, 600)
	// 		}
	// 	}
	// }

	const moveToIndex = (index: number) => {
		updateIndex(index)
		gone.clear()

		api.start(i => {
			if (i <= index) return to(i)
			else return {
				// ...from(i),
				delay: (i - index) * 100,
				config: { tension: 500, friction: 60 },
				onRest: () => api.start(to(i)),
			}

		})
	}

	const value = {
		api,
		gone,
		to,
		props,
		getOneCardAgain,
		// swipeOneCard,
		selectedIndex,
		moveToIndex,
		updateIndex
	}

	return createElement(deckContext.Provider, { value }, children)
}

export default deckContext;
