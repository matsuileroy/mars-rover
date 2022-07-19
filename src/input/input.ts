import * as path from 'path'
import * as fs from 'fs'

export const retrieveInput = () => {
	const args = process.argv.slice(2);

	if (args.length === 0) {
		throw 'Input file required';
	}

	if (args.length > 1) {
		throw 'Only one argument expected';
	}

	const filePath = args[0];
	const extensionName = path.extname(filePath);

	if (extensionName !== '.txt') {
		throw 'Only .txt files permitted as input';
	}

	return parseInput(filePath);
}

export const parseInput = (filePath) => {
  const fileData = fs.readFileSync(filePath, 'utf8');
  const lines = fileData.split(/\r?\n/);

	return {
		gridSize: lines[0],
		robotCommands: lines.slice(1)
	}
}