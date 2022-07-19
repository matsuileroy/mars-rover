export const createGrid = (gridSize) => {
	const gridSizeSplit = gridSize.split(' ');
	const width = parseInt(gridSizeSplit[0]);
	const height = parseInt(gridSizeSplit[1]);

	return { width, height };
}