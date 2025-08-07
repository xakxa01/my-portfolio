import { createContext } from 'react'
import { useState, useCallback } from 'react'
import { useSprings } from '@react-spring/web'
import { cards } from '@/features/portfolio/components/cards'
import { IDeckContext, TChildren } from '@/shared/types'

const deckContext = createContext({} as IDeckContext)

const ANIMATION_CONFIG = {
	SWIPE: { tension: 150, friction: 50 },
	MOVE: { tension: 500, friction: 60 }
}

const RESET_DELAY = 600

const to = (i: number, delay?: number) => ({
	x: 0,
	y: 0,
	scale: 1,
	rot: -2 + Math.random() * 5,
	delay: i * delay!,
})

const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -10000 })

const swipeLeft = () => ({ x: -2000, rot: -30, scale: 0.8, y: 0 })
const swipeRight = () => ({ x: 2000, rot: 30, scale: 0.8, y: 0 })

export const DeckProvider = ({ children }: TChildren) => {
	const [gone] = useState(new Set())
	const [props, api] = useSprings(cards.length, i => ({
		...to(i, 100),
		from: from()
	}))
	const [selectedIndex, setSelectedIndex] = useState(cards.length - 1)

	const updateIndex = useCallback((index: number) => setSelectedIndex(index), [])

	const getOneCardAgain = useCallback(() => {
		if (gone.size > 0) {
			const lastCardIndex = Array.from(gone).pop()
			gone.delete(lastCardIndex)
			api.start(i => (i === lastCardIndex ? to(i) : null))
		}
	}, [gone, api])

	const swipeCard = useCallback((swipeDirection: () => { x: number; rot: number; scale: number; y: number }) => {
		const availableIndex = cards.length - gone.size - 1

		if (availableIndex >= 0) {
			gone.add(availableIndex)
			api.start(i => (i === availableIndex ? {
				...swipeDirection(),
				config: ANIMATION_CONFIG.SWIPE
			} : null))

			if (gone.size === cards.length) {
				setTimeout(() => {
					gone.clear()
					api.start(i => to(i))
				}, RESET_DELAY)
			}
		}
	}, [gone, api])

	const swipeOneCard = useCallback(() => {
		const availableIndex = cards.length - gone.size - 1

		if (availableIndex >= 0) {
			gone.add(availableIndex)
			api.start(i => (i === availableIndex ? from() : null))

			if (gone.size === cards.length) {
				setTimeout(() => {
					gone.clear()
					api.start(i => to(i))
				}, RESET_DELAY)
			}
		}
	}, [gone, api])

	const swipeCardLeft = useCallback(() => swipeCard(swipeLeft), [swipeCard])
	const swipeCardRight = useCallback(() => swipeCard(swipeRight), [swipeCard])

	const moveToIndex = useCallback((index: number) => {
		updateIndex(index)
		gone.clear()

		api.start(i => {
			if (i <= index) return to(i)
			else return {
				delay: (i - index) * 100,
				config: ANIMATION_CONFIG.MOVE,
				onRest: () => api.start(to(i)),
			}
		})
	}, [updateIndex, gone, api])

	const value = {
		api,
		gone,
		to,
		props,
		getOneCardAgain,
		swipeOneCard,
		swipeCardLeft,
		swipeCardRight,
		selectedIndex,
		moveToIndex,
		updateIndex,
		totalCards: cards.length
	}

	return (
		<deckContext.Provider value={value as unknown as IDeckContext}>
			{children}
		</deckContext.Provider>
	)
}

export default deckContext
