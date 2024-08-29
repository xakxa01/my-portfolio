import { img } from '../../assets'
import '../../styles/card/ayudaConcho.css'

const { playStoreBtn, appStoreBtn, ayudaConcho } = img

const buttons = [
	{
		img: playStoreBtn,
		link: 'https://play.google.com/store/apps/details?id=com.ayudaconcho.app'
	},
	{
		img: appStoreBtn,
		link: 'https://apps.apple.com/au/app/ayuda-concho/id6504540040?uo=2'
	}
]

const AyudaConcho = () => (
	<div className='ayudaConcho__container group'>
		<div className='ayudaConcho__info__container'>
			<div className='ayudaConcho__title__container'>
				<img
					draggable={false}
					src={ayudaConcho}
					alt="logo" />
				<h2>Ayuda Concho</h2>
			</div>


			<p className='ayudaConcho__description'>
				¡Basta de pagar transportes más caros por no encontrar el concho indicado! <br /> <br />
				La primera app de conchos en República Dominicana. ¡Viaja de manera fácil y conveniente con nuestra aplicación de conchos! Obtén acceso rápido y seguro a una amplia red de conchos, el medio de transporte más popular en la ciudad.
			</p>

			<div className='ayudaConcho__buttons'>
				{buttons.map(({ img, link }) => (
					<a href={link} target='_blank' rel='noopener noreferrer' key={link}>
						<img
							draggable={false}
							src={img}
							alt='store' />
					</a>
				))}
			</div>
		</div>
	</div >
)


export default AyudaConcho