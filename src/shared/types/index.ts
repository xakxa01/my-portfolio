import { SpringRef } from "@react-spring/web";
import { IconProps } from "@tabler/icons-react";
import { ReactNode, FC } from "react"
import { State } from "react-use-gesture/dist/types";

export type TChildren = {
	children: ReactNode
}

export interface ICardProps {
	x: number;
	y: number;
	rot: number;
	scale: number;
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
	props: ICardProps[],
	getOneCardAgain: VoidFunction,
	swipeOneCard: VoidFunction,
	swipeCardLeft: VoidFunction,
	swipeCardRight: VoidFunction,
	selectedIndex: number,
	moveToIndex: (index: number) => void,
	updateIndex: (index: number) => void,
	totalCards: number
}

export interface IProject {
	title: string;
	image: string;
	description: string;
	skills: FC<IconProps>[];
	link?: string;
	github?: string;
}

export interface IExperience {
	enterprise: string;
	position: string;
	period: string;
	skills: FC<IconProps>[];
	image: string;
	link: string;
	description: string;
}
