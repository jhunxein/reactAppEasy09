import React from 'react';

import faqs from './../data/faq.json';
import Faq from './Faq';

function Faqs() {
	return (
		<ul className="faq--list">
			{faqs.map((data, index) => {
				let active = true;
				if (index > 0) active = false;
				return <Faq key={data.id} {...data} active={active} />;
			})}
		</ul>
	);
}

export default Faqs;
