import React from 'react';
import style from "./Header.module.scss";
import {ReactComponent as LightSvg} from "assets/img/sun-line.svg";

export const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.header__title}>Password Generator</h1>
            <LightSvg className={style.header__themeSVG}/>
        </header>
    );
};
