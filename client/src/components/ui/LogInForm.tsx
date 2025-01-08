import BorderlessInput from "@components/elements/BorderlessInput";
import PasswordInput from "@components/elements/PasswordInput";
import SemiRoundedButton from "@components/elements/SemiRoundedButton";
import { FormLayout } from "@components/layouts/form.layouts";
import { HorizontalLine } from "@components/layouts/separator.layouts";
import useForm from "@hooks/useForm";
import { useRef } from "react";

const LogInForm = () => {
  const [onChange, disabled] = useForm(["email", "password"]);
  return (
    <FormLayout onChange={onChange} method="POST" noValidate>
      <BorderlessInput type="email" placeholder="Email" />
      <HorizontalLine />
      <PasswordInput />
      <SemiRoundedButton onSubmit={() => {}} type="submit" disabled={disabled}>
        Log in
      </SemiRoundedButton>
    </FormLayout>
  );
};

export default LogInForm;
