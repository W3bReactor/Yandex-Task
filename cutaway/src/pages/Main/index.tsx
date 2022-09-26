import React, { FC } from 'react';
import { About, Header, Intro, Portfolio, Way } from '../../components';

interface MainProps {
	theme: string;
}

export const Main: FC<MainProps> = ({ theme }) => {
	return (
		<div>
			<Header theme={theme} />
			<Intro theme={theme} />
			<Portfolio theme={theme} />
			<About theme={theme} />
			<Way theme={theme} />
		</div>
	);
};
