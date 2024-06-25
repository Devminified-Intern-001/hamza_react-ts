import { ReactNode } from "react";
import "./style.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  text?: string;
  icon?: ReactNode;
  lefticon?: ReactNode;
  righticon?: ReactNode;
}

const Button = (props: IButton) => {
  const { children, className, ...rest } = props;
  return (
    <div>
      <button className={className} {...rest}>
        {rest.lefticon && rest.lefticon}
        {children}
        {rest.righticon && rest.righticon}
      </button>
    </div>
  );
};

export default Button;
