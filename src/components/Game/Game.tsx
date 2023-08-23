import ShapeButton from "../Shape";
import BgTriangleImg from "../../assets/images/bg-triangle.svg";
import { useState } from "react";
import { Shape, GameMode, GameResult } from "../../types";
import Button from "../Button";

type GameProps = {
  gameMode?: GameMode;
  setScore: (value: number | ((prevVar: number) => number)) => void;
};

const Game = ({ gameMode = "classic", setScore }: GameProps) => {
  const [userShape, setUserShape] = useState<Shape | null>(null);
  const [computerShape, setComputerShape] = useState<Shape | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const handleUserShape = (userShape: Shape) => {
    const computerShape = getComputerShape(gameMode);
    const gameResult = getGameResult(userShape, computerShape);
    setUserShape(userShape);
    setComputerShape(computerShape);
    setGameResult(gameResult);

    if (gameResult === "win") {
      setScore((prev: number) => prev + 1);
    } else if (gameResult === "lose") {
      setScore((prev: number) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const handleReset = () => {
    setUserShape(null);
  };

  return (
    <div className="flex justify-center items-center h-full">
      {userShape && computerShape && (
        <div className="flex flex-col items-center gap-12 h-full justify-end">
          <div className="flex gap-11">
            <div className="flex flex-col items-center uppercase text-sm gap-5">
              <ShapeButton className="" variant={userShape} />
              <p>You picked</p>
            </div>
            <div className="flex flex-col items-center uppercase text-sm gap-5">
              <ShapeButton className="" variant={computerShape} />
              <p>The House picked</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="uppercase text-light text-3xl">
              {gameResult == "win"
                ? "You Win"
                : gameResult == "lose"
                ? "You Lose"
                : "Draw"}
            </p>
            <Button
              className="bg-light text-dark hover:text-red-700 w-44 h-8 text-sm"
              onClick={handleReset}
            >
              Play Again
            </Button>
          </div>
        </div>
      )}

      {!userShape && (
        <div className="relative w-[100px] h-[100px]">
          {gameMode === "classic" && (
            <>
              <img
                className="absolute scale-[1.5]"
                src={BgTriangleImg}
                alt="bg-triangle"
              />
              <ShapeButton
                className="absolute -translate-y-[60%] -translate-x-[70%]"
                handleClick={() => handleUserShape("paper")}
                variant="paper"
              />
              <ShapeButton
                className="absolute translate-y-[60%]"
                handleClick={() => handleUserShape("rock")}
                variant="rock"
              />
              <ShapeButton
                className="absolute -translate-y-[60%] translate-x-[70%]"
                handleClick={() => handleUserShape("scissors")}
                variant="scissors"
              />
            </>
          )}
          {gameMode === "extended" && (
            <>
              <img
                className="absolute -translate-y-1/4 w-4/5"
                src={BgTriangleImg}
                alt="bg-triangle"
              />
              <ShapeButton
                className="-translate-y-[80%]"
                onClick={() => handleUserShape("paper")}
                variant="paper"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

const getGameResult = (userShape: Shape, computerShape: Shape): GameResult => {
  if (userShape === computerShape) {
    return "draw";
  }

  switch (userShape) {
    case "rock":
      return computerShape === "scissors" || computerShape === "lizard"
        ? "win"
        : "lose";
    case "paper":
      return computerShape === "rock" || computerShape === "spock"
        ? "win"
        : "lose";
    case "scissors":
      return computerShape === "paper" || computerShape === "lizard"
        ? "win"
        : "lose";
    case "lizard":
      return computerShape === "paper" || computerShape === "spock"
        ? "win"
        : "lose";
    case "spock":
      return computerShape === "rock" || computerShape === "scissors"
        ? "win"
        : "lose";
  }
};

const getComputerShape = (gameMode: GameMode): Shape => {
  const shapes: Shape[] =
    gameMode === "classic"
      ? ["rock", "paper", "scissors"]
      : ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
};

export default Game;
