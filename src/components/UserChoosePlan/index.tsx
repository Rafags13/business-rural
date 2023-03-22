import { Plan } from '../../models/plan';
import Container from '../Container';
import styles from './ChoosePlan.module.css';
import PlanSelect from './PlanSelect';
import { useState } from 'react';
import { SelectedPlan } from '../../models/plan-selected';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { allowShowThirdParAndHideSecondFromForm, setSelectedPlan, purchaseFormValue } from '../../features/purchase/purchaseSlice';

type Props = {
    plans: Plan[],
}

export default function UserChoosePlan({ plans }: Props) {
    const dispatch = useAppDispatch();
    const selectedPlan = useAppSelector(purchaseFormValue).plan.selectedPlan;

    const [error, setError] = useState<string>('');

    function selectPlan(plan: SelectedPlan) {
        dispatch(setSelectedPlan(plan));
        setSelectedPlan(plan);
        setError('');
    }

    function moveToLastFormPart() {
        const canBeMovedToThirdPart = selectedPlan.name !== '';

        setError(!canBeMovedToThirdPart ? 'Por favor, selecione um plano.' : '');

        dispatch(allowShowThirdParAndHideSecondFromForm(canBeMovedToThirdPart));
    }

    return (
        <Container>
            <h1 className={styles["plan-title"]}>Escolha seu plano</h1>
            {plans.map((plan, index) => {
                return (
                    <PlanSelect key={index} plan={plan} selectPlan={selectPlan} />
                )
            })}
            {selectedPlan.name !== '' &&
                <span>Plano selecionado: {selectedPlan.name}, {selectedPlan.typeSelected.name} - {selectedPlan.typeSelected.value === 0 ? '' : selectedPlan.typeSelected.value}</span>
            }
            {error !== '' &&
                <span className={styles["error"]}>{error}</span>
            }

            <Button label={'Prosseguir'} type={'button'} onClick={moveToLastFormPart} />
        </Container>
    )
}