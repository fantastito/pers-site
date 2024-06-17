import { shuffleArray } from '../shuffle';

describe('shuffleArray', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
    });
    
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    test('returns an empty array when invoked with a string', () => {
        const result = shuffleArray("Hello");

        expect(result).toEqual([]);
    })

    test('With Math.random mocked, returns a pre-determined array', () => {
        const result = shuffleArray([1,2,3,4,5])

        expect(result).toBe([2,3,4,5,1])
    })
    test('all original elements of array are still in array', () => {
        const result = shuffleArray([1,2,3,4,5])

        expect(result.sort()).toEqual([1,2,3,4,5])
    })
})