const matchBracket = require('./problem1');
// test('determine if brackets match', () => {
//     expect(matchBracket('()')).toBe(true);
//     expect(matchBracket('(}')).toBe(false);
//     expect(matchBracket('{{{{')).toBe(false);
// })
describe('matchBracket', () => {
    test.each`
        input | expectedResult
        ${'{}'} | ${true}
        ${'()'} | ${true}
        ${'(('} | ${false}
        ${''} | ${true}
        ${'({[]})'} | ${true}
        ${'(({{}}]]'} | ${false}
        ${'{{(())}}'} | ${true}
        ${'{hello)(there}'} | ${false}
        ${'(hel){there}}'} | ${false}
        ${'({'} | ${false}
        ${'{('} | ${false}
        `('Takes bracket input and see if matches with expectedResult', ({input, expectedResult }) => {
            expect(matchBracket(input)).toBe(expectedResult)
        })
})