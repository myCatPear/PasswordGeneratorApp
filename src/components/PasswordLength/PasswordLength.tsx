import React, {ChangeEvent, FC} from 'react';
import style from "./PasswordLength.module.scss";
import {
    INITIAL_VALUE_PASSWORD_MAX_LENGTH,
    INITIAL_VALUE_PASSWORD_MIN_LENGTH
} from "common/constants";

interface IPasswordLength {
    passwordLength: number
    setPasswordLength: (length: number) => void
}

export const PasswordLength: FC<IPasswordLength> = (props) => {
    const {setPasswordLength, passwordLength} = props

    const onInputSetPasswordLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordLength(+event.currentTarget.value)
    }
    return (
        <>
            <div className={style.passwordLength}>
                <span>Character length</span>
                <span>{passwordLength}</span>
            </div>

            <input
                type="range"
                min={INITIAL_VALUE_PASSWORD_MIN_LENGTH}
                max={INITIAL_VALUE_PASSWORD_MAX_LENGTH}
                value={passwordLength}
                onChange={onInputSetPasswordLengthChange}
            />
        </>
    );
}
