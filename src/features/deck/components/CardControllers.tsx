import { IconArrowLeft, IconArrowRight, IconSpace } from "@tabler/icons-react"
import { useDeckContext } from "@/features/deck/hooks/useDeckContext"
import '@/styles/components/cardController.css'

const CardControllers = () => {
	const { getOneCardAgain, swipeCardLeft, swipeCardRight } = useDeckContext()

	return (
		<div className='cardController__container'>
			<div className="key-control-panel">
				<div className="key-title">Reverse</div>
				<div className="key-buttons">
					<button className="key-btn" onClick={swipeCardLeft}>
						<IconArrowLeft size={20} />
					</button>
					<button className="key-btn px-5" onClick={getOneCardAgain}>
						<IconSpace size={20} />
					</button>
					<button className="key-btn" onClick={swipeCardRight}>
						<IconArrowRight size={20} />
					</button>
				</div>
				<div className="key-title">With keyboard is faster</div>
			</div>
		</div>
	)
}

export default CardControllers