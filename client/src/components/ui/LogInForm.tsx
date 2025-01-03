import BorderlessInput from "@components/elements/BorderlessInput";
import PasswordInput from "@components/elements/PasswordInput";
import SemiRoundedButton from "@components/elements/SemiRoundedButton";
import { FormLayout } from "@components/layouts/form.layouts";
import { HorizontalLine } from "@components/layouts/separator.layouts";

const LogInForm = () => {
  return (
    <FormLayout noValidate>
      <BorderlessInput type="email" placeholder="Email" />
      <HorizontalLine />
      <PasswordInput />
      <SemiRoundedButton type="button">Log in</SemiRoundedButton>
    </FormLayout>
  );
};

export default LogInForm;
