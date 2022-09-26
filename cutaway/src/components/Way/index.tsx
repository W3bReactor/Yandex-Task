import React, { FC } from 'react';
import styles from './Way.module.scss';
import classNames from 'classnames';
import { Heading2 } from '../Heading2';
import { TransparentButton } from '../TransparentButton';
import { themes } from '../../redux/slices/settingsSlice/types';
import { Element } from 'react-scroll';

interface WayProps {
	theme: string;
}

export const Way: FC<WayProps> = ({ theme }) => {
	const cx = classNames('container', styles.way, {
		[styles.wayDark]: theme === themes.DARK,
		[styles.wayLight]: theme === themes.LIGHT,
	});
	return (
		<Element name="way">
			<section className={cx}>
				<Heading2 className={styles.title} theme={theme}>
					Мой проффессиональный путь
				</Heading2>
				<TransparentButton href="way" type="link">
					Начать
				</TransparentButton>
			</section>
		</Element>
	);
};
