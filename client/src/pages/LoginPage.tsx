import hessenger from "@assets/hessenger.logo.svg";
import LogInForm from "@components/ui/LogInForm";

const LoginPage = () => {
  return (
    <>
      <div>
        <img src={hessenger} alt="logo" />
      </div>
      <LogInForm />
    </>
  );
};

export default LoginPage;
