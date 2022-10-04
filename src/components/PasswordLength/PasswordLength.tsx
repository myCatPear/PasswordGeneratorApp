import React from 'react';
import style from "./PasswordLength.module.scss";


export const PasswordLength = () => {
    return (
        <>
            <div className={style.passwordLength}>
                <span>Character length</span>
                <span>0</span>
            </div>
            <input type="range"/>
        </>
    );
};
