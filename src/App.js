import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "Paper", amount: 294.67, date: new Date(2022, 2, 28) },
    { title: "Car insurance", amount: 14.67, date: new Date(2022, 4, 28) },
    { title: "Pencil", amount: 100, date: new Date(2022, 1, 27) },
    { title: "Computer", amount: 649.12, date: new Date(2022, 3, 29) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
