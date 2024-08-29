// import { svg } from '../../assets/svg';
import { svg } from '../../../public/assets';
import '../../styles/card/presentationCard.css'

const title = "developer".toUpperCase().split("");

const PresentationCard = () => (
	<div className='presentationCard__container' name='PresentationCard'>
		<img
			alt="wave"
			draggable={false}
			src={svg.wave}
		/>

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
				/>
			</div>
		</main>
	</div>
)

export default PresentationCard