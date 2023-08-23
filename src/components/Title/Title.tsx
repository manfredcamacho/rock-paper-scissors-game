import LogoImg from "../../assets/images/logo.svg";

const Title = () => {
  return (
    <div className={`flex m-[11px]`}>
      <img className="w-20" src={LogoImg} alt="logo" />
    </div>
  );
};

export default Title;
