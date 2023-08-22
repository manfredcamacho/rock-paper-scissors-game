import ReactDOM from "react-dom";
import RulesImg from "../../assets/image-rules.svg";
import CloseIcon from "../../assets/icon-close.svg";

type ModalProps = {
  show: boolean;
  onCloseButtonClick: () => void;
};

const Modal = (props: ModalProps) => {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="absolute bg-light z-1 top-0 w-full h-screen text-2xl text-dark">
      <div className="flex flex-col items-center h-full py-[60px] px-[30px]">
        <div className="">
          <h2 className="">RULES</h2>
        </div>
        <div className="flex items-center flex-1">
          <img src={RulesImg} alt="rules" />
        </div>
        <div className="">
          <button onClick={props.onCloseButtonClick}>
            <img className="w-4 h-4" src={CloseIcon} alt="close" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
