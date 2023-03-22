import React from 'react';
import styles from './Select.module.css';

export type OptionsSelect = {
    label: string,
    value: string,
}

type Props = {
    label?: string
    firstOptionLabel?: string,
    noError?: boolean,
    options: OptionsSelect[]
}

const Select = React.forwardRef<HTMLSelectElement, Props>(({ label = '', firstOptionLabel, noError = true, options, ...selectProps }: Props, ref) => {
    return (
        <>
            <label className={styles["label"]}>{label}</label>
            <select className={noError ? styles["select"] : styles["select-with-error"]} {...selectProps} ref={ref} defaultValue={""}>
                <option value="" disabled hidden>{firstOptionLabel}</option>
                {options.map((option, index) => (
                    <option className={styles["option"]} key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    )
});

export default Select;