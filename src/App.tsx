import { Plan } from './models/plan';
import data from './data/data.json';
import './globalStyles.css';
import Header from "./components/Header";
import UserLogin from "./components/UserLogin";
import UserChoosePlan from "./components/UserChoosePlan";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";
import { useAppSelector } from "./app/hooks";
import { purchaseFormValue } from './features/purchase/purchaseSlice';
import ConfirmInformation from './components/ConfirmInformation';

const dataPlan: Plan[] = JSON.parse(JSON.stringify(data.Plan));

export default function App() {
  const parts = useAppSelector(purchaseFormValue).parts;

  return (
    <main>
      <Header />
      {parts.showFirstFormPart && (
        <UserLogin />
      )}

      {parts.showSecondFormPart && (
        <UserChoosePlan
          plans={dataPlan}

        />
      )}

      {parts.showThirdFormPart && (
        <UserForm />
      )}

      {parts.showConfirmationInformations && (
        <ConfirmInformation />
      )}
      <Footer />
    </main>
  );
}