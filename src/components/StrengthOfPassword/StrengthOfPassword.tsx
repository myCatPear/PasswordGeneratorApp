import React, {FC, useEffect, useState} from 'react';
import style from "./StrengthOfPassword.module.scss";
import {DefaultPasswordSettingsType} from "common/defaultPasswordSettings";
import {INITIAL_VALUE_PASSWORD_STRENGTH} from "../../common/constants";
import {changePasswordStrength} from "../../utils/changePasswordStrength";

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
                <span>STRENGTH</span>
                <ul>
                    <li>{passwordStrength > 0 && '1'}</li>
                    <li>{passwordStrength > 1 && '2'}</li>
                    <li>{passwordStrength > 2 && '3'}</li>
                    <li>{passwordStrength > 3 && '4'}</li>
                </ul>
            </div>
        </>

    );
};
