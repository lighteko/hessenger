import { ButtonLayout } from "@components/layouts/button.layouts";
import { ISemiRoundedButtonProps } from "@interfaces/button.element.interfaces";

const SemiRoundedButton = (props: ISemiRoundedButtonProps) => {
  return (
    <ButtonLayout
      onClick={(event) => {
        const button = event.currentTarget as HTMLButtonElement;
        button.style.setProperty("--x", `${event.nativeEvent.offsetX}px`);
        button.style.setProperty("--y", `${event.nativeEvent.offsetY}px`);
      }}
      {...props}
    />
  );
};

export default SemiRoundedButton;
