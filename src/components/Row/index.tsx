import { ReactNode } from "react"
import styles from './Row.module.css';

type Props = {
    children: ReactNode
}

export default function Row({ children }: Props) {
    return (
        <div className={styles["row"]}>
            {children}
        </div>
    )
}