import React, { FC } from 'react';
import { About, Header, Intro, Portfolio, Way } from '../../components';
import FullWay from '../FullWay';

interface MainProps {
	theme: string;
}

const Main: FC<MainProps> = ({ theme }) => {
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

export default Main;
