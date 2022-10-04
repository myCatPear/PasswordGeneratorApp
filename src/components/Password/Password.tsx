import React from 'react';
import style from "./Password.module.scss";
import {ReactComponent as CopiedSVG} from "assets/img/file-copy-line.svg";

export const Password = () => {
    return (
        <div className={style.passwordBody}>
            <span className={style.password}>blablabla</span>
            <CopiedSVG className={style.passwordBody__copiedSVG}/>
        </div>
    );
};
