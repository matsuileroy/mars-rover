import { rotateLeft, rotateRight } from './robot'

describe('rotateLeft', () => {
	it('returns E when rotating left from S', () => {
		expect(rotateLeft('S')).toEqual('E');
	});

	it('returns W when rotating left from N', () => {
		expect(rotateLeft('N')).toEqual('W');
	});
})

describe('rotateRight', () => {
	it('returns W when rotating right from S', () => {
		expect(rotateRight('S')).toEqual('W');
	});

	it('returns N when rotating right from W', () => {
		expect(rotateRight('W')).toEqual('N');
	});
})