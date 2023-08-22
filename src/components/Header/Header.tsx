type HeaderProps = {
  children: React.ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <div
      className={`border-solid rounded-md border-2 border-header-outline p-[10px]`}
    >
      <div className={`flex justify-between`}>{props.children}</div>
    </div>
  );
};

export default Header;
