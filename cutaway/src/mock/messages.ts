import me from '../assets/images/me.png';
import yandex from '../assets/images/yandex.png';
interface IImportedMessage {
	from?: string;
	text?: string;
	src?: string;
	image?: string;
	title?: string;
	video?: string;
	link?: string;
}
export const importedMessages: IImportedMessage[] = [
	{
		from: 'me',
		text: 'Привет, я буду всё комментировать, чтобы всё было понятно)',
		src: me,
	},
	{
		from: 'yandex',
		text: 'Хорошо!',
		src: yandex,
	},
	{
		from: 'me',
		text: 'Начнём с того, что на данный момент мне 14 лет, зовут Инсаф, живу в городе Нижнекамск.',
		src: me,
	},
	{
		from: 'yandex',
		text: 'Приятно познакомиться!',
		src: yandex,
	},
	{
		from: 'me',
		text: 'Постарался сделать максимально интересно. Надеюсь, вам понравиться',
		src: me,
	},
	{ title: 'Начало: 11 лет' },
	{
		from: 'me',
		text: 'Началось всё с синего слоника)',
		image:
			'https://blog.gramant.ru/wp-content/uploads/2017/05/logo-php-adbac78231.png',
		src: me,
	},
	{
		from: 'me',
		text: 'С видео Хауди Хо, тогда из программистов-ютуберов знал только его.',
		video: 'https://www.youtube.com/watch?v=a6xtQQqx1tg',
		src: me,
	},
	{
		from: 'me',
		text: 'Я всё записывал в txt документ, хотел стать "Программистом", но в итоге на 2 части всё и закончилось)',
		video: 'https://www.youtube.com/watch?v=vJRL_MKoX9M',
		src: me,
	},
	{
		from: 'me',
		text: 'А всё как раз таки, из-за того, что я думал - всё легко, но встретившись с 5-6 проблемами в MySQL, я забросил этот язык',
		src: me,
	},
	{
		from: 'yandex',
		text: 'Хорошо, но тогда как ты дошёл до Front-end?',
		src: yandex,
	},
	{ title: '13 лет: HTML' },
	{
		from: 'me',
		text: 'Где-то начало года, мне опять порекомендовалось видео Хауди Хо, только теперь я решил затянуться. Довести всё до конца.',
		src: me,
	},
	{
		from: 'me',
		text: 'И где в видео я услышал про HTML, и решил посмотреть видео про него',
		src: me,
	},
	{
		from: 'me',
		text: 'Да, у Хауди-Хо, но тут, так-как, я всё ещё ничего не понимал в программировании, мне понравилось.',
		video: 'https://www.youtube.com/watch?v=bWNmJqgri4Q',
		src: me,
	},
	{
		from: 'yandex',
		text: 'Что произошло дальше? Что ты делал после этого видео?',
		src: yandex,
	},
	{ title: 'Вёрстка' },
	{
		from: 'me',
		text: 'Дальше, как всегда, всё пошло опять по рекомендациям, мне порекомендовало это видео.',
		video:
			'https://www.youtube.com/watch?v=ltMSrSis9ww&list=PLoq3Accf02PVdUqjqPdWMG4HbEZXlhICW',
		src: me,
	},
	{
		from: 'me',
		text: 'Я смотрел, и просто делал всё по видео. И мне нравилось, что всё получается!',
		src: me,
	},
	{
		from: 'me',
		text: 'Я просто запоминал свойства css, а у некоторых искал значения в htmlbook.',
		src: me,
	},
	{
		from: 'yandex',
		text: 'Читал ли ты книги про HTML, CSS?',
		src: yandex,
	},
	{
		from: 'me',
		text: 'Нет. Я даже не задумывался про них, из-за того, что я не знал существуют ли такие.',
		src: me,
	},
	{ title: 'JS' },
	{
		from: 'me',
		text: 'Продолжим, в том видео, я узнал, что существует JS',
		src: me,
	},
	{
		from: 'me',
		text: 'Я начал, искать видео про JS, и... Нашёл...',
		video: 'https://www.youtube.com/watch?v=Bluxbh9CaQ0&t=10119s',
		src: me,
	},
	{
		from: 'me',
		text: 'Посмотрел половину, всё получалось, но интерес с каждой минутой - пропадал...',
		src: me,
	},
	{
		from: 'me',
		text: 'Я опять забросил Front-end',
		src: me,
	},
	{
		from: 'yandex',
		text: 'И как ты вернулся обратно туда?',
		src: yandex,
	},
	{ title: 'Возвращение в DOM' },
	{
		from: 'me',
		text: 'Как ни странно, опять через видео, а именно, через видео Василия Муравьева',
		src: me,
		video: 'https://www.youtube.com/watch?v=yp5Cj36g5Uw&t',
	},
	{
		from: 'me',
		text: 'Думаю, без этого видео, дальше путь был бы закрыт. Ведь только после этого видео, мне ооочень понравился JavaScript',
		src: me,
	},
	{
		from: 'me',
		text: 'Я начал каждый день смотреть видео связанное с JS. Узнал про REACT, и многое другое',
		src: me,
	},
	{
		from: 'yandex',
		text: 'А когда ты начал именно изучать React?',
		src: yandex,
	},
	{ title: 'React' },
	{
		from: 'me',
		text: 'В середине лета. Этого года...',
		src: me,
	},
	{
		from: 'me',
		text: 'Да, я отложил JavaScript, иногда верстал, но основное время уходило на учёбу.',
		src: me,
	},
	{
		from: 'me',
		text: 'В начале лета я сверстал около 10 макетов, 1 многостраничный сайт.',
		src: me,
	},
	{
		from: 'me',
		text: 'И после, я захотел двигаться дальше. Я посмотрел видео UlbiTV про React',
		video: 'https://www.youtube.com/watch?v=GNrdg3PzpJQ',
		src: me,
	},
	{
		from: 'me',
		text: 'Дальше, Плейлист IT-KAMASUTRA. Путь Самурая.',
		video:
			'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
		src: me,
	},
	{
		from: 'me',
		text: 'Так-же Pizza v2.',
		video:
			'https://www.youtube.com/watch?v=_UywBskWJ7Q&list=PL0FGkDGJQjJG9eI85xM1_iLIf6BcEdaNl',
		src: me,
	},
	{
		from: 'me',
		text: 'Это огромный путь, многое я не рассказывал. Но это классно, что жизнь привела меня сюда. Во Frontend.',
		src: me,
	},
	{
		title:
			'Спасибо, Яндекс. Это очень классное мероприятие! Я рад поучаствовать, и надеюсь, вы меня возьмёте, чтобы я дальше прокачивался в этой области.',
	},
	{
		link: 'Вернуться обратно.',
	},
];
