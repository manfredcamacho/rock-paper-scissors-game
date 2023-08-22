type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center border-solid 
      border-[1px] border-light rounded-md p-[5px]
      w-24 tracking-[0.2em] text-xs uppercase"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
