import { svg } from '../../assets';
import '../../styles/card/presentationCard.css'

const title = "developer".toUpperCase().split("");

const PresentationCard = () => (
	<div className='presentationCard__container'>
		<div className='presentationCard__wave' />

		<main className='presentationCard__mainContent'>
			<h1 className='presentationCard__title'>
				{title.map((letter, i) => (
					<span key={i} className='presentationCard__letter' >
						{letter}
					</span>
				))}
			</h1>

			<div className='presentationCard__logo'>
				<img
					src={svg.whiteLogo}
					alt="logo"
					draggable={false}
					loading='lazy'
				/>
			</div>
		</main>
	</div>
)

export default PresentationCard