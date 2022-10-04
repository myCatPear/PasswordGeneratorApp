import React, {useState} from 'react';
import style from './App.module.scss';
import {ThemesType} from "common/types";
import {DARK_THEME} from "common/constants";
import {Header, Password, Settings} from "components";

export const App = () => {
    const [theme, setTheme] = useState<ThemesType>(DARK_THEME)

    return (
        <div className={style.app} data-theme={theme}>
            <div className={style.app__wrapper}>
                <Header/>
                <Password/>
                <Settings/>
            </div>
        </div>
    )
}
