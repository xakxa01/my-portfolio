import { SpringRef, SpringValues } from "@react-spring/web";
import { ReactNode } from "react"
import { State } from "react-use-gesture/dist/types";

export type TChildren = {
	children: ReactNode
}
export interface IDeckContext {
	api: SpringRef<State>,
	gone: Set<unknown>,
	to: (i: number, delay?: number) => {
		x: number;
		y: number;
		scale: number;
		rot: number;
		delay: number;
	},
	props: SpringValues<State>[],
	getOneCardAgain: VoidFunction,
	swipeOneCard: VoidFunction,
	swipeCardLeft: VoidFunction,
	swipeCardRight: VoidFunction,
	selectedIndex: number,
	moveToIndex: (index: number) => void,
	updateIndex: (index: number) => void,
	totalCards: number
}