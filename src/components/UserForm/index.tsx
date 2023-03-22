import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { setConfirmInformationFromPurchase, setUserPersonInformation } from '../../features/purchase/purchaseSlice';
import { UserPersonInformationDto } from '../../models/user-person-information-dto';
import { isValidEmail, ObjectIsEmpty } from '../../util/functions';
import Button from '../Button';
import Container from '../Container';
import Input from '../Input';
import Row from '../Row';
import Select from '../Select';
import styles from './UserForm.module.css';

export default function UserForm() {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    function submit(data: any) {
        dispatch(setUserPersonInformation(data));
        dispatch(setConfirmInformationFromPurchase(true));
    }

    return (
        <Container>
            <h1 className={styles["title"]}>Dados Cadastrais</h1>
            <form className={styles["form-container"]} onSubmit={handleSubmit(submit)}>
                <Input label={'Nome'}
                    noError={ObjectIsEmpty(errors?.name)}
                    {...register("name", { required: "o Nome é obrigatório." })}
                />

                {errors.name && <span className="error">{errors?.name?.message as string}</span>}

                <Input label={'Email'}
                    noError={ObjectIsEmpty(errors?.email)}
                    {...register("email", {
                        required: "o E-mail é obrigatório.",
                        validate: (val: string) => {
                            const validEmail = isValidEmail(val);

                            if (!validEmail) {
                                return 'Informe um E-mail válido.';
                            }
                        }
                    })}
                />

                {errors.email && <span className="error">{errors?.email?.message as string}</span>}

                <Row>
                    <div className={styles["divide-inputs-address"]}>
                        <Input label={'Endereço'}
                            noError={ObjectIsEmpty(errors?.address)}
                            {...register("address", { required: "o Endereço é obrigatório." })}
                        />
                        {errors.address && <span className="error">{errors?.address?.message as string}</span>}
                    </div>


                    <div className={styles["divide-inputs-number"]}>
                        <Input label={'Número'}
                            {...register("number")}
                        />
                    </div>
                </Row>

                <Row>
                    <div className={styles["divide-inputs"]}>
                        <Input label={'Complemento'}
                            {...register("complement")}
                        />
                    </div>
                    <div className={styles["divide-inputs"]}>
                        <Input label={'Bairro'}
                            noError={ObjectIsEmpty(errors?.neighborhood)}
                            {...register("neighborhood", { required: "o Bairro é obrigatório." })}
                        />
                        {errors.neighborhood && <span className="error">{errors?.neighborhood?.message as string}</span>}
                    </div>
                </Row>

                <Select
                    label={"Estado"}
                    noError={ObjectIsEmpty(errors?.state)}
                    firstOptionLabel={"Escolha um Estado"}
                    options={[{ label: "Mato Grosso do Sul", value: "MS" }]}
                    {...register("state", { required: "o Estado é obrigatório" })}
                />

                {errors.state && <span className="error">{errors?.state?.message as string}</span>}

                <Select
                    label={"Cidade"}
                    noError={ObjectIsEmpty(errors?.city)}
                    firstOptionLabel={"Escolha uma Cidade"}
                    options={[{ label: "Campo Grande", value: "CG" }]}
                    {...register("city", { required: "a Cidade é obrigatória" })}
                />

                {errors.city && <span className="error">{errors?.city?.message as string}</span>}

                <Button label={'Finalizar'} type={'submit'} />

            </form>
        </Container>
    )
}