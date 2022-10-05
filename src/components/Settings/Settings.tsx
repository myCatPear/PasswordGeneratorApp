import React, {FC, useEffect, useState} from 'react';
import style from "./Settings.module.scss";
import {
    CustomPasswordSettings,
    GeneratePassword,
    PasswordLength,
    StrengthOfPassword
} from "components";
import {defaultPasswordSettings} from "common/defaultPasswordSettings";
import {
    INITIAL_VALUE_PASSWORD_MIN_LENGTH, INITIAL_VALUE_PASSWORD_STRENGTH,
} from "common/constants";

interface ISettings {
    setPassword: (password:string) => void
}


export const Settings:FC<ISettings> = ({setPassword}) => {
    const [passwordLength, setPasswordLength] = useState(INITIAL_VALUE_PASSWORD_MIN_LENGTH)
    const [passwordSettings, setPasswordSettings] = useState(defaultPasswordSettings)
    const [passwordStrength, setPasswordStrength] = useState(INITIAL_VALUE_PASSWORD_STRENGTH);

    return (
        <div className={style.settings}>
            <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
            <CustomPasswordSettings passwordSetting={passwordSettings} setPasswordSettings={setPasswordSettings}/>
            <StrengthOfPassword passwordSettings={passwordSettings} passwordLength={passwordLength}/>
            <GeneratePassword passwordLength={passwordLength} passwordSettings={passwordSettings} setPassword={setPassword}/>
        </div>
    );
};
