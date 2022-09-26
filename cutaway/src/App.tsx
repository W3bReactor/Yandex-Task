import React, { Suspense } from 'react';
import 'normalize.css';
import './assets/styles/_fonts.scss';
import './assets/styles/_global.scss';
import classNames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import { themes } from './redux/slices/settingsSlice/types';
import { useAppSelector } from './redux/hooks';
import { selectModalIsOpen } from './redux/slices/modalSlice/selectors';
import {
	selectBurger,
	selectTheme,
} from './redux/slices/settingsSlice/selectors';
import { MessageLoader, Modal } from './components';

const Main = React.lazy(() => import('./pages/Main'));
const FullWay = React.lazy(() => import('./pages/FullWay'));

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
				<Suspense fallback={<MessageLoader />}>
					<Routes>
						<Route path="/" element={<Main theme={theme} />} />
						<Route path="/way" element={<FullWay theme={theme} />} />
					</Routes>
				</Suspense>
			</div>
		</>
	);
}

export default App;
