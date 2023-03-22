import styles from './Button.module.css';

type Props = {
    label: string,
    onClick?: () => void,
    type: "button" | "submit" | "reset"
}

export default function Button({ label, onClick, type }: Props) {
    return (
        <button
            className={styles["button-container"]}
            onClick={type !== 'submit' ? onClick : () => { }}
            type={type}>
            {label}
        </button>
    )
}