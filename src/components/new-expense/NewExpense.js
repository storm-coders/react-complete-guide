import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
  const [toggleForm, setToggleForm] = useState(false);
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseData);
    toggleHandler();
  }

  const toggleHandler = () => {
    setToggleForm(!toggleForm);
  }

  let content = <button onClick={toggleHandler}>Add New Expense</button>;
  if(toggleForm) {
    content = <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancelled={toggleHandler} />
  }

  return (
    <div className='new-expense'>      
      {content}
    </div>
  );
};

export default NewExpense;
