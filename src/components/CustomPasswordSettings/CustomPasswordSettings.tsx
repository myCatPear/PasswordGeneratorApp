import React, {ChangeEvent, FC} from 'react';
import style from "./CustomPasswordSettings.module.scss";
import {DefaultPasswordSettingsType} from "common/defaultPasswordSettings";

interface ICustomPasswordSettingsType  {
    passwordSetting:DefaultPasswordSettingsType
    setPasswordSettings: (settings:DefaultPasswordSettingsType) => void
}

export const CustomPasswordSettings:FC<ICustomPasswordSettingsType> = (props) => {
    const {passwordSetting,setPasswordSettings} = props

    const onPasswordSettingsChange = (event:ChangeEvent<HTMLInputElement>) => {
        const inputName = event.currentTarget.name;
        const isChecked = !!event.currentTarget.checked
        const newPasswordSettings = {...passwordSetting, [inputName]:isChecked}
        setPasswordSettings(newPasswordSettings)
    }

    return (
        <>
            <div className={style.passwordSettings}>
                <label>
                    <input type="checkbox" name="isIncludeUpperCase" checked={passwordSetting.isIncludeUpperCase} onChange={onPasswordSettingsChange} className={style.passwordSettings__setting}/>
                    <span>Include Uppercase Letters</span>
                </label>
                <label>
                    <input type="checkbox" name="isIncludeNumbers" checked={passwordSetting.isIncludeNumbers} onChange={onPasswordSettingsChange} className={style.passwordSettings__setting}/>
                    <span>Include numbers</span>
                </label>
                <label>
                    <input type="checkbox" name="isIncludeSymbols" checked={passwordSetting.isIncludeSymbols} onChange={onPasswordSettingsChange} className={style.passwordSettings__setting}/>
                    <span>Include Symbols</span>
                </label>
            </div>
        </>
    );
};
