import '@/styles/components/openWork.css';

const OpenWork = () => (
	<div className="openWork__container">
		<a
			href="https://www.linkedin.com/in/carlosxgb/"
			className="openWork__shiny"
			target="_blank"
			rel="noopener noreferrer"
			tabIndex={0}
			aria-label="Open to work - LinkedIn"
		>
			Open to work
		</a>

		<a
			href="/resume"
			className="openWork__resume"
			target="_blank"
			rel="noopener noreferrer"
			tabIndex={0}
			aria-label="View resume PDF"
		>
			View Resume
		</a>
	</div>
);

export default OpenWork;
