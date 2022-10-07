import React, {FC} from 'react';
import style from "./StrengthOfPassword.module.scss";
import {DefaultPasswordSettingsType} from "common/defaultPasswordSettings";
import {changePasswordStrength} from "utils/changePasswordStrength";

interface IStrengthOfPassword {
    passwordLength:number
    passwordSettings:DefaultPasswordSettingsType
}

export const StrengthOfPassword:FC<IStrengthOfPassword> = (props) => {
    const {passwordLength,passwordSettings} = props;

    const passwordStrength = changePasswordStrength(passwordLength, passwordSettings);

    return (
        <>
            <div className={style.strength}>
                <span className={style.strength__text}>STRENGTH</span>
                <ul className={style.scale}>
                    <li className={`${style.scale__item} ${passwordStrength > 0 && style.firstLevel}`}></li>
                    <li className={`${style.scale__item} ${passwordStrength > 1 && style.secondLevel}`}></li>
                    <li className={`${style.scale__item} ${passwordStrength > 2 && style.thirdLevel}`}></li>
                    <li className={`${style.scale__item} ${passwordStrength > 3 && style.fourthLevel}`}></li>

                </ul>
            </div>
        </>

    );
};
