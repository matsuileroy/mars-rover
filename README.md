# Ariel's Mars Rover

## Requirements
- Node.js, download page [here](https://nodejs.org/en/download/) 
- npm, included with Node.js installation
- MacOS, Windows (including WSL), and Linux are supported
## Usage
### Installing dependencies
Navigate to the root folder and run

```bash
npm install
```
### Running the rover
Run the Mars Rover by running
```bash
ts-node src/app.ts INPUT_FILE_PATH
```
where `INPUT_FILE_PATH` is the file path of your input, note that the rover only supports `.txt` files

An example input file `input.txt` is provided in the root directory, we can run the rover with this as the input with:
```bash
ts-node src/app.ts input.txt
```

### Running tests
To run the tests for this Mars Rover, run:
```
npm test
```

Note on the tests: only managed to add a couple within the time constraints
