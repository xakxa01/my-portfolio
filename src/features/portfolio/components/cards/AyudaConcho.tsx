import { img } from '@/assets'
import '@/styles/components/ayudaConcho.css'

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
					alt="Ayuda Concho logo"
					loading='lazy'
					decoding='async'
				/>
				<h2>Ayuda Concho</h2>
			</div>


			<p className='ayudaConcho__description'>
				Stop paying more for transportation just because you can't find the right concho! <br /> <br />
				The first concho app in the Dominican Republic. Travel easily and conveniently with our concho application! Get quick and safe access to a wide network of conchos, the most popular means of transportation in the city.
			</p>

			<div className='ayudaConcho__buttons'>
				{buttons.map(({ img, link }) => (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						key={link}
						aria-label='Download Ayuda Concho app'
					>
						<img
							draggable={false}
							src={img}
							alt='Store download button'
							loading='lazy'
							decoding='async'
						/>
					</a>
				))}
			</div>
		</div>
	</div >
)


export default AyudaConcho
