import { useCallback, useState } from "react";
import { useSprings } from "@react-spring/web";
import { cards } from "@/features/portfolio/components/cards";
import { ANIMATION_CONFIG, RESET_DELAY, from, swipeLeft, swipeRight, to } from "./deckContextHelpers";

const getAvailableCardIndex = (totalCards: number, goneSize: number) => totalCards - goneSize - 1;

export const useDeckStateMachine = () => {
	const [gone] = useState<Set<number>>(() => new Set());
	const [props, api] = useSprings(cards.length, (index: number) => ({
		...to(index, 100),
		from: from(),
	}));
	const [selectedIndex, setSelectedIndex] = useState(cards.length - 1);

	const updateIndex = useCallback((index: number) => setSelectedIndex(index), []);

	const resetDeck = useCallback(() => {
		setTimeout(() => {
			gone.clear();
			api.start((index: number) => to(index));
		}, RESET_DELAY);
	}, [api, gone]);

	const getOneCardAgain = useCallback(() => {
		if (gone.size === 0) return;

		const lastCardIndex = Array.from(gone).pop();
		if (lastCardIndex === undefined) return;

		gone.delete(lastCardIndex);
		api.start((index: number) => (index === lastCardIndex ? to(index) : null));
	}, [api, gone]);

	const swipeCard = useCallback(
		(swipeDirection: () => { x: number; rot: number; scale: number; y: number }) => {
			const availableIndex = getAvailableCardIndex(cards.length, gone.size);

			if (availableIndex < 0) return;

			gone.add(availableIndex);
			api.start((index: number) =>
				index === availableIndex
					? {
							...swipeDirection(),
							config: ANIMATION_CONFIG.SWIPE,
					  }
					: null,
			);

			if (gone.size === cards.length) resetDeck();
		},
		[api, gone, resetDeck],
	);

	const swipeOneCard = useCallback(() => {
		const availableIndex = getAvailableCardIndex(cards.length, gone.size);

		if (availableIndex < 0) return;

		gone.add(availableIndex);
		api.start((index: number) => (index === availableIndex ? from() : null));

		if (gone.size === cards.length) resetDeck();
	}, [api, gone, resetDeck]);

	const swipeCardLeft = useCallback(() => swipeCard(swipeLeft), [swipeCard]);
	const swipeCardRight = useCallback(() => swipeCard(swipeRight), [swipeCard]);

	const moveToIndex = useCallback(
		(index: number) => {
			updateIndex(index);
			gone.clear();

			api.start((cardIndex: number) => {
				if (cardIndex <= index) return to(cardIndex);
				return {
					delay: (cardIndex - index) * 100,
					config: ANIMATION_CONFIG.MOVE,
					onRest: () => api.start(to(cardIndex)),
				};
			});
		},
		[updateIndex, gone, api],
	);

	return {
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
		totalCards: cards.length,
	};
};
