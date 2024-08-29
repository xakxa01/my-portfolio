import { img } from '../../../public/assets'
import '../../styles/card/aboutMe.css'

const AboutMe = () => (
	<div className='aboutMe__container'>
		<img
			alt="me"
			draggable={false}
			src={img.myPhoto}
			className='rounded-b-2xl md:h-3/6 md:w-full'
		/>

		<div className='aboutMe__description'>
			<h2 className='aboutMe__title'>software developer</h2>
			<p className='aboutMe__text'>
				<span>
					👋 Hi! I&apos;m Xavier, I learned how to program on my own, thanks to
					official documentations, YouTube content, and some online courses on
					Platzi.
				</span>

				<span>
					💪 Thanks to YouTube, I was able to dedicate 100% of my time to
					learning how to program developing my skills in both front-end and
					back-end (more front-end than back-end), and gaining experience in the
					world of UX and UI.
				</span>
			</p>

			<div className='aboutMe__languages__container'>
				<div className='aboutMe__languages'>
					<p>
						<strong>english:</strong>
						intermediate
					</p>
					<p>
						<strong>spanish:</strong>
						native language
					</p>
				</div>
			</div>
		</div>
	</div>
)

export default AboutMe
