type MainProps = {
  className?: string;
  children: React.ReactNode;
};

const Main = (props: MainProps) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Main;
