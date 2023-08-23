type ScoreProps = { value?: number };

const Score = ({ value = 0 }: ScoreProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-dark bg-light rounded w-[70px] h-[70px]">
      <p className="text-xs text-score">SCORE</p>
      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
};

export default Score;
