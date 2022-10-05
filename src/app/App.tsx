import React, {useState} from 'react';
import 'index.css'
import style from './App.module.scss';
import {ThemesType} from "common/types";
import {DARK_THEME, DEFAULT_PASSWORD} from "common/constants";
import {Header, Password, Settings} from "components";

export const App = () => {
    const [theme, setTheme] = useState<ThemesType>(DARK_THEME)
    const [password, setPassword] = useState(DEFAULT_PASSWORD)

    return (
        <div className={style.app} data-theme={theme}>
            <div className={style.app__wrapper}>
                <Header theme={theme} setTheme={setTheme}/>
                <Password password={password}/>
                <Settings setPassword={setPassword}/>
            </div>
        </div>
    )
}
