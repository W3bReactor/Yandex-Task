import React, { FC, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.scss';
import { setModalClose } from '../../redux/slices/modalSlice/slice';
import { selectModalUrl } from '../../redux/slices/modalSlice/selectors';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { validateImageUrl } from '../../helpers/validateImageUrl';
import { validateVideoUrl } from '../../helpers/validateVideoUrl';
import ReactPlayer from 'react-player';

export const Modal: FC = () => {
	const dispatch = useAppDispatch();
	const url = useAppSelector(selectModalUrl);
	const videoRef = useRef(null);
	const closeModal = () => {
		dispatch(setModalClose());
	};
	return (
		<div className={styles.background} onClick={closeModal}>
			<div className={styles.inner} onClick={(e) => e.stopPropagation()}>
				{validateImageUrl(url) && (
					<LazyLoadImage className={styles.img} src={url} />
				)}
				{validateVideoUrl(url) && (
					<ReactPlayer
						autoFocus={true}
						ref={videoRef}
						controls={true}
						volume={0.5}
						className={styles.video}
						url={url}
						width={1000}
						height={600}
					/>
				)}
			</div>
		</div>
	);
};
