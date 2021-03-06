import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // directly from main function
  console.log(`Expense item evaluated by React`);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(`title: ${title}`);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
