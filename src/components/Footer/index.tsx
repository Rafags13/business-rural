import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <span className={styles["footer-text"]}>
                <strong>Rural Business - Copyright © 2018</strong>
                <br />
                Todos os direitos reservados. Republicação ou redistribuição do conteúdo produzido pela Rural Business é expressamente proibido sem autorização prévia por escrito.
                <br />
                <strong>Conforme estabelecido em contrato, erros, atrasos ou inexatidões, não poderão servir como base para reclamações ou ações judiciais.</strong>
                <br />
                Avenida Primeiro de Maio, 620 - Campo Grande (MS)
            </span>
        </footer>
    );
}