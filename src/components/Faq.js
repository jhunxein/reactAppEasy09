import React, { useState, useRef, useEffect } from 'react';
import './../css/list.css';

import arrowDown from './../assets/images/icon-arrow-down.svg';

function List({ id, question, answer, active }) {
	const [faqShow, setFaqShow] = useState(active);

	const refArrowImage = useRef(null);
	const refParagraph = useRef(null);
	const refParagraphContainer = useRef(null);

	useEffect(() => {
		if (faqShow) {
			const height = refParagraph.current.getBoundingClientRect().height;
			refArrowImage.current.alt = 'arrow up';
			refParagraphContainer.current.style.height = `${height}px`;
			return;
		}
		refArrowImage.current.alt = 'arrow down';
		refParagraphContainer.current.style.height = `0px`;
	}, [faqShow]);

	return (
		<li className="faq--wrapper">
			<div className="faq--wrapper--inline">
				<h2
					className={`faq--wrapper__title ${
						faqShow ? 'faq--wrapper__active' : ''
					}`.trim()}
					onClick={() => setFaqShow(!faqShow)}
				>
					{question}
				</h2>
				<button
					className={`faq--wrapper--btn ${
						faqShow ? 'faq--wrapper--btn__up' : 'faq--wrapper--btn__down'
					}`}
					onClick={() => setFaqShow(!faqShow)}
				>
					<img src={arrowDown} alt="arrow down" ref={refArrowImage} />
				</button>
			</div>

			<div
				className={`faq--wrapper__paragraph ${
					faqShow ? 'faq--wrapper--show' : ''
				}`.trim()}
				ref={refParagraphContainer}
			>
				<p className="faq--wrapper__desc" ref={refParagraph}>
					{answer}
				</p>
			</div>
			<hr className="faq--wrapper--divider" />
		</li>
	);
}

export default List;
