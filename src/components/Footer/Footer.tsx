type FooterProps = {
  children: React.ReactNode;
};

const Footer = (props: FooterProps) => {
  return <div className="flex justify-center">{props.children}</div>;
};

export default Footer;
