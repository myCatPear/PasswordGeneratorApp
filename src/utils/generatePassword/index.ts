import {getArrayOfUnionCode} from "utils/getArrayOfUnionCode";
import {getRandomNumber} from "utils/getRandomNumber";

export const generatePassword = (length: number, isIncludeUpperCase: boolean, isIncludeNumbers:boolean,isIncludeSymbols: boolean) => {
    const startUnionCodeLowerLetters = 97;
    const endUnionCodeLowerLetters = 122;
    const startUnionCodeUpperLetters = 65;
    const endUnionCodeUpperLetters = 90;
    const startUnionCodeNumbers = 48;
    const endUnionCodeNumbers = 57;
    const startUnionCodeSymbols = 33;
    const endUnionCodeSymbols = 47;
    const arrayOfRangesUnionCode = [[startUnionCodeLowerLetters, endUnionCodeLowerLetters]];

    if (isIncludeUpperCase) arrayOfRangesUnionCode.push([startUnionCodeUpperLetters, endUnionCodeUpperLetters])
    if (isIncludeSymbols) arrayOfRangesUnionCode.push([startUnionCodeSymbols, endUnionCodeSymbols])
    if (isIncludeNumbers) arrayOfRangesUnionCode.push([startUnionCodeNumbers, endUnionCodeNumbers])

    const arrayWithAllAvailableUnionCode = getArrayOfUnionCode(arrayOfRangesUnionCode);

    let password = ''

    for (let i = 0; i < length; i += 1) {
        let randomNumber = getRandomNumber(0, arrayWithAllAvailableUnionCode.length - 1)
        password += String.fromCharCode(+arrayWithAllAvailableUnionCode[randomNumber])
    }
    return password
}