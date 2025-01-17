import SemiRoundedButton from "@components/elements/SemiRoundedButton";
import { RoundedButtonLayout } from "@components/layouts/button.layouts";
import { ColumnLayout } from "@components/layouts/container.layouts";
import { TextLayout } from "@components/layouts/text.layouts";

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
      <TextLayout margin={0.5} size={2} weight="bold">
        Name
      </TextLayout>
      <TextLayout margin={0} size={1} weight="400">{header.content}</TextLayout>
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
        title: "Name",
        content: "Enter your full name",
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
