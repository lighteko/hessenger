import SemiRoundedButton from "@components/elements/SemiRoundedButton";
import { RoundedButtonLayout } from "@components/layouts/button.layouts";
import { ColumnLayout } from "@components/layouts/container.layouts";

const Layout = ({
  header,
  form,
  validation,
}: {
  header: { title: string; content: string };
  form: React.ReactNode;
  validation: () => boolean;
}) => {
  return (
    <ColumnLayout>
      <h1>{header.title}</h1>
      <p>{header.content}</p>
      {form}
      <RoundedButtonLayout>Next</RoundedButtonLayout>
      <RoundedButtonLayout>Back</RoundedButtonLayout>
    </ColumnLayout>
  );
};

const Name = () => (
  <>
    <Layout
      header={{
        title: "",
        content: "",
      }}
      form={undefined}
      validation={function (): boolean {
        throw new Error("Function not implemented.");
      }}
    ></Layout>
  </>
);
const Email = () => <></>;
const Birthday = () => <></>;
const Gender = () => <></>;
const Password = () => <></>;
const Verify = () => <></>;

export { Name, Email, Gender, Birthday, Password, Verify };
