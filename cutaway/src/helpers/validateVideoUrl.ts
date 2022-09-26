export const validateVideoUrl = (link: string) => {
	const pattern = new RegExp(
		`^(?:https?:\\/\\/)?(?:www\\.)?(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&v=))((\\w|-){11})(?:\\S+)?$`
	);
	// Возврат true либо false по паттерну
	return pattern.test(link);
};
