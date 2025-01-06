import SemiRoundedButton from "@components/elements/SemiRoundedButton";
import { CenteredRowPageLayout } from "@components/layouts/page.layouts";

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
    <CenteredRowPageLayout>
      <h1>{header.title}</h1>
      <p>{header.content}</p>
      {form}
      <SemiRoundedButton>Next</SemiRoundedButton>
      <SemiRoundedButton>Back</SemiRoundedButton>
    </CenteredRowPageLayout>
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
