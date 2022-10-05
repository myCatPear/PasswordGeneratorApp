import {EMPTY_STRING} from "common/constants";

export const getArrayOfUnionCode = (arrayOfNumbers:number[][]) => {
    let range = EMPTY_STRING;
    for (let i = 0; i <= arrayOfNumbers.length -1 ; i +=1) {
        for (let j = arrayOfNumbers[i][0]; j <= arrayOfNumbers[i][1]; j +=1) {
            range += j + ',';
        }
    }
    const deleteLastComma = range.slice(0,range.length-1);
    const stringToArray = deleteLastComma.split(',');
   // const sortArray = stringToArray.sort((a,b) => +a - +b)
    return stringToArray
}