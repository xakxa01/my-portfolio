import { SpringRef, SpringValue } from "@react-spring/web";
import { IconProps } from "@tabler/icons-react";
import { FC, JSX, ReactNode } from "react";

export type TChildren = {
	children: ReactNode;
};

export type TSkillIcon = FC<IconProps>;

export type TDeckSpring = {
	x: number;
	y: number;
	rot: number;
	scale: number;
	delay?: number;
};

export interface ICardProps {
	x: SpringValue<number>;
	y: SpringValue<number>;
	rot: SpringValue<number>;
	scale: SpringValue<number>;
}

export interface IDeckContext {
	api: SpringRef<TDeckSpring>;
	gone: Set<number>;
	to: (i: number, delay?: number) => TDeckSpring;
	props: ICardProps[];
	getOneCardAgain: VoidFunction;
	swipeOneCard: VoidFunction;
	swipeCardLeft: VoidFunction;
	swipeCardRight: VoidFunction;
	selectedIndex: number;
	moveToIndex: (index: number) => void;
	updateIndex: (index: number) => void;
	totalCards: number;
}

export interface IProject {
	title: string;
	image: string;
	description: string;
	skills: TSkillIcon[];
	link?: string;
	github?: string;
}

export interface IExperience {
	enterprise: string;
	position: string;
	period: string;
	skills: TSkillIcon[];
	image: string;
	link?: string;
	description: string;
}

export interface IDeckCard {
	component: () => JSX.Element;
	name: string;
}
