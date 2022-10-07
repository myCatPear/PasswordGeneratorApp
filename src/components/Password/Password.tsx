import React, {FC, useState} from 'react';
import style from "./Password.module.scss";
import {ReactComponent as CopiedSVG} from "assets/img/file-copy-line.svg";
import CopyToClipboard from 'react-copy-to-clipboard';


interface IPassword {
    password: string
}

export const Password: FC<IPassword> = ({password}) => {
    const [isCopied, setIsCopied] = useState(false)

    const onCopiedSVGClick = () => {
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        },2000)
    }

    return (
        <div className={style.passwordBody}>
            { isCopied && <span className={style.passwordBody__copied}>copied!</span>}
            <span className={style.password}>{password}</span>
            <CopyToClipboard text={password}>
                <CopiedSVG className={style.passwordBody__copiedSVG}
                           onClick={onCopiedSVGClick}/>
            </CopyToClipboard>
        </div>
    );
};
