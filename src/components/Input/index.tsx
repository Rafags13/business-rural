import React from 'react';
import styles from './Input.module.css';

type Props = {
    label: string,
    noError?: boolean,
    maxLength?: number,
    isPassword?: boolean,
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ label, noError = true, isPassword = false, maxLength = 100, ...inputProps }: Props, ref) => {
    return (
        <div className={styles["input-container"]}>
            <label className={styles["input-label"]}>{label}</label>
            <input autoComplete={label} maxLength={maxLength} ref={ref} type={isPassword ? "password" : "text"} {...inputProps} className={noError ? styles[`input-login`] : styles[`error`]} />
        </div>
    )
})

export default Input;