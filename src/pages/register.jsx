import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragment/FormRegister";

const RegisterPage = ()=>{
    return(
        <AuthLayouts title="Register" type="Register">
            <FormRegister />    
        </AuthLayouts>
    );
};
export default RegisterPage;