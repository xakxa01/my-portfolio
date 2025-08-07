import { useEffect, useCallback } from "react"
import { useDeckContext } from "./useDeckContext"

export const useDeckKeyboardControls = () => {
	const {
		getOneCardAgain,
		moveToIndex,
		totalCards,
		swipeCardLeft,
		swipeCardRight
	} = useDeckContext()

	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		const keyActions = {
			" ": () => {
				event.preventDefault();
				getOneCardAgain();
			},
			"ArrowLeft": () => {
				event.preventDefault();
				swipeCardLeft();
			},
			"ArrowRight": () => {
				event.preventDefault();
				swipeCardRight();
			},
			"Home": () => {
				event.preventDefault();
				moveToIndex(0);
			},
			"End": () => {
				event.preventDefault();
				moveToIndex(totalCards - 1);
			}
		};

		const action = keyActions[event.key as keyof typeof keyActions];
		if (action) action();
	}, [getOneCardAgain, moveToIndex, totalCards, swipeCardLeft, swipeCardRight]);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);
}
