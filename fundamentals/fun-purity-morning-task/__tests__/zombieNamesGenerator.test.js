const { zombifyTutors } = require("../morning-task");

describe("zombifyTutors", () => { 
    test("Responds with an empty array when passed an empty array", () => { 
        const actual = zombifyTutors([])
        const expected = []
        expect(actual).toEqual(expected)
    })
    test("Responds with an array with a single name with uuughhh added to it", () => { 
        const input = ['Christian']
        const actual = zombifyTutors(input)
        const expected = ['Christianuugghh']

        expect(actual).toEqual(expected)
    })
    test("Responds with an array with a two names with 'uuughhh' added to the end of the first name and Mmuuhh added to the start of the second name", () => { 
        const input = ['Christian', 'Verity']
        const actual = zombifyTutors(input)
        const expected = ['Christianuugghh', 'Mmuuhhverity']

        expect(actual).toEqual(expected)
    }),
    test("Works for an array of a length of more than 2", () => { 
        const input = ['Alex', 'Ali', 'Béla', 'Christian', 'Mezz', 'MKD', 'Rose', 'Stephen', 'Verity']
        const actual = zombifyTutors(input)

        const expected = ['Alexuugghh', 'Mmuuhhali', 'Bélauugghh', 'Mmuuhhchristian', 'Mezzuugghh', 'Mmuuhhmkd', 'Roseuugghh', 'Mmuuhhstephen', 'Verityuugghh'];

        expect(actual).toEqual(expected)
    })
    test("The returned array is not the array passed as an argument", () => { 
        const input = ['Alex', 'Ali', 'Béla']
        const actual = zombifyTutors(input)
        expect(actual).not.toBe(input)
    })
    test("The original array is unmutated", () => { 
        const input = ['Mezz', 'MKD', 'Stephen']
        const copyInput = ['Mezz', 'MKD', 'Stephen']
        
        zombifyTutors(input)

        expect(input).toEqual(copyInput)
    })
})