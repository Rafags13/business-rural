import { ReactNode } from 'react';
import styles from './Container.module.css';

type Props = {
    children?: ReactNode
}

export default function Container({ children }: Props) {
    return (
        <div className={styles["main-container"]}>
            <div className={styles["user-login-container"]}>
                {children}
            </div>
        </div>
    )
}