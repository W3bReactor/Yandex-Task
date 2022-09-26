import React from 'react';
import 'normalize.css';
import './assets/styles/_fonts.scss';
import './assets/styles/_global.scss';
import classNames from 'classnames';
import { Main } from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import { FullWay } from './pages/FullWay';
import { themes } from './redux/slices/settingsSlice/types';
import { useAppSelector } from './redux/hooks';
import { selectModalIsOpen } from './redux/slices/modalSlice/selectors';
import {
	selectBurger,
	selectTheme,
} from './redux/slices/settingsSlice/selectors';
import { Modal } from './components';

function App() {
	const theme = useAppSelector(selectTheme);
	const modalIsOpen = useAppSelector(selectModalIsOpen);
	const burgerIsOpen = useAppSelector(selectBurger);
	const cx = classNames({
		mainDark: theme === themes.DARK,
		mainLight: theme === themes.LIGHT,
		mainBlock: burgerIsOpen,
	});
	return (
		<>
			{modalIsOpen && <Modal />}
			<div className={cx}>
				<Routes>
					<Route path="/" element={<Main theme={theme} />} />
					<Route path="/way" element={<FullWay theme={theme} />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
