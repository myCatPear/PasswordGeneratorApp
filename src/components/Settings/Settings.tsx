import React from 'react';
import style from "./Settings.module.scss";
import {
    CustomPasswordSettings,
    GeneratePassword,
    PasswordLength,
    StrengthOfPassword
} from "components";


export const Settings = () => {
    return (
        <div className={style.settings}>
            <PasswordLength/>
            <CustomPasswordSettings/>
            <StrengthOfPassword/>
            <GeneratePassword/>
        </div>
    );
};
