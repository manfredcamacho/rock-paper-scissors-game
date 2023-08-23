type FooterProps = {
  className?: string;
  children: React.ReactNode;
};

const Footer = (props: FooterProps) => {
  return (
    <div className={props.className}>
      <div className={`flex justify-center items-center h-full`}>
        {props.children}
      </div>
    </div>
  );
};

export default Footer;
