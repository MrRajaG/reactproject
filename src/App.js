import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let dummyExpenses = [
    
]

const App = () => {
    
    const [expenses, setExpenses] = useState(dummyExpenses);

    const addExpensehandler = (expense) => {
        setExpenses([expense, ...expenses]);
    }

    return(
        <div>
            <NewExpense onAddExpense={addExpensehandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}
export default App;