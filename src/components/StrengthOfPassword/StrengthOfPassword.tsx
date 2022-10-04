import React from 'react';
import style from "./StrengthOfPassword.module.scss";


export const StrengthOfPassword = () => {
    return (
        <>
            <div className={style.strength}>
                <span>STRENGTH</span>
                <ul>
                    <li>[]</li>
                    <li>[]</li>
                    <li>[]</li>
                    <li>[]</li>
                </ul>
            </div>
        </>

    );
};
