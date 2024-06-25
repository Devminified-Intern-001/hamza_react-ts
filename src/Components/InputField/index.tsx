import React, { ReactNode } from "react";

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  text?: string;
  righticon?: ReactNode;
}

const InputField = (props: IInputField) => {
  const { label, placeholder, ...rest } = props;
  return (
    <div>
      <form action="">
        <label htmlFor="">{label}</label>
        <input type={rest.text} placeholder={placeholder} {...rest} />
        {rest.righticon}
      </form>
    </div>
  );
};

export default InputField;
