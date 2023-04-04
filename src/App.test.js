import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
///   const [userSelection, setUserSelection] = useState(null)
//   const [computerSelection, setComputerSelection] = useState(null)
//   const [result, setResult] = useState(null)
//   const selections = ["rock", "paper", "scissor"]
//   const handelClick = (value) => {
//     setUserSelection(value)
//     generateCompSelection()
//   }
//   const generateCompSelection = () => {
//     const randomNum = selections[Math.floor(Math.random() * selections.length)]
//     setComputerSelection(randomNum)
// 
//   }
//   useEffect(() => {
//     checkWin()
//   }, [computerSelection, userSelection])
// 
//   const checkWin = () => {
//     const addSelection = userSelection + computerSelection
//     if (addSelection === "scissorpaper" || addSelection === "rockscissor" || addSelection === "paperrock") {
//       setResult("You Win")
//     }
//     else if (addSelection === "paperscissor" || addSelection === "scissorrock" || addSelection === "rockpaper") {
//       setResult("You Lose")
//     }
//     else if (addSelection === "scissorscissor" || addSelection === "rockrock" || addSelection === "paperpaper") {
//       setResult("Its a Draw")
//     }
//   }
// 
//  
//       <h1>User Selection: {userSelection}</h1>
//       <h1>Computer Selection: {computerSelection}</h1>
//       {selections.map((select, index) =>
//         <button key={index} onClick={() => handelClick(select)}>{select}</button>)}
//       <h1>{result}</h1>