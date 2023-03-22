import { SelectedPlan } from "./plan-selected";
import { UserLoginDto } from "./user-login-dto";
import { UserPersonInformationDto } from "./user-person-information-dto";

export class PlanPurchaseFinished {
    userLoginData!: UserLoginDto;
    selectedPlan!: SelectedPlan;
    userPersonaInformation!: UserPersonInformationDto
}