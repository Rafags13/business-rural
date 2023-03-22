import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PlanPurchaseFinished } from '../../models/plan-purchase-finished';
import { SelectedPlan } from '../../models/plan-selected';
import { UserLoginDto } from '../../models/user-login-dto';
import { UserPersonInformationDto } from '../../models/user-person-information-dto';

export type showFormParts = {
    showFirstFormPart: boolean,
    showSecondFormPart: boolean,
    showThirdFormPart: boolean,
    showConfirmationInformations: boolean,
}

type reducerType = {
    plan: PlanPurchaseFinished,
    parts: showFormParts
}

const initialState: reducerType = {
    plan: {
        userLoginData: {
            cpf: '',
            password: ''
        },
        selectedPlan: {
            name: '',
            typeSelected: {
                name: '',
                value: 0
            }
        },
        userPersonaInformation: {
            name: '',
            email: '',
            address: '',
            number: 0,
            complement: '',
            neighborhood: '',
            state: '',
            city: ''
        }
    },
    parts: {
        showFirstFormPart: true,
        showSecondFormPart: false,
        showThirdFormPart: false,
        showConfirmationInformations: false,
    }

}

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
        allowShowSecondPartAndHideFirstFromForm: (state, action: PayloadAction<boolean>) => {
            state.parts.showFirstFormPart = !action.payload;
            state.parts.showSecondFormPart = action.payload;
        },
        allowShowThirdParAndHideSecondFromForm: (state, action: PayloadAction<boolean>) => {
            state.parts.showSecondFormPart = !action.payload;
            state.parts.showThirdFormPart = action.payload;
        },
        setUserLoginData: (state, action: PayloadAction<UserLoginDto>) => {
            state.plan.userLoginData = action.payload;
        },
        setSelectedPlan: (state, action: PayloadAction<SelectedPlan>) => {
            state.plan.selectedPlan = action.payload;
        },
        setUserPersonInformation: (state, action: PayloadAction<UserPersonInformationDto>) => {
            state.plan.userPersonaInformation = action.payload;
        },
        setConfirmInformationFromPurchase: (state, action: PayloadAction<boolean>) => {
            state.parts.showThirdFormPart = !action.payload;
            state.parts.showConfirmationInformations = action.payload;
        }

    },
});

export const {
    allowShowSecondPartAndHideFirstFromForm,
    allowShowThirdParAndHideSecondFromForm,
    setSelectedPlan,
    setUserLoginData,
    setUserPersonInformation,
    setConfirmInformationFromPurchase
} = purchaseSlice.actions;

export const purchaseFormValue = (state: RootState) => state.purchase;

export default purchaseSlice.reducer;