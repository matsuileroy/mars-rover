import { retrieveInput } from './input/input'
import { createGrid } from './grid/grid'
import { processRobotCommand } from './robot/robot'

const input = retrieveInput();
const grid = createGrid(input.gridSize);

const printFinalPosition = (finalPosition) => {
	let string = `(${finalPosition.x}, ${finalPosition.y}, ${finalPosition.direction})`;

	if (finalPosition.lost) {
		string += ' LOST';
	}

	console.log(string);
}

input.robotCommands.forEach(robotCommand => {
	const finalPosition = processRobotCommand(robotCommand, grid);
	printFinalPosition(finalPosition);
})