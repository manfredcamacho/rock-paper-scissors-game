type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      className={`${className} flex justify-center items-center border-solid 
      border-[1px] border-light rounded-md p-[5px]
      w-24 h-[30px] tracking-[0.2em] text-xs uppercase`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
