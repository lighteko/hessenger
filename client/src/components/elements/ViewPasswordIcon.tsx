import view_password from "@assets/view_password.svg";
import hide_password from "@assets/hide_password.svg";
import { RefObject, useState } from "react";
import { IconLayout } from "@components/layouts/icon.layouts";
import { CenterLayout } from "@components/layouts/container.layouts";

const ViewPasswordIcon = ({ ref }: { ref: RefObject<HTMLInputElement | null> }) => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <CenterLayout
      width="20px"
      height="20px"
      onClick={() => {
        if (ref.current) {
          ref.current.type = viewPassword ? "password" : "text";
        }
        setViewPassword((prev) => !prev);
      }}
    >
      {ref.current && ref.current.value !== "" && (
        <IconLayout src={viewPassword ? hide_password : view_password} />
      )}
    </CenterLayout>
  );
};

export default ViewPasswordIcon;
