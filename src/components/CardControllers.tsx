import { IconRestore } from "@tabler/icons-react"
import { useDeckContext } from "../hook/useDeckContext"
import { useEffect } from "react"
import { IconSpace } from '@tabler/icons-react';
import '../styles/cardController.css'

const CardControllers = () => {
	const { getOneCardAgain } = useDeckContext()

	const keybinds = ({ key }: {key: string}) => key === " " && getOneCardAgain();

	useEffect(() => {
		window.addEventListener("keydown", keybinds);

		return () => window.removeEventListener("keydown", keybinds);
	}, [keybinds])

	return (
		<div className='cardController__container'>
			<button
				onClick={getOneCardAgain}
				className='cardController__btnGetCardAgain'>
				<IconRestore size={40} color="white" />
			</button>

			<h1 className='cardController__explain'>
				You can press
				<span onClick={getOneCardAgain} className='cardController__spaceBar'>
					<IconSpace size={30} className='mr-1' />
					space
				</span>
				to bring the cards back again.
			</h1>
		</div>
	)
}

export default CardControllers