import { useState, useCallback } from 'react'
import { useSprings } from '@react-spring/web'
import { cards } from '@/features/portfolio/components/cards'
import { IDeckContext, TChildren } from '@/shared/types'
import { deckContext, ANIMATION_CONFIG, RESET_DELAY, to, from, swipeLeft, swipeRight } from './deckContextHelpers'

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

// eslint-disable-next-line react-refresh/only-export-components
export default deckContext
