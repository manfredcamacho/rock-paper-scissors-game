import ReactDOM from "react-dom";
import RulesImg from "../../assets/images/image-rules.svg";
import CloseIcon from "../../assets/images/icon-close.svg";

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
      <div className="grid grid-rows-6 gap-4 h-screen p-[30px] ">
        <div className="flex justify-center items-end row-span-1">
          <h2 className="">RULES</h2>
        </div>
        <div className="flex items-center row-span-4">
          <img src={RulesImg} alt="rules" />
        </div>
        <div className="flex justify-center row-span-1">
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
