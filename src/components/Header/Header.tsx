type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <div className={`${props.className}`}>
      <div className="border-solid rounded-md border-2 border-header-outline p-[10px] h-[95px]">
        <div className={`flex justify-between`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Header;
