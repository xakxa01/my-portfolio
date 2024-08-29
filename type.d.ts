import { SpringRef } from "@react-spring/web";
import { ReactNode } from "react"

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
	getOneCardAgain: () => void,
	selectedIndex: number,
	moveToIndex: (index: number) => void,
	updateIndex: (index: number) => void
}