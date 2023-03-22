import { useForm } from 'react-hook-form';
import { isValidCPF, ObjectIsEmpty } from '../../util/functions';
import Button from '../Button';
import Container from '../Container';
import Input from '../Input';
import styles from './UserLogin.module.css';
import { useAppDispatch } from '../../app/hooks';
import { allowShowSecondPartAndHideFirstFromForm, setUserLoginData } from '../../features/purchase/purchaseSlice';

export default function UserLogin() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const dispatch = useAppDispatch();
    function submit(data: any) {
        dispatch(allowShowSecondPartAndHideFirstFromForm(true));
        dispatch(setUserLoginData(data))
    }

    return (
        <Container>
            <h3 className={styles["user-accessibility-message"]}>Digite os seus dados pessoais</h3>
            <form className={styles["form-login"]} onSubmit={handleSubmit(submit)}>

                <Input
                    noError={ObjectIsEmpty(errors?.cpf)}
                    label={'CPF'}
                    maxLength={11}
                    {...register("cpf", {
                        required: "o CPF é obrigatório.",
                        validate: (val: string) => {
                            const cpfValid = isValidCPF(val);
                            if (!cpfValid) {
                                return 'Informe um CPF válido.';
                            }
                        }
                    })}
                />

                {errors.cpf && <span className={styles["error"]}>{errors?.cpf?.message as string}</span>}

                <Input
                    isPassword
                    noError={ObjectIsEmpty(errors?.password)}
                    label={'Senha'}
                    {...register("password", { required: "a Senha é obrigatória." })}
                />

                {errors.password && <span className={styles["error"]}>{errors?.password?.message as string}</span>}

                <Input
                    isPassword
                    noError={ObjectIsEmpty(errors?.confirmPassword)}
                    label={'Confirme sua Senha'}  {...register("confirmPassword", {
                        required: "Confirme a senha.",
                        validate: (val: string) => {
                            if (watch('password') != val) {
                                return "As senhas não conferem";
                            }
                        }
                    })} />

                {errors.confirmPassword && <span className={styles["error"]}>{errors?.confirmPassword?.message as string}</span>}

                <Button label={'Prosseguir'} type={'submit'} />
            </form>
        </Container>
    )
}