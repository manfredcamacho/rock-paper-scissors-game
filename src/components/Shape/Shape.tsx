import RockIcon from "../../assets/images/icon-rock.svg";
import PaperIcon from "../../assets/images/icon-paper.svg";
import ScissorsIcon from "../../assets/images/icon-scissors.svg";
import LizardIcon from "../../assets/images/icon-lizard.svg";
import SpockIcon from "../../assets/images/icon-spock.svg";
import { Shape } from "../../types";

type ShapeButtonProps = {
  variant: Shape;
  handleClick?: () => void;
  className?: string;
};

const ShapeButton = ({ variant, handleClick, className }: ShapeButtonProps) => {
  let img = null;
  let colors = "";

  switch (variant) {
    case "rock":
      img = RockIcon;
      colors = "from-rock-l to-rock-d";
      break;
    case "paper":
      img = PaperIcon;
      colors = "from-paper-l to-paper-d";
      break;
    case "scissors":
      img = ScissorsIcon;
      colors = "from-scissors-l to-scissors-d";
      break;
    case "lizard":
      img = LizardIcon;
      colors = "from-lizard-l to-lizard-d";
      break;
    case "spock":
      img = SpockIcon;
      colors = "from-spock-l to-spock-d";
      break;
    default:
      return null;
  }

  return (
    <div className={className}>
      <button
        className={`flex items-center justify-center w-[100px] h-[100px]
        bg-gradient-to-r ${colors} rounded-full
        shadow-[inset_0_-4px_0px_rgba(0,0,0,0.4)]
        ${handleClick ? "cursor-pointer" : "cursor-default"}}`}
        {...(handleClick ? { onClick: handleClick } : { disabled: true })}
      >
        <div
          className="flex items-center justify-center w-[77px] h-[77px]
        bg-light rounded-full 
        shadow-[inset_0_4px_0px_rgba(0,0,0,0.1)]
        "
        >
          <img className="w-[33px] h-[37px]" src={img} alt={variant} />
        </div>
      </button>
    </div>
  );
};

export default ShapeButton;
