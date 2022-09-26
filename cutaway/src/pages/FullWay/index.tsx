import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Heading1, Heading2, Message } from '../../components';
import styles from './FullWay.module.scss';
import classNames from 'classnames';
import { themes } from '../../redux/slices/settingsSlice/types';
import { importedMessages } from '../../mock/messages';

interface FullWayProps {
	theme: string;
}

interface IMessage {
	from?: string;
	text?: string;
	src?: string;
	image?: string;
	title?: string;
	video?: string;
	link?: string;
}
let messages: IMessage[] = [];

export const FullWay: FC<FullWayProps> = ({ theme }) => {
	const [index, setIndex] = useState<number>(0);
	const [delay, setDelay] = useState<number>(0);
	const ref = useRef<HTMLDivElement>(null);
	const [currText, setCurrText] = useState<string>(
		'Нажмите Enter чтобы начать'
	);
	const inputRef = useRef<HTMLInputElement>(null);
	const isEnteredRef = useRef<boolean>(false);
	const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && !isEnteredRef.current) {
			setCurrText('Подождите...');
			addMessage(index);
			isEnteredRef.current = true;
		}
	};
	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, [index]);
	const addMessage = (number: number) => {
		const timer = setTimeout(async () => {
			const ImportedMessage = importedMessages[number];
			if (typeof ImportedMessage !== 'undefined') {
				if (ImportedMessage?.text) {
					const obj = {
						from: ImportedMessage.from,
						src: ImportedMessage.src,
						image: ImportedMessage.image,
						video: ImportedMessage.video,
					};
					const currMessage = ImportedMessage;
					if (currMessage && currMessage.text) {
						setDelay(currMessage.text.length * 10);
					}
					messages = [...messages, obj];
					await messageLoading(number, delay);
				}
				if (ImportedMessage?.title) {
					messages = [...messages, ImportedMessage];
					await messageLoading(number, delay);
				}
				if (ImportedMessage?.link) {
					messages = [...messages, ImportedMessage];
					await messageLoading(number, delay);
				}
			}
			setIndex((prev) => prev + 1);
		}, 3000);
		if (typeof importedMessages[number] === 'undefined') {
			clearInterval(timer);
		}
	};
	const messageLoading = useCallback(
		async (num: number, delay: number) => {
			const text = importedMessages[num].text;
			if (text) {
				await setTimeout(() => {
					messages[num].text = text;
					setCurrText(text || '');
				}, delay);
			}
			await addMessage(num + 1);
		},
		[index]
	);

	const inner = classNames(styles.inner, {
		[styles.innerDark]: theme === themes.DARK,
		[styles.innerLight]: theme === themes.LIGHT,
	});
	const messagesCx = classNames(styles.messages, {
		[styles.messagesDark]: theme === themes.DARK,
		[styles.messagesLight]: theme === themes.LIGHT,
	});
	return (
		<div className={inner}>
			<section>
				<Heading1 className={styles.title} theme={theme}>
					Привет, сейчас я покажу мой путь до Front-end.
				</Heading1>
				<div className={messagesCx}>
					{messages.length < 1 && (
						<div>
							<Heading2 className={styles.subtitle} theme={theme}>
								{currText}
							</Heading2>
							<input
								autoFocus
								ref={inputRef}
								type="submit"
								value=""
								onKeyPress={onEnter}
								className={styles.input}
							/>
						</div>
					)}
					{messages.map((message, key) => (
						<Message
							key={key}
							text={message.text}
							from={message.from}
							theme={theme}
							src={message.src}
							title={message.title}
							image={message.image}
							video={message.video}
							link={message.link}
						/>
					))}
					<div ref={ref}></div>
				</div>
			</section>
		</div>
	);
};
