import useModal from "./hooks/useModal";
import Header from "./components/Header/Header";
import Title from "./components/Title";
import Score from "./components/Score";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [isShowingModal, toggleModal] = useModal();

  return (
    <div className="container mx-auto min-h-screen space-y-[30px] p-[30px] pb-[60px] flex flex-col text-light">
      <Header>
        <Title />
        <Score />
      </Header>
      <Game />
      <Footer>
        <Button onClick={toggleModal}>Rules</Button>
      </Footer>
      <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />
    </div>
  );
}

export default App;
