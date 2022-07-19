const DIRECTIONS = ['N', 'E', 'S', 'W'];

export const processRobotCommand = (robotCommand, grid) => {
	const robotCommandSplit = robotCommand.split(') ');
	const startingPoint = robotCommandSplit[0].trim().slice(1);
	const moves = robotCommandSplit[1].trim().split('');

	const x = parseInt(startingPoint.split(', ')[0]);
	const y = parseInt(startingPoint.split(', ')[1]);
	const direction = startingPoint.split(', ')[2];

	let currentPosition = { x, y, direction, lost: false };

	for (let i = 0; i < moves.length; i++) {
		const move = moves[i];

		if (currentPosition.lost) {
			break;
		}

		switch(move) {
			case 'F':
				moveForward(currentPosition, grid);
				break;
			case 'L':
				currentPosition.direction = rotateLeft(currentPosition.direction);
				break;
			case 'R':
			currentPosition.direction = rotateRight(currentPosition.direction);
				break;
			default:
				break;
		}
	}

	return currentPosition;
}

export const moveForward = (currentPosition, grid) => {
	switch(currentPosition.direction) {
		case 'N':
			currentPosition.y += 1;

			if (offTheGrid(currentPosition, grid)) {
				currentPosition.y -= 1;
				currentPosition.lost = true;
			}

			break;	
		case 'E':
			currentPosition.x += 1;

			if (offTheGrid(currentPosition, grid)) {
				currentPosition.x -= 1;
				currentPosition.lost = true;
			}

			break;
		case 'S':
			currentPosition.y -= 1;

			if (offTheGrid(currentPosition, grid)) {
				currentPosition.y += 1;
				currentPosition.lost = true;
			}

			break;
		case 'W':
			currentPosition.x -= 1;

			if (offTheGrid(currentPosition, grid)) {
				currentPosition.x += 1;
				currentPosition.lost = true;
			}

			break;
		default:
			break;
	}
}

export const rotateLeft = (currentDirection) => {
	let newDirection = DIRECTIONS[DIRECTIONS.indexOf(currentDirection) - 1]

	return newDirection ? newDirection : DIRECTIONS[3];
}

export const rotateRight = (currentDirection) => {
	let newDirection = DIRECTIONS[DIRECTIONS.indexOf(currentDirection) + 1];

	return newDirection ? newDirection : DIRECTIONS[0];
}

export const offTheGrid = (currentPosition, grid) => {
	return currentPosition.x > grid.width 
		|| currentPosition.y > grid.height 
		|| currentPosition.x < 0
		|| currentPosition.y < 0;
}