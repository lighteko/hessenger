import hessenger from "@assets/hessenger.logo.svg";
import { CenterLayout, RowLayout } from "@components/layouts/container.layouts";
import { LinkLayout } from "@components/layouts/link.layouts";
import LogInForm from "@components/ui/LogInForm";

const LoginPage = () => {
  return (
    <>
      <CenterLayout width="100%" height="80%">
        <img src={hessenger} alt="logo" />
      </CenterLayout>
      <LogInForm />
      <RowLayout>
        <LinkLayout to="/reset">Forgot password</LinkLayout>
        ·
        <LinkLayout to="/signup">Sign up</LinkLayout>
      </RowLayout>
    </>
  );
};

export default LoginPage;
