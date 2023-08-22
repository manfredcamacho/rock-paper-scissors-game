import RockIcon from "../../assets/icon-rock.svg";
import PaperIcon from "../../assets/icon-paper.svg";
import ScissorsIcon from "../../assets/icon-scissors.svg";
import LizardIcon from "../../assets/icon-lizard.svg";
import SpockIcon from "../../assets/icon-spock.svg";

type ShapeProps = {
  variant: "rock" | "paper" | "scissors" | "lizard" | "spock";
  className?: string;
};

const Shape = (props: ShapeProps) => {
  let img = null;
  let colors = "";

  switch (props.variant) {
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
    <div className={props.className}>
      <div
        className={`flex items-center justify-center w-24 h-24
        bg-gradient-to-r ${colors} rounded-full
        shadow-[inset_0_-4px_0px_rgba(0,0,0,0.4)]
        `}
      >
        <div
          className="flex items-center justify-center w-[72px] h-[72px]
        bg-light rounded-full 
        shadow-[inset_0_4px_0px_rgba(0,0,0,0.1)]
        "
        >
          <img className="w-8 h-8" src={img} alt={props.variant} />
        </div>
      </div>
    </div>
  );
};

export default Shape;
