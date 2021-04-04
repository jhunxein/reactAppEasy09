import React, { useState, useEffect } from 'react';
import './css/app.css';

import illustrationMobile from './assets/images/illustration-woman-online-mobile-final.svg';
import bgPatternMobile from './assets/images/bg-pattern-mobile.svg';

import illustrationDesktop from './assets/images/illustration-woman-online-desktop.svg';
import bgBoxDesktop from './assets/images/illustration-box-desktop.svg';

import Faqs from './components/Faqs';

function App() {
	const [windowSize, setWindowSize] = useState(0);

	const handleWindowResize = () => {
		const width = window.innerWidth;
		setWindowSize(width);
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<main className="container">
			<article className="faq">
				{windowSize >= 980 && (
					<div className="container--box--wrapper">
						<img src={bgBoxDesktop} alt="..." className="container--box__img" />
					</div>
				)}
				<div className="faq--info--wrapper">
					{/* SHOW ILLUSTRATION ON BG */}
					{windowSize < 980 ? (
						<div className="faq--ills--wrapper">
							<img src={illustrationMobile} alt="..." className="faq--ills__img" />
							<img src={bgPatternMobile} alt="..." className="faq--ills__pattern" />
						</div>
					) : (
						<div className="faq--ills--wrapper">
							<img src={illustrationDesktop} alt="..." className="faq--ills__img" />
						</div>
					)}
					<div className="faq--context--wrapper">
						<h1 className="faq__title">faq</h1>
						<Faqs />
					</div>
				</div>
			</article>
		</main>
	);
}

export default App;
