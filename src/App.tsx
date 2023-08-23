import useModal from "./hooks/useModal";
import { useState } from "react";
import Header from "./components/Header/Header";
import Title from "./components/Title";
import Score from "./components/Score";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Main from "./components/Main";

function App() {
  const [isShowingModal, toggleModal] = useModal();
  const [score, setScore] = useState(0);

  return (
    <div className="container mx-auto h-screen p-[30px] grid grid-rows-6 gap-4 text-light">
      <Header className="row-span-1">
        <Title />
        <Score value={score} />
      </Header>
      <Main className="row-span-4">
        <Game gameMode="classic" setScore={setScore} />
      </Main>
      <Footer className="row-span-1">
        <Button onClick={toggleModal}>Rules</Button>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />
      </Footer>
    </div>
  );
}

export default App;
