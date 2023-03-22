import { Plan } from "../../../models/plan";
import styles from './PlanSelect.module.css';
import { FiChevronRight } from 'react-icons/fi';
import { useState } from "react";
import { SelectedPlan } from "../../../models/plan-selected";

type Props = {
    plan: Plan,
    selectPlan: (plan: SelectedPlan) => void
}


export default function PlanSelect({ plan, selectPlan }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div onClick={() => setOpen(!open)} className={styles["select-card-container"]}>
            <div className={styles["select-card-name"]}>
                <span>{plan.name}</span>
                <FiChevronRight className={styles[open ? "icon-chevron-down" : "icon-chevron"]} />
            </div>
            <div className={styles["select-options"]}>
                {open &&
                    plan.types.map((type, index) => (
                        <div
                            onClick={() => selectPlan({ name: plan.name, typeSelected: type })}
                            key={index}
                            className={styles["option"]}>
                            <span>R$ {type.value} - {type.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}