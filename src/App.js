import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userSelection, setUserSelection] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)
  const [result, setResult] = useState(null)
  const selections = ["rock", "paper", "scissor"]
  const handelClick = (value) => {
    setUserSelection(value)
    generateCompSelection()

  }
  const generateCompSelection = () => {
    const randomNum = selections[Math.floor(Math.random() * selections.length)]
    setComputerSelection(randomNum)
  }
  useEffect(() => {
    checkWin()
  }, [computerSelection, userSelection])

  const checkWin = () => {
    const addSelections = userSelection + computerSelection
    if (addSelections === "scissorpaper" || addSelections === "rockscissor" || addSelections === "paperrock") {
      setResult("YOU WON!")
    }
    else if (userSelection === computerSelection) {
      setResult("ITS A DRAW!")
    }
    else {
      setResult("COMPUTER WON!")
    }
  }
  return (
    <div className="App">
      <p>User Selection: {userSelection}</p>
      <p>Computer Selection: {computerSelection}</p>
      {selections.map((select, index) =>
        <button
          key={index}
          onClick={() => handelClick(select)}>{select}
        </button>
      )}
      <p>{result}</p>
    </div>
  );
}

export default App;
