import "../../styles/card/experienceTitle.css";

const title = "experience";
const titleLength = title.length;
const halfTitle = Math.ceil(titleLength / 2);

const sliceFunction = (first: number, second: number) => title.slice(first, second).split("");

const firstPart = sliceFunction(0, halfTitle);
const secondPart = sliceFunction(halfTitle, titleLength);

const ExperienceTitle = () => (
	<div className='experienceTitle__container'>
		<h1 className='experienceTitle__title'>
			{[firstPart, secondPart].map((item, indexMain) =>
				item.map((letter, i) => (
					<div key={i} className={indexMain !== 1 ? '' : 'text-dodger-blue-700'}>
						{letter}
					</div>
				))
			)}
		</h1>
	</div>
);

export default ExperienceTitle;