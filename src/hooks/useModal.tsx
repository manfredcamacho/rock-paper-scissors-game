import { useState } from "react";

const useModal = (initialValue: boolean = false): [boolean, () => void] => {
  const [isShowing, setIsShowing] = useState(initialValue);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [isShowing, toggle];
};

export default useModal;
