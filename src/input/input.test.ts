import { retrieveInput } from './input';

describe('retrieveInput', () => {
  it('raises an error if no argument is passed', () => {
    expect(() => retrieveInput()).toThrow('Input file required')
  })

  it('raises an error if more than one arugment passed', () => {
    process.argv.push('input.txt', 'another-input.txt');

    expect(() => retrieveInput()).toThrow('Only one argument expected');
  })
})