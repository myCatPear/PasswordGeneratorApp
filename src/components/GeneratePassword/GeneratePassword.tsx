import React, {FC} from 'react';
import style from "./GeneratePassword.module.scss";
import {DefaultPasswordSettingsType} from "common/defaultPasswordSettings";
import {generatePassword} from "utils/generatePassword";


interface IGeneratePassword {
    passwordSettings:DefaultPasswordSettingsType
    passwordLength:number
    setPassword:(password:string) => void
}

export const GeneratePassword:FC<IGeneratePassword> = (props) => {
    const {passwordSettings,passwordLength,setPassword} = props
    const {isIncludeSymbols,isIncludeUpperCase,isIncludeNumbers} = passwordSettings

    const onGeneratePasswordButtonClick = () => {
        const newPassword = generatePassword(passwordLength,isIncludeUpperCase,isIncludeNumbers,isIncludeSymbols);
        setPassword(newPassword)
    }

    return (
        <>
            <div className={style.generate}>
                <button className={style.button} onClick={onGeneratePasswordButtonClick}>generate</button>
            </div>
        </>
    );
};
