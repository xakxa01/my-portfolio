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
						<IconArrowLeft size={25} />
					</button>
					<button className="key-btn px-6" onClick={getOneCardAgain}>
						<IconSpace size={25} />
					</button>
					<button className="key-btn" onClick={swipeCardRight}>
						<IconArrowRight size={25} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CardControllers