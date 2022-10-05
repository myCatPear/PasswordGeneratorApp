import React from 'react';
import style from "./GeneratePassword.module.scss";
import {getArrayOfUnionCode} from "utils/getArrayOfUnionCode";
import {getRandomNumber} from "utils/getRandomNumber";


export const GeneratePassword = () => {
    const generatePassword = (length: number, upperCase: boolean = false, symbols: boolean = false,) => {
        const startUnionCodeLowerLetters = 97;
        const endUnionCodeLowerLetters = 122;
        const startUnionCodeUpperLetters = 65;
        const endUnionCodeUpperLetters = 90;
        const startUnionCodeSymbols = 33;
        const endUnionCodeSymbols = 47;
        const arrayOfRangesUnionCode = [[startUnionCodeLowerLetters, endUnionCodeLowerLetters]];

        if (upperCase) arrayOfRangesUnionCode.push([startUnionCodeUpperLetters, endUnionCodeUpperLetters])
        if (symbols) arrayOfRangesUnionCode.push([startUnionCodeSymbols, endUnionCodeSymbols])

        const arrayWithAllAvailableUnionCode = getArrayOfUnionCode(arrayOfRangesUnionCode);

        let password = ''

        for (let i = 0; i < length; i += 1) {
            let randomNumber = getRandomNumber(0, arrayWithAllAvailableUnionCode.length - 1)
            password += String.fromCharCode(+arrayWithAllAvailableUnionCode[randomNumber])
        }

        return password
    }
    generatePassword(10, true, true)
    return (
        <>
            <div className={style.generate}>
                <button>generate</button>
            </div>
        </>
    );
};
