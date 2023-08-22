import Shape from "../Shape";

const Game = () => {
  return (
    <div className=" flex-1">
      <div className="">
        <Shape className="" variant="paper" />
        <Shape className="" variant="rock" />
        <Shape className="" variant="scissors" />
      </div>
    </div>
  );
};

export default Game;
