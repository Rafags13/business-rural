import { useAppSelector } from "../../app/hooks";
import { purchaseFormValue } from "../../features/purchase/purchaseSlice";
import Button from "../Button";
import Container from "../Container";
import styles from './ConfirmInformation.module.css';

export default function ConfirmInformation() {
    const plan = useAppSelector(purchaseFormValue).plan;

    return (
        <Container>
            <h1>Confirma essas informações?</h1>
            <h2 className={styles["persona-data"]}>Dados Pessoais</h2>
            <span className={styles["data"]}>
                <strong>Nome:</strong> {plan.userPersonaInformation.name}
            </span>

            <span className={styles["data"]}>
                <strong>Email:</strong> {plan.userPersonaInformation.email}
            </span>

            <span className={styles["data"]}>
                <strong>Endereço:</strong> {plan.userPersonaInformation.address}
            </span>

            <span className={styles["data"]}>
                <strong>Número:</strong> {plan.userPersonaInformation.number || 'Não informado'}
            </span>

            <span className={styles["data"]}>
                <strong>Complemento:</strong> {plan.userPersonaInformation.complement || 'Não informado'}
            </span>

            <span className={styles["data"]}>
                <strong>Bairro:</strong> {plan.userPersonaInformation.neighborhood}
            </span>

            <span className={styles["data"]}>
                <strong>Estado:</strong> {plan.userPersonaInformation.state}
            </span>

            <span className={styles["data"]}>
                <strong>Cidade:</strong> {plan.userPersonaInformation.city}
            </span>

            <h2 className={styles["choosed-plan-label"]}>Plano Escolhido</h2>
            <h3>{plan.selectedPlan.name}</h3>
            <span>R$ {plan.selectedPlan.typeSelected.value} - {plan.selectedPlan.typeSelected.name}</span>

            <Button label={"Confirmar"} type={"button"} onClick={() => alert('Plano adquirido, enviaremos uma mensagem no seu email confirmando a sua compra!!')} />
        </Container>
    )
}