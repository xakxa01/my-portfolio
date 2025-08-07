export const cutArray = <T>(array: T[], cuts: number): T[][] => {
	const cuarto = Math.ceil(array.length / cuts);

	return Array.from(
		{ length: cuts },
		(_, i) => array.slice(i * cuarto, (i + 1) * cuarto)
	).reverse();
}