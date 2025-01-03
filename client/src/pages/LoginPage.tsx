import hessenger from "@assets/hessenger.logo.svg";
import { CenterLayout } from "@components/layouts/container.layouts";
import LogInForm from "@components/ui/LogInForm";

const LoginPage = () => {
  return (
    <>
      <CenterLayout width="100%" height="80%">
        <img src={hessenger} alt="logo" />
      </CenterLayout>
      <LogInForm />
    </>
  );
};

export default LoginPage;
