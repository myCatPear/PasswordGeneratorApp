import React, {FC} from 'react';
import style from "./Header.module.scss";
import {ReactComponent as LightSvg} from "assets/img/sun-line.svg";
import {ReactComponent as DarkSvg} from "assets/img/moon-line.svg";
import {ThemesType} from "common/types";
import {DARK_THEME, LIGHT_THEME} from "common/constants";

interface IHeader {
    theme: ThemesType,
    setTheme: (theme: ThemesType) => void
}

export const Header: FC<IHeader> = ({theme, setTheme}) => {
    const onSetThemeSVGClick = () => {
        const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME
        setTheme(newTheme)
    }

    return (
        <header className={style.header}>
            <h1 className={style.header__title}>Password Generator</h1>
            {
                theme === DARK_THEME ?
                    <LightSvg className={style.header__lightSVG} onClick={onSetThemeSVGClick}/>
                    : <DarkSvg className={style.header__darkSVG} onClick={onSetThemeSVGClick}/>}

        </header>
    );
};
