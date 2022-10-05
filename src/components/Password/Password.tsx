import React, {FC} from 'react';
import style from "./Password.module.scss";
import {ReactComponent as CopiedSVG} from "assets/img/file-copy-line.svg";

interface IPassword {
    password:string
}

export const Password:FC<IPassword> = ({password}) => {
    return (
        <div className={style.passwordBody}>
            <span className={style.password}>{password}</span>
            <CopiedSVG className={style.passwordBody__copiedSVG}/>
        </div>
    );
};
