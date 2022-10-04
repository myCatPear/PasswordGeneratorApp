import React from 'react';
import style from "./GeneratePassword.module.scss";
import {getRandomNumberInRange} from "../../utils/getRandomNumberInRange";


export const GeneratePassword = () => {
    const generatePassword = (
        length: number,
        upperCase: boolean = false,
        symbols: boolean = false,
        minUnionCode:number = 97,
        maxUnionCode:number = 122) => {
        let password = ''
        for (let i = 0; i <= length - 1; i +=1) {
            let element = getRandomNumberInRange(minUnionCode, maxUnionCode);
            password += String.fromCharCode(element)
        }
        return password
    }

    return (
        <>
            <div className={style.generate}>
                <button>generate</button>
            </div>
        </>
    );
};
