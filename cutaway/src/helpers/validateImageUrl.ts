export const validateImageUrl = (link: string) => {
	const pattern = new RegExp(
		`(http)?s?:?(\\/\\/[^"']*\\.(?:png|jpg|jpeg|gif|png|svg))`
	);
	// Возврат true либо false по паттерну
	return pattern.test(link);
};
