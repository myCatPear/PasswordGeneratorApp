import React from 'react';
import style from "./CustomPasswordSettings.module.scss";


export const CustomPasswordSettings = () => {
    return (
        <>
            <div className={style.passwordBody}>
                <label>
                    <input type="checkbox"/>
                    <span>Include Uppercase Letters</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Include numbers</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Include Symbols</span>
                </label>
            </div>
        </>
    );
};
