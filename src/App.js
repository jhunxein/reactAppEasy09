import React from 'react';
import './css/app.css';

import illustrationMobile from './assets/images/illustration-woman-online-mobile-final.svg';
import bgPatterMobile from './assets/images/bg-pattern-mobile.svg';

import Faqs from './components/Faqs';

function App() {
	return (
		<main className="container">
			<article className="faq">
				<div className="ills--wrapper">
					<img src={illustrationMobile} alt="" className="ills--wrapper__img" />
					<img src={bgPatterMobile} alt="" className="ills--wrapper__imgBg" />
				</div>
				<h1 className="faq__title">faq</h1>
				<Faqs />
			</article>
		</main>
	);
}

export default App;
